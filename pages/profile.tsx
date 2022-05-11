import React from 'react'
import Layout from '../components/Layout'
import PersonalProfile from '../components/Personal Profile'

const profile = () => {
  return (
    <Layout>
      <PersonalProfile />
      <div className="col-span-3 mt-2 hidden px-2 lg:inline">Side Bar</div>
    </Layout>
  )
}

export default profile
