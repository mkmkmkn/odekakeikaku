import React from 'react';
import styles from './Sidebar.module.css'
import { Auth } from "@supabase/auth-ui-react"
import Link from 'next/link';

export function Sidebar(props: any) {
  const { user } = Auth.useUser();

  if (user) {
    return (
      <aside className={styles.sidebar}>
        <p className={styles.name}>{user.user_metadata.full_name}さん</p>
        <ul className={styles.ul}>
          <Link href="/plan" className={styles.sidebarLink}>
            <li className={styles.li}>
              <span className={styles.symbol}>Flight</span><span className={styles.listText}>計画</span>
            </li>
          </Link>
          <Link href="/settings" className={styles.sidebarLink}>
            <li className={styles.li}>
              <span className={styles.symbol}>Settings</span><span className={styles.listText}>設定</span>
            </li>
          </Link>
        </ul>
        <button className={styles.logoutButton} onClick={() => props.supabaseClient.auth.signOut()}>
          <span className={styles.symbol}>Logout</span><span>ログアウト</span>
        </button>
      </aside>
    )
  }
  return <></>;
}
