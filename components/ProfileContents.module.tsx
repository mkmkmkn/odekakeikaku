import { Auth } from "@supabase/auth-ui-react";
import { Header } from "@/components/Header.module";
import { Sidebar } from "@/components/Sidebar.module";
import styles from "./ProfileContents.module.css";
import supabaseClient from "@/utils/supabaseClient";
import Image from "next/image";
import AuthForm from '@/utils/auth-form';
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'

type Props = {
  children: any;
  supabaseClient: any;
};

const ProfileContents: React.FC<Props> = (props: Props) => {
  const { user } = Auth.useUser();

  // publicなバケットに画像が保存されている場合
  // const { data } = supabaseClient.storage.from('avatars').getPublicUrl("DSC02815.JPG")
  // const imageUrl = data.publicUrl


  

  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])
  
  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (avatar_url) downloadImage(avatar_url)
  }, [avatar_url, supabase])

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }






  if (user)
    return (
      <>
        <Header title="おでかけいかく" />
        <div className={styles.mainRow}>
          <Sidebar supabaseClient={supabaseClient} />
          <main className={styles.main}>
            <div className={styles.contents}>
              <h2>プロフィール</h2>

              {avatar_url ? (
                <Image
                  width={200}
                  height={200}
                  src={avatar_url}
                  alt="Avatar"
                  className={styles.avatar}
                />
              ) : (
                <div>ないよ</div>
              )}

            </div>
          </main>
        </div>
      </>
    );

  return props.children;
};

export { ProfileContents };
