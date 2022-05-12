import React from 'react'
import SettingsHeader from './SettingsHeader'
import SettingsMainHeader from './SettingsMainHeader'

const UserAccountSettings = () => {
  return (
    <div className="max-h-screen border-r">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-xl font-bold">ACCOUNT</span>
      </div>

      <SettingsMainHeader text="Account Info" />
      <SettingsHeader onClick={() => {}} text="Username" small="@codelawd" />
      <SettingsHeader
        onClick={() => {}}
        text="Email"
        small="alexander.joshua2018@gmail.com"
      />
      <SettingsHeader onClick={() => {}} text="Phone Number" />

      <SettingsMainHeader text="Connected Account" />
      <SettingsHeader
        onClick={() => {}}
        text="Connect another Leviplatte account"
      />

      <SettingsMainHeader text="Security" />
      <SettingsHeader onClick={() => {}} text="Password" />
      <SettingsHeader onClick={() => {}} text="Login session" />
      <SettingsHeader onClick={() => {}} text="Two step verification" />

      <SettingsMainHeader text="Account Management" />
      <SettingsHeader onClick={() => {}} text="Delete Account" />
    </div>
  )
}

export default UserAccountSettings
