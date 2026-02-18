import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "./dbConnect";

const demoUser = {
  email: "demo@gmail.com",
  password: 123456,
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(credentials);

        if (email == demoUser.email && password == demoUser.password) {
          return { success: true };
        }

        // if (!email || !password) {
        //   return null;
        // }

        // const [user] = await dbConnect.execute(
        //   "select email from users where email = ? and password = ?",
        //   [email, password]
        // );

        // if (user.length === 0) {
        //   return null;
        // } else {
        //   return user[0];
        // }

        // if (email === email || password === password) {
        //   return {
        //     email: email,
        //     password: password,
        //   };
        // }
        // Return null if user data could not be retrieved
        // return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log("from signIn", user, account);
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
};
