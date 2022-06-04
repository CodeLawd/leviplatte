import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { ArrowLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import EditUserProfile from '../../components/EditUserProfile'
import Head from 'next/head'
import SettingsHeader from '../../components/SettingsHeader'
import SettingsMainHeader from '../../components/SettingsMainHeader'
import UserAccountSettings from '../../components/UserAccountSettings'
import UserNotification from '../../components/UserNotification'
import PrivacySettings from '../../components/PrivacySettings'
import UserDisplaySettings from '../../components/UserDisplaySettings'
import { useDispatch, useSelector } from 'react-redux'
import { updateSettings } from '../../redux/features/settings.slice'

const profileSettings = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => ({ ...state.settings }))

  return (
    <>
      <Head>
        <title>Edit Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="col-span-3 hidden h-screen border-x md:block">
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
            onClick={() => dispatch(updateSettings('profile'))}
            text="Profile"
          />
          <SettingsHeader
            onClick={() => dispatch(updateSettings('account'))}
            text="Account"
          />
          <SettingsHeader
            onClick={() => dispatch(updateSettings('privacy'))}
            text="Privacy and Safety"
          />
          <SettingsHeader
            onClick={() => dispatch(updateSettings('notification'))}
            text="Notification"
          />

          <SettingsMainHeader text="General" />
          <SettingsHeader
            onClick={() => dispatch(updateSettings('display'))}
            text="Display"
          />
        </div>
        <div className="col-span-10 sm:col-span-9 sm:border-l md:col-span-5">
          {value == 'profile' && <EditUserProfile />}
          {value == 'account' && <UserAccountSettings />}
          {value == 'privacy' && <PrivacySettings />}
          {value == 'notification' && <UserNotification />}
          {value == 'display' && <UserDisplaySettings />}
        </div>
      </Layout>
    </>
  )
}

export default profileSettings
