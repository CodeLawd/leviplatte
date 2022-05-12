import React from 'react'
import Layout from '../../components/Layout'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const profileSettings = () => {
  return (
    <Layout>
      <div className="col-span-3 border-x">
        <div className="border-b py-3 px-4">
          {' '}
          <ArrowLeftIcon className="mr-4 inline-flex h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-leviplatte hover:text-white" />{' '}
          <span className="font-medium"> SETTINGS</span>
        </div>
        <div className="py-3 px-4 border-b">
          <Link href="/profile">
            <span className="font-medium hover:text-leviplatte cursor-pointer">
            @codelawd </span>
          </Link>
        </div>

        <div className="py-3 px-4 border-b cursor-pointer hover:text-white hover:bg-leviplatte">
          <Link href="/profile">
            <span className="font-medium ">
            PROFILE</span>
          </Link>
          
        </div>
      </div>
      <div className="col-span-5"> Hello</div>
    </Layout>
  )
}

export default profileSettings
