import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});

export { handler as GET, handler as POST };
