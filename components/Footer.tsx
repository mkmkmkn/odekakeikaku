import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Footer.module.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title?: string;
}

export function Footer(props: Props) {
  console.log(props);

  return (
    <footer className={styles.footer}>
        <p>フッターです</p>
        <h2>{props.title}</h2>
    </footer>
  )
}
