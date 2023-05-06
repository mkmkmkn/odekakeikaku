import React from 'react';
import styles from './Sidebar.module.css'
import { Auth } from "@supabase/auth-ui-react"

type Props = {
  title?: string;
}

export function Sidebar(props: any) {
  const { user } = Auth.useUser();

  if (user) {
    return (
      <aside className={styles.sidebar}>
        <p>{user.user_metadata.full_name}さん</p>
        <h3>{props.title}</h3>
        <ul>
          <li>計画</li>
          <li>設定</li>
        </ul>

        <button onClick={() => props.supabaseClient.auth.signOut()}>
        Sign out
        </button>
      </aside>
    )
  }
  return <></>;
}
