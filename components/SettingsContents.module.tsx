import { Auth } from "@supabase/auth-ui-react"
import { Header } from '@/components/Header.module'
import { Sidebar } from '@/components/Sidebar.module'
import styles from './SettingsContents.module.css'
import supabaseClient from '@/utils/supabaseClient'

type Todo = {
  id: number,
  title: string,
  task: string,
  time: string,
  vehicle: string,
  created_at: any,
  order: number
};

type Props = {
  // todos: Todo[],
  children: any,
  supabaseClient: any
};

const SettingsContents:React.FC<Props> = (props:Props) => {
  const { user } = Auth.useUser();

  if (user)
    return (
      <>
        <Header title="おでかけいかく" />
        <div className={styles.mainRow}>
          <Sidebar supabaseClient={supabaseClient} />
          <main className={styles.main}>
            <div className={styles.contents}>
              <h2>設定</h2>
            </div>
          </main>
        </div>
      </>
    )
  
  return props.children;
}

export { SettingsContents }