import type { NextPage } from 'next'
import Feeds from '../components/Feeds'
import Head from 'next/head'
import { Widgets } from '../components/Widgets'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>LeviPlatte</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          
          {/* FEEDS PAGE */}
          <Feeds />
          {/* SEARCH */}
          <Widgets />
        </Layout>
      </div>
    </>
  )
}

export default Home
