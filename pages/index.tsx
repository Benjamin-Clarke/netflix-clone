import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}
