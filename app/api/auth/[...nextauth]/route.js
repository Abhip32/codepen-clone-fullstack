import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials) {
        const credentialDetails = {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        };
        return credentialDetails;
      },
    }),
  ],
  pages: {
    signIn: "/Login",
    signOut: "/"
  },
  callbacks: {

  },
});

export { handler as GET, handler as POST };
