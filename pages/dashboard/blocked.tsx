import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Blocked: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Blocked Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Blocked page</h1>
      </div>
    </div>
  )
}

export default Blocked
