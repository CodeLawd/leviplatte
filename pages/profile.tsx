import React from 'react'
import Layout from '../components/Layout'
import PersonalProfile from '../components/Personal Profile'
import { Widgets } from '../components/Widgets';

const profile = () => {
  return (
    <Layout>
      <PersonalProfile />
      <Widgets />
    </Layout>
  )
}

export default profile
