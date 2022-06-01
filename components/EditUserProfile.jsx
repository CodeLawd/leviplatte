import { useState } from 'react'
import { InputBox, SettingsHeader, SettingsMainHeader } from './index'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { editUserProfile } from '../redux/features/profile.slice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import useFetch from '../hooks/useFetch'

const initialState = {
  username: '',
  displayName: '',
  bio: '',
  location: '',
  url: '',
}

const EditUserProfile = () => {
  const [formDetails, setFormDetails] = useState(initialState)
  const router = useRouter()
  const { userName, displayName, bio, location, url } = formDetails
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({
    ...state.auth,
  }))

  if (user !== null) {
    const { loading, error, data } = useFetch(
      'https://oracleblocksdapp.xyz/api/user',
      user.token
    )
    console.log(data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (!user?.token) {
    //   toast.error('You need to be logged in to make changes')
    //   router.push('/users/auth/signin')
    //   return
    // }
    // if (userName || displayName || bio || location || url) {
    //   dispatch(editUserProfile({ formDetails, router, toast }))
    // }
  }

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
        <button
          className="rounded-full bg-leviplatte p-2 px-5 font-bold text-white"
          onClick={handleSubmit}
        >
          {' '}
          SAVE
        </button>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <InputBox
            label="Username"
            type="text"
            placeholder="@username"
            name="username"
            onChange={handleChange}
          />
          <InputBox
            label="Display Name"
            type="text"
            placeholder="Display Name"
            name="displayName"
            onChange={handleChange}
          />
          <InputBox
            label="Bio"
            type="text"
            placeholder="Bio"
            onChange={handleChange}
            name="bio"
          />
          <InputBox
            label="Location"
            type="text"
            placeholder="Location"
            onChange={handleChange}
            name="location"
          />
          <InputBox
            label="Website URL"
            type="url"
            placeholder="Website URL"
            onChange={handleChange}
            name="url"
          />
          <InputBox
            label="Amazon wishlist"
            type="text"
            placeholder="Amazon wishlist"
          />
        </form>
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