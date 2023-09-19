export interface UserProps {
  id: string;
  email: string;
  username: string;
  exp: number;
}

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      username: string;
    };
  }
}
