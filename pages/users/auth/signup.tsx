import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button'
import InputBox from '../../../components/InputBox'
import Link from 'next/link'

const AuthPage = () => {
  const [error, setError] = useState({ state: false, message: '' })
  const [loading, setLoading] = useState(false)
  const [formDetails, setFormDetails] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormDetails({ ...formDetails, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    const { userName, email, password } = formDetails

    if (userName == '' || email == '' || password == '') {
      setError({ state: true, message: 'Please fill in all fields' })
    }

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    axios
      .post('https://oracleblocksdapp.xyz/api/user/create', formDetails)
      .then((user) => {
        setError({ state: false, message: '' })
        console.log(user)
      })
      .catch((err) => {
        setError({ state: true, message: err.message })
        setLoading(false)
      })
  }

  setInterval(() => {
    setError({ state: false, message: '' })
  }, 5000)

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="hidden bg-leviplatte sm:inline-flex">
        <h1>Leviplatte</h1>
        <h2>Sign up to support your favorite creators</h2>
      </div>
      <div className="col-span-2 bg-black p-4 sm:col-span-1">
        <div className="mx-auto mt-28 max-w-lg">
          <h1 className="font-bold text-white">Create your account</h1>
          <form onSubmit={handleSubmit}>
            <InputBox
              onChange={handleChange}
              placeholder="Name"
              type="text"
              color="white"
              name="userName"
            />
            <InputBox
              onChange={handleChange}
              placeholder="Email"
              type="email"
              color="white"
              name="email"
            />
            <InputBox
              onChange={handleChange}
              placeholder="Password"
              type="password"
              color="white"
              name="password"
            />
            {error.state && (
              <small className="pb-4 text-center text-white">
                {error.message}
              </small>
            )}
            <Button
              text={loading ? 'Submitting...' : 'Create Account'}
              bgColor="leviplatte"
              textColor="white"
            />
          </form>

          <div className="flex flex-col items-center justify-between py-6 text-center text-leviplatte sm:flex-row">
            <Link href="/users/reset">
              <span className="cursor-pointer">Forgot Password?</span>
            </Link>

            <Link href="/users/auth/signin">
              <span className="cursor-pointer">Already have an account? </span>
            </Link>
          </div>
          <Button
            text="sign up with twitter"
            bgColor="leviplatte"
            textColor="white"
          />
          <Button
            text="sign up with google"
            bgColor="leviplatte"
            textColor="white"
          />
        </div>
      </div>
    </main>
  )
}

export default AuthPage
