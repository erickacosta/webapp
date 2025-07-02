// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** Include your custom id on `session.user` */
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    /** Ensure the `user.id` from your database is carried through */
    id: string;
  }
}
