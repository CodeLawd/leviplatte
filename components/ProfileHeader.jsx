import {
  ArrowLeftIcon,
  ChevronDownIcon,
  CogIcon,
  DotsVerticalIcon,
  DuplicateIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import StatusModal from './StatusModal'
import { useState } from 'react'

const ProfileHeader = () => {
  const [status, setStatus] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <div className="flex h-48 items-start justify-between bg-profile-bg pb-4 text-white">
        <div className="mt-5 flex items-center justify-between">
          <Link href="/">
            <span>
              <ArrowLeftIcon className="mx-5 h-6 w-6 cursor-pointer" />
            </span>
          </Link>
          <h1 className="text-lg font-bold">Alexander Joshua</h1>
        </div>
        <DotsVerticalIcon className="mr-5 mt-5 h-6 w-6 cursor-pointer text-white" />
      </div>

      <div className="relative flex justify-between p-4 pb-0">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/52350663?v=4"
            width={100}
            height={100}
            alt="profile image"
            className="absolute bottom-1 rounded-full border-2 border-white"
          />
        </div>

        <div className="">
          <Link href="/settings/profile">
            <div className="inline-flex cursor-pointer  justify-between rounded-full border border-gray-300 p-3 text-leviplatte hover:border-leviplatte hover:bg-leviplatte hover:text-white sm:px-4">
              <CogIcon className="h-6 w-6 sm:mr-3" />{' '}
              <span className="hidden font-medium sm:inline-flex">
                EDIT PROFILE
              </span>
            </div>
          </Link>
          <div className="ml-4 inline-flex cursor-pointer rounded-full border border-gray-300 p-3 text-leviplatte hover:border-leviplatte hover:bg-leviplatte hover:text-white">
            {' '}
            <DuplicateIcon className="h-6 w-6" />{' '}
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <h2 className="md:text-md pt-3 text-lg font-bold">Alexander Joshua</h2>
        <p>
          <span className="mr-4">@codelawd</span>
          <span className="cursor-pointer hover:text-leviplatte">
            Available <ChevronDownIcon className="inline-flex h-4 w-4" />{' '}
          </span>
          {/* <span onClick={setStatus(!status)}>Available</span> */}
          {/* <ProfileStatus /> */}
          {/* <StatusModal /> */}
        </p>
      </div>
    </div>
  )
}

export default ProfileHeader
