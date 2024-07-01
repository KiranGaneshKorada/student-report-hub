import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        student_email: {
          label: "Student Email : student1@college.edu (for testing)",
          type: "Email",
          placeholder: "student_id@college_name.edu",
        },
        password: { label: "Password : 12345678 (for testing)", type: "password"},
      },
      async authorize(credentials, req) {
        if (!credentials?.student_email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.student_email },
        });

        if (!user) {
          return null;
        }

        const isPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );

        if (isPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
