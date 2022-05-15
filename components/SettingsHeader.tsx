import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

interface Props {
  text: string
  small?: string
  onClick: () => void
}

const SettingsHeader = ({ text, onClick = () => {}, small }: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer justify-between items-center border-b py-3 px-4 dark:hover:text-black dark:hover:bg-white hover:bg-leviplatte hover:text-white"
    >
      <div>
        
          <span className="font-normal">{text}</span>
      
        <small className="block">{small}</small>
      </div>
      <ChevronRightIcon className="h-6 w-6" />
    </div>
  )
}

export default SettingsHeader
