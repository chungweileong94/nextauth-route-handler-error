import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    credentials({
      async authorize() {
        return { name: "John Doe", email: "lX0R0@example.com" };
      },
    }),
  ],
});
