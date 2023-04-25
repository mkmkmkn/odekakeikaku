import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';

//このページは本番では使わない予定
const Login: NextPage = () => {
  // sessionの値のイメージ
  // {
  //  "user":{
  //    "name":"mk",
  //    "email":"XXXX@email.com",
  //    "image":"https://lh3.googleusercontent.com/a/ABCdef_GHijKlMn=s99-c"
  //  },
  //  "expires":"2023-04-25T12:30:59.000Z"
  // }
  const { data: session } = useSession();

  return (
    <>
      {
        // セッションがある場合、ログアウトを表示
        session && (
          <div>
            <h1>ようこそ, {session.user && session.user.name}</h1>
            <button onClick={() => signOut()}>ログアウト</button>
          </div>
        )
      }
      {
        // セッションがない場合、ログインを表示
        // ログインボタンを押すと、ログインページに遷移する
        !session && (
          <div>
            <p>ログインしていません</p>
            <button onClick={() => signIn()}>ログイン</button>
          </div>
        )
      }
    </>
  );
};

export default Login;