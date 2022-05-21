import Link from 'next/link'

import SidebarRow from './SidebarRow'
import {
  BellIcon,
  UserAddIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/outline'
import ThemeSwitcher from './ThemeSwitcher'
import { ToastContainer } from 'react-toastify'

const Sidebar = () => {
  return (
    <div className="col-span-1 hidden flex-col items-start px-4 sm:inline-flex md:col-span-2 md:items-start">
      <div className="my-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 font-bold text-leviplatte hover:border-2 hover:border-leviplatte md:ml-4">
        AJ
      </div>

      <ToastContainer />

      <Link href="/">
        <span>
          <SidebarRow Icon={HomeIcon} title="Home" />
        </span>
      </Link>
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserAddIcon} title="Subscriptions" />
      <Link href="/profile">
        <span>
          <SidebarRow Icon={UserIcon} title="Profile" />
        </span>
      </Link>
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      {ThemeSwitcher()}
    </div>
  )
}

export default Sidebar
