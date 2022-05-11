import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const PersonalProfile = () => {
  return (
    <div className="col-span-9 border-x md:col-span-8 lg:col-span-5">
      <div className="flex items-center justify-between pb-4">
        <div className="mt-5 flex items-center justify-between">
          <Link href="/">
            <span>
              <ArrowLeftIcon className="mx-5 h-6 w-6 cursor-pointer" />
            </span>
          </Link>
          <h1 className="text-lg font-bold">Alexander Joshua</h1>
        </div>
        <DotsVerticalIcon className="mr-5 mt-5 h-6 w-6 cursor-pointer text-leviplatte" />
      </div>
    </div>
  )
}

export default PersonalProfile
