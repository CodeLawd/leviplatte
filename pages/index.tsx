import type { NextPage } from 'next'
import Feeds from '../components/Feeds'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import { Widgets } from '../components/Widgets'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>LeviPlatte | Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {/* <main className=""> */}
          {/* FEEDS PAGE */}
          <Feeds />
          {/* SEARCH */}
          <Widgets />
          {/* </main> */}
        </Layout>
      </div>
    </>
  )
}

export default Home
