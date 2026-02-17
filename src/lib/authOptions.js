import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const demoUser = {
  email: "demo@gmail.com",
  password: 123456,
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        if (email === demoUser.email || password === demoUser.password) {
          return {
            email: demoUser.email,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
