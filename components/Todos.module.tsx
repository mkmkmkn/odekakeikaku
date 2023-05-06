import { Auth } from "@supabase/auth-ui-react"
import { Header } from '@/components/Header.module'
import { Sidebar } from '@/components/Sidebar.module'
import Image from 'next/image'
import styles from '@/styles/Plan.module.css'
import supabaseClient from '@/utils/supabaseClient'

function Todos(props:any) {
  const { user } = Auth.useUser();

  if (user)
    return (
        <>
        <Header title="おでかけいかく" />
        <main className={styles.main}>
            <Sidebar title="sidebarタイトル" supabaseClient={supabaseClient} />
            <div className={styles.contents}>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
                <div className={styles.card}>計画1</div>
                <div className={styles.card}>計画2</div>
                <div className={styles.card}>+</div>
            </div>
        </main>
        </>
    )
  return props.children;
}

export { Todos }