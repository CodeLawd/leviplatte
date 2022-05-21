import { ChevronRightIcon } from '@heroicons/react/outline'

interface Props {
  text: string
  small?: string
  onClick: () => void
}

const SettingsHeader = ({ text, onClick = () => {}, small }: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center justify-between border-b py-3 px-4 hover:bg-leviplatte hover:text-white dark:hover:bg-white dark:hover:text-black"
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
