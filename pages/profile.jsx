import Head from 'next/head'
import React, { useEffect } from 'react'
import { Layout, PersonalProfile, Widgets } from '../components'
import { useSelector } from 'react-redux'

const profile = () => {
  const { loading, user } = useSelector((state) => ({ ...state.auth }))
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {user && <PersonalProfile />}
        {user && <Widgets />}
      </Layout>
    </>
  )
}

export default profile
