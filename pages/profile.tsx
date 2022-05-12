import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import PersonalProfile from '../components/Personal Profile'
import { Widgets } from '../components/Widgets'

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
