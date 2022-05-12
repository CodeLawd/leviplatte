import React from 'react'

const ProfileMedia = () => {
  return (
    <div className="flex cursor-pointer items-center p-3">
      <div className="flex-[0.5] border-b-2 border-black text-center active:border-b-2 active:border-black">
        {' '}
        POSTS
      </div>
      <div className="flex-[0.5] text-center active:border-b-2 active:border-black">
        {' '}
        MEDIA
      </div>
    </div>
  )
}

export default ProfileMedia
