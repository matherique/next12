import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const username = React.useRef<HTMLInputElement>(null)
  const password = React.useRef<HTMLInputElement>(null)
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const usernameValue = username.current?.value
    const passwordValue = password.current?.value

    if (usernameValue && passwordValue) {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            router.push('/dashboard')
          }
        }).catch(error => console.error(error.message))
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs 12</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <p><input type="text" name="username" ref={username} placeholder="username" /></p>
        <p><input type="password" name="password" ref={password} placeholder="password" /></p>
        <button>entrar</button>
      </form>
    </div>
  )
}

export default Home
