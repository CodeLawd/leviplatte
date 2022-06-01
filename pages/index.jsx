// import type { NextPage } from 'next'
import Head from 'next/head'
import { Widgets, Layout, Feeds } from '../components'
import { setUser } from '../redux/features/auth.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const Home = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user } = useSelector((state) => ({ ...state.auth }))

  const user2 =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('profile') || '{}')
      : {}

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  // if (!user) {
  //   toast.error('Please login to continue')
  //   router.push('/users/auth/signin')
  //   return
  // }

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
