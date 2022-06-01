import { useState } from 'react'
import Link from 'next/link'
import {
  SettingsHeader,
  BookmarkList,
} from '../index'
import { ArrowLeftIcon, PhotographIcon } from '@heroicons/react/outline'

const BookmarkMenu = () => {
  const [bookmark, setBookmark] = useState('photoBookmark')

  return (
    <>
      <div className="col-span-3 hidden h-screen border-x md:block">
        <div className="border-b py-3 px-4">
          {' '}
          <span onClick={() => history.back()}>
            <ArrowLeftIcon className="mr-4 inline-flex h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-leviplatte hover:text-white" />{' '}
          </span>
          <span className="text-xl font-bold"> BOOKMARK</span>
        </div>

        <SettingsHeader
          onClick={() => setBookmark('allBookmark')}
          text="All Bookmark"
        />
        <SettingsHeader
          onClick={() => setBookmark('photoBookmark')}
          text="Photos"
        />
        <SettingsHeader
          onClick={() => setBookmark('videoBookmark')}
          text="Videos"
        />
        <SettingsHeader
          onClick={() => setBookmark('audioBookmark')}
          text="Audio"
        />
        <SettingsHeader
          onClick={() => setBookmark('otherBookmark')}
          text="Others"
        />
        <SettingsHeader
          onClick={() => setBookmark('lockedBookmark')}
          text="Locked"
        />
      </div>
      <div className="col-span-10 sm:col-span-9 sm:border-l md:col-span-5">
        {bookmark == 'allBookmark' && <BookmarkList title="All Bookmark" />}
        {bookmark == 'photoBookmark' && <BookmarkList title="Photos" />}
        {bookmark == 'videoBookmark' && <BookmarkList title="Videos" />}
        {bookmark == 'audioBookmark' && <BookmarkList title="Audio" />}
        {bookmark == 'otherBookmark' && <BookmarkList title="Others" />}
        {bookmark == 'lockedBookmark' && <BookmarkList title="Locked" />}
      </div>
    </>
  )
}

export default BookmarkMenu
