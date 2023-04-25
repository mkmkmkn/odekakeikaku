import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Sidebar.module.css'
import { useSession, signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title?: string;
}

export function Sidebar(props: Props) {
  const { data: session } = useSession();

  return (
    <aside className={styles.sidebar}>
      <p>サイドバーです</p>
            <div>
              <h1>
                { session && (
                  session.user && session.user.name
                )}
              </h1>
              <button onClick={() => signOut()}>ログアウト</button>
            </div>
      <h2>{props.title}</h2>
    </aside>
  )
}
