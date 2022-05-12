import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { ArrowLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import EditUserProfile from '../../components/EditUserProfile'
import Head from 'next/head'
import SettingsHeader from '../../components/SettingsHeader'
import SettingsMainHeader from '../../components/SettingsMainHeader'
import UserAccountSettings from '../../components/UserAccountSettings'

const profileSettings = () => {
  const [settings, setSettings] = useState('profile')

  return (
    <>
      <Head>
        <title>Edit Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="col-span-3 border-x">
          <div className="border-b py-3 px-4">
            {' '}
            <Link href="/profile">
              <span>
                <ArrowLeftIcon className="mr-4 inline-flex h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-leviplatte hover:text-white" />{' '}
              </span>
            </Link>
            <span className="font-bold"> SETTINGS</span>
          </div>
          <div className="border-b py-3 px-4">
            <Link href="/profile">
              <span className="cursor-pointer font-medium hover:text-leviplatte">
                @codelawd{' '}
              </span>
            </Link>
          </div>

          <SettingsHeader
            onClick={() => setSettings('profile')}
            url="/profile"
            text="Profile"
          />
          <SettingsHeader
            onClick={() => setSettings('account')}
            url="/account"
            text="Account"
          />
          <SettingsHeader
            onClick={() => {}}
            url="/Account"
            text="Privacy and Safety"
          />
          <SettingsHeader
            onClick={() => {}}
            url="/Account"
            text="Notification"
          />

          <SettingsMainHeader text="General" />
          <SettingsHeader onClick={() => {}} url="/Account" text="Display" />
        </div>
        <div className="col-span-5">
          {settings == 'profile' && <EditUserProfile />}
          {settings == 'account' && <UserAccountSettings />}
        </div>
      </Layout>
    </>
  )
}

export default profileSettings
