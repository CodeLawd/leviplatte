import { ProfileHeader, ProfileMedia } from './index'

const PersonalProfile = () => {
  return (
    <div className="col-span-10 border-x sm:col-span-9 md:col-span-8 lg:col-span-5 h-screen">
      <ProfileHeader />
      <ProfileMedia />
    </div>
  )
}

export default PersonalProfile
