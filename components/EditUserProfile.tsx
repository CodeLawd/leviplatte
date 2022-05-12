import InputBox from './InputBox'
import SettingsHeader from './SettingsHeader'
import SettingsMainHeader from './SettingsMainHeader'

const EditUserProfile = () => {
  return (
    <div className="max-h-screen border-r">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-xl font-bold">EDIT PROFILE</span>
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
        <SettingsHeader
          onClick={() => {}}
          text="Privacy and safety"
        />
      </div>
    </div>
  )
}

export default EditUserProfile
