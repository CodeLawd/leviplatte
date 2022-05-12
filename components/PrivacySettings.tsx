import SettingsMainHeader from './SettingsMainHeader'
import Toggler from './Toggler'

const PrivacySettings = () => {
  return (
    <div className="max-h-screen border-r">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-xl font-bold">PRIVACY AND SAFETY</span>
      </div>

      <SettingsMainHeader text="Privacy" />
      <div className="flex items-center justify-between border-b p-4">
        <span> Show activity status </span>

        <Toggler />
      </div>
    </div>
  )
}

export default PrivacySettings
