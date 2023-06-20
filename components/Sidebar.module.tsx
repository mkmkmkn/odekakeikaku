import React, { useCallback, useEffect, useState } from 'react';
import styles from './Sidebar.module.css'
import { Auth } from "@supabase/auth-ui-react"
import Link from 'next/link';
import supabaseClient from '@/utils/supabaseClient';
import Image from 'next/image';

export function Sidebar(props: any) {
  const { user } = Auth.useUser();

  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabaseClient
        .from('profiles')
        .select(`full_name, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabaseClient])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])
  

  if (user) {
    return (
      <aside className={styles.sidebar}>
        {avatar_url ? (
          <Image
            width={130}
            height={130}
            src={avatar_url}
            alt="Avatar"
            className={styles.avatar}
          />
        ) : (
          <div>No image</div>
        )}
        <p className={styles.name}>{fullname || ''}さん</p>
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
          <span className={styles.symbol}>Logout</span><span className={styles.logoutButtonText} >ログアウト</span>
        </button>
      </aside>
    )
  }
  return <></>;
}
