import NextAuth from "next-auth";
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
  secret: "YOUR_SECRET_VALUE", // Add your secret value here
  pages: {
    signIn: "/Login",
    signOut: "/"
  },
});

export { handler as GET, handler as POST };
