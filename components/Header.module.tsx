import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Header.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// props として受け取る型の定義（`Props`部分の名前はどんな名前でも可）
type Props = {
  title: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <h2>{props.title}</h2>
      <Link href="/profile" >
        Profile
      </Link>
    </header>
  )
}

export { Header }