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
      const [rows] = await dbConnect.execute(
        "select email from users where email= ?",
        [user.email]
      );

      if (rows.length > 0) {
        return true;
      }

      try {
        const query = `INSERT INTO users (name, email, image, provider, role)
        VALUES (?, ?, ?, ?, ?)`;

        const [res] = await dbConnect.execute(query, [
          user.name,
          user?.email,
          user.image,
          account.provider,
          "user",
        ]);
        if (res.affectedRows) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, user, token }) {
      // if (token) {
      //   session.role = token?.role;
      // }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("from jwt", user);
      return token;
    },
  },
};
