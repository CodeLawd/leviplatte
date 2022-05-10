import type { NextPage } from 'next'
import Feeds from '../components/Feeds'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>LeviPlatte | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* SIDEBAR */}
      <Sidebar />

      {/* FEEDS PAGE */}
      <Feeds />

      {/* SEARCH */}
    </div>
  )
}

export default Home
