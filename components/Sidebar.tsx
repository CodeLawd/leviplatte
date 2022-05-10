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

const Sidebar = () => {
  return (
    <div>
      <div className="cursor-pointer ml-4 my-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-bold text-leviplatte hover:border-2 hover:border-leviplatte">
        AJ
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Profile" />
      <SidebarRow Icon={UserAddIcon} title="Subscriptions" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar
