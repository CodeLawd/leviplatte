import React from 'react'
import { BookmarkIcon, CollectionIcon } from '@heroicons/react/outline'

const BookmarkList = ({ title }) => {
  return (
    <div className="flex flex-col border-r">
      <div className="flex items-center justify-between border-b py-3 px-4">
        <span className="text-lg font-bold uppercase"> {title} </span>
        <span>
          <CollectionIcon className="mr-4 inline-flex h-6 w-6 cursor-pointer" />{' '}
        </span>
      </div>

      <div className="flex h-screen flex-col items-center justify-center">
        <BookmarkIcon className="h-20 w-20" />
        <span>No bookmark yet</span>
      </div>
    </div>
  )
}

export default BookmarkList
