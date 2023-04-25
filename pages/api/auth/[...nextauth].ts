import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

type ClientType = {
  clientId: string;
  clientSecret: string;
};

const authOptions: NextAuthOptions = {
  //1 つ以上の認証プロバイダーを構成する
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
    //...ここにプロバイダーを追加
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
