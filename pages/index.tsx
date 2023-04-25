import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() { //pages配下なのでdefaultが必要
  return (
    <>
      <Head>
        <title>おでかけいかく</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>おでかけいかく</h1>
        <nav>
          <ul>
            <li></li>
            <li>
              <Link href="/plan">
                ログイン
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
}
