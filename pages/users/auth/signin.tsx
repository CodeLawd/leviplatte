import React from 'react'
import Button from '../../../components/Button'
import InputBox from '../../../components/InputBox'
import Link from 'next/link'

const AuthPage = () => {
  return (
    <main className="grid h-screen grid-cols-2">
      <div className="hidden bg-leviplatte p-20 sm:flex sm:flex-col sm:items-end lg:pt-40 lg:pr-40">
        <h1 className="text-5xl font-bold">Leviplatte</h1>
        <h2 className="text-3xl">Sign up to support your favorite creators</h2>
      </div>
      <div className="col-span-2 bg-black p-4 sm:col-span-1">
        <div className="mx-auto mt-28 max-w-lg">
          <h1 className="font-bold text-white">Login</h1>
          <InputBox placeholder="Email" type="email" color="white" />
          <InputBox placeholder="Password" type="password" color="white" />
          <Button text="Login" bgColor="leviplatte" textColor="white" />

          <div className="py-6 text-center text-leviplatte">
            <Link href="/users/reset">
              <span className="mr-6 cursor-pointer">Forgot Password?</span>
            </Link>

            <Link href="/users/auth/signup">
              <span className="cursor-pointer">Sign up for Leiplatte</span>
            </Link>
          </div>
          <Button
            text="sign in with twitter"
            bgColor="leviplatte"
            textColor="white"
          />
          <Button
            text="sign in with google"
            bgColor="leviplatte"
            textColor="white"
          />
        </div>
      </div>
    </main>
  )
}

export default AuthPage
