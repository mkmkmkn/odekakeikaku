import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Plan.module.css'

import { signInWithGoogle } from '@/lib/useAuth';

const Login = () => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Googleでサインインする</button>
    </div>
  )
}

export { Login }