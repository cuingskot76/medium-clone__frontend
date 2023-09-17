import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const data = await res.json();

        if (data) {
          return data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          username: user.username,
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            email: token.email,
            username: token.username,
          },
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
