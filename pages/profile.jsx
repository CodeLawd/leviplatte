import Head from 'next/head'
import React, { useEffect } from 'react'
import { Layout, PersonalProfile, Widgets } from '../components'

const profile = () => {
  
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PersonalProfile />
        <Widgets />
      </Layout>
    </>
  )
}

export default profile
