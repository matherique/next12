import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Dashboard: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}

export default Dashboard
