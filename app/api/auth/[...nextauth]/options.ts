// import type { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { GithubProfile } from "next-auth/providers/github";

// export const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email:",
//           type: "email",
//           placeholder: "your-cool-username",
//         },
//         password: {
//           label: "Password:",
//           type: "password",
//           placeholder: "your-awesome-password",
//         },
//       },
//       async authorize(credentials) {
//         // This is where you need to retrieve user data
//         // to verify with credentials
//         // Docs: https://next-auth.js.org/configuration/providers/credentials
//         // const user = {
//         //   id: "42",
//         //   name: "Dave",
//         //   password: "nextauth",
//         //   role: "manager",
//         // };

//         // if (
//         //   credentials?.username === user.name &&
//         //   credentials?.password === user.password
//         // ) {
//         //   return user;
//         // } else {
//         //   return null;
//         // }

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/login`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email: credentials?.email,
//               password: credentials?.password,
//             }),
//           }
//         );

//         const data = await res.json();
//         console.log("data", data);

//         if (data) {
//           return data;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       return { ...token, ...user };
//     },
//     async session({ session, token, user }) {
//       session.user = token as any;
//       return session;
//     },
//   },
// };
