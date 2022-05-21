import type { NextPage } from 'next'
import Head from 'next/head'
import { Widgets, Layout, Feeds } from '../components'
import { setUser } from '../redux/features/auth.slice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const user =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('profile') || '{}')
      : {}

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

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
