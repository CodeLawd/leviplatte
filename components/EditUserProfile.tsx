import InputBox from './InputBox'
import SettingsHeader from './SettingsHeader'
import SettingsMainHeader from './SettingsMainHeader'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/outline'

const EditUserProfile = () => {
  return (
    <div className="max-h-screen border-r">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center">
          <Link href="/profile">
            <span className="md:hidden">
              <ArrowLeftIcon className="mr-4 inline-flex h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-leviplatte hover:text-white" />{' '}
            </span>
          </Link>
          <span className="text-xl font-bold">EDIT PROFILE</span>
        </div>
        <button className="rounded-full bg-leviplatte p-2 px-5 font-bold text-white">
          {' '}
          SAVE
        </button>
      </div>
      <div className="p-4">
        <InputBox label="Username" type="text" placeholder="@username" />
        <InputBox label="Display Name" type="text" placeholder="Display Name" />
        <InputBox label="Bio" type="text" placeholder="Bio" />
        <InputBox label="Location" type="text" placeholder="Location" />
        <InputBox label="Website URL" type="url" placeholder="Website URL" />
        <InputBox
          label="Amazon wishlist"
          type="text"
          placeholder="Amazon wishlist"
        />
      </div>
      <div>
        <SettingsMainHeader text="Subscription" />
        <SettingsHeader
          onClick={() => {}}
          text="Subscription price and bundles"
        />
      </div>
      <div>
        <SettingsMainHeader text="Related Settings" />
        <SettingsHeader onClick={() => {}} text="Privacy and safety" />
      </div>
    </div>
  )
}

export default EditUserProfile
