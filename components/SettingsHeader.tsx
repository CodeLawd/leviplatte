import { ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

interface Props {
  url: string
  text: string
}

const SettingsHeader = ({ url, text }: Props) => {
  return (
    <div className="flex cursor-pointer justify-between border-b py-3 px-4 hover:bg-leviplatte hover:text-white">
      <Link href={url}>
        <span className="font-normal">{text}</span>
      </Link>
      <ChevronRightIcon className="h-6 w-6" />
    </div>
  )
}

export default SettingsHeader
