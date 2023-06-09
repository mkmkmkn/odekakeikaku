import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'
import { Auth } from "@supabase/auth-ui-react"
import { Todos } from '@/components/Todos.module'
import supabaseClient from '@/utils/supabaseClient'
import Link from 'next/link'
import styles from '@/styles/Plan.module.css'

type Props = {}

const Plan: NextPage = () => {
    return (
      <>
      <Head>
        <title>おでかけいかく</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Auth.UserContextProvider supabaseClient={supabaseClient}>
          <Todos supabaseClient={supabaseClient}>
            <main className={styles.main}>
                <p>ログインしていません</p>
                <Link href="/" >
                    TOPへ戻る
                </Link>
            </main>
          </Todos>
        </Auth.UserContextProvider>
      </>
    )
};

export default Plan;