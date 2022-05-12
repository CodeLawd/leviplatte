import ProfileHeader from './ProfileHeader'
import ProfileMedia from './ProfileMedia';

const PersonalProfile = () => {
  return (
    <div className="col-span-10 border-x sm:col-span-9 md:col-span-8 lg:col-span-5">
      <ProfileHeader />
      <ProfileMedia />
    </div>
  )
}

export default PersonalProfile
