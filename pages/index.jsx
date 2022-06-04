import { useEffect } from 'react'
import Head from 'next/head'
import { Widgets, Layout, Feeds } from '../components'
import { setUser } from '../redux/features/auth.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))

  useEffect(() => {
    const token =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('profile') || '{}')
        : {}

    axios
      .get('https://oracleblocksdapp.xyz/api/user', {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      })
      .then((data) => {
        localStorage.setItem('userProfile', JSON.stringify(data))
      })
      .catch((err) => console.log('An error occured'))

    dispatch(setUser(user))

    if (!user) {
      toast.success('Please sign in to continue')
      router.push('/users/auth/signin')
      return
    }
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
