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
  LoginIcon,
  LogoutIcon,
} from '@heroicons/react/outline'

import { ThemeSwitcher, SideDrawer } from './index'
import { ToastContainer } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/auth.slice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))
  const router = useRouter()

  const handleClick = () => {
    dispatch(setLogout())
    toast.success(
      'Successfully Signed Out. \n You will be redirecetd to the login page within 3 secs'
    )
    router.push('/users/auth/signin')
  }

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
      <Link href="/lists">
        <span>
          <SidebarRow Icon={CollectionIcon} title="Lists" />
        </span>
      </Link>
      <SidebarRow Icon={UserAddIcon} title="Subscriptions" />
      <Link href="/profile">
        <span>
          <SidebarRow Icon={UserIcon} title="Profile" />
        </span>
      </Link>
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

      {user?.token ? (
        <span onClick={handleClick} className="block">
          <SidebarRow Icon={LogoutIcon} title="SignOut" />
        </span>
      ) : (
        <Link href="/users/auth/signin">
          <span>
            <SidebarRow Icon={LoginIcon} title="SignIn" />
          </span>
        </Link>
      )}
      {ThemeSwitcher()}
    </div>
  )
}

export default Sidebar
