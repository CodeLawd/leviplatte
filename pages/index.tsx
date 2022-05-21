import type { NextPage } from 'next'
import Feeds from '../components/Feeds'
import Head from 'next/head'
import { Widgets } from '../components/Widgets'
import Layout from '../components/Layout'
import { setUser } from '../redux/features/auth.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home: NextPage = () => {
  // const dispatch = useDispatch()
  // const user = JSON.parse(localStorage.getItem('profile') || '{}')

  // useEffect(() => {
  //   dispatch(setUser(user))
  // }, [])

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
