import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

export const Widgets = () => {
  return (
    <div className="col-span-3 mt-2 hidden px-2 lg:inline">
      <div className="mx-4 mt-2 flex items-center space-x-2 rounded-md border-2 py-2 px-4 hover:border-gray-400">
        <input
          type="text"
          placeholder="Search posts"
          className="flex-1 bg-transparent outline-none"
        />
        <SearchIcon className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  )
}
