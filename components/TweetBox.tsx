import { DotsHorizontalIcon, PhotographIcon } from '@heroicons/react/outline'

const TweetBox = () => {
  return (
    <div className="border-y p-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Compose new post"
          className="flex-1 bg-transparent pb-8 outline-none"
        />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="inline-flex">
          <PhotographIcon className="mr-4 h-6 w-6 cursor-pointer text-gray-400" />
          <DotsHorizontalIcon className="h-6 w-6 cursor-pointer rounded-full text-gray-400 hover:bg-gray-100 hover:text-leviplatte" />
        </div>
        <button className="btn btn-warning">Post</button>
      </div>
    </div>
  )
}

export default TweetBox
