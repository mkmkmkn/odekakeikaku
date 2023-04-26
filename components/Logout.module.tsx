import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Plan.module.css'

import { signOut } from '@/lib/useAuth';

const Logout = () => {
  return (
    <div>
      <button onClick={signOut}>サインアウト</button>
    </div>
  )
}

export { Logout }