import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { SettingsHeader } from '../index'

const ListBox = () => {
  return (
    <div className="col-span-10 h-screen border-x sm:col-span-9 md:col-span-8 lg:col-span-8">
      <div className="flex items-center justify-between border-b-2 pb-4">
        <h1 className="p-5 pb-0 text-xl font-bold">Lists</h1>
        <PlusIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-leviplatte" />
      </div>

      <div>
        <SettingsHeader text="Bookmarks" small="empty" />
        <SettingsHeader text="Friends" small="empty" />
        <SettingsHeader text="Following" small="1 person | 291 posts" />
        <SettingsHeader text="Restricted" small="1 person | 291 posts" />
        <SettingsHeader text="Blocked" small="1 person | 291 posts" />
      </div>
    </div>
  )
}

export default ListBox
