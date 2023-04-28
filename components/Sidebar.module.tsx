import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Sidebar.module.css'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title?: string;
}

export function Sidebar(props: Props) {

  return (
    <aside className={styles.sidebar}>
      <p>○○さん</p>
      <h3>{props.title}</h3>
      <ul>
        <li>計画</li>
        <li>設定</li>
      </ul>

      <div>aaaaaaaaaaaa
      </div>
    </aside>
  )
}
