import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "./dbConnect";
import { loginUser } from "@/actions/Server/auth";

const demoUser = {
  email: "demo@gmail.com",
  password: 123456,
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("from signIn", user, account);

      const [rows] = await dbConnect.execute(
        "select email from users where email=?",
        [user.email]
      );

      if (rows.length > 0) {
        return true;
      }

      const query = `INSERT INTO users (name, email, image, provider)
          VALUES (?, ?, ?, ?)`;

      await dbConnect.execute(query, [
        user.name,
        user?.email,
        user.image,
        account.provider,
      ]);
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
