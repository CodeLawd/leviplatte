import React from 'react'
import Button from '../../../components/Button'
import InputBox from '../../../components/InputBox'
import Link from 'next/link'

const AuthPage = () => {
  return (
    <main className="grid h-screen grid-cols-2">
      <div className="hidden bg-leviplatte sm:inline-flex">
        <h1>Leviplatte</h1>
        <h2>Sign up to support your favorite creators</h2>
      </div>
      <div className="col-span-2 flex items-center justify-center bg-black p-4 sm:col-span-1">
        <div className="w-max">
          <h1 className="font-bold text-white">Create your account</h1>
          <InputBox placeholder="Name" type="text" color="white" />
          <InputBox placeholder="Email" type="email" color="white" />
          <InputBox placeholder="Password" type="password" color="white" />
          <Button text="Create Account" bgColor="leviplatte" textColor="white" />

          <div className="py-6 text-center text-leviplatte">
            <Link href="/users/reset">
              <span className="mr-6 cursor-pointer">Forgot Password?</span>
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
