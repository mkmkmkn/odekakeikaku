import styles from './Header.module.css'
import Link from 'next/link'

// props として受け取る型の定義（`Props`部分の名前はどんな名前でも可）
type Props = {
  title: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <Link href="/plan">
        <h1>{props.title}</h1>
      </Link>
      <Link href="/profile" >
        <p><span>Person</span>プロフィール</p>
      </Link>
    </header>
  )
}

export { Header }