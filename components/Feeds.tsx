import { RefreshIcon } from '@heroicons/react/outline'
import { TweetBox } from './index'
import { useSelector } from 'react-redux'

const Feeds = () => {
  const { user } = useSelector((state: any) => ({ ...state.auth }))

  return (
    <div className="col-span-10 border-x sm:col-span-9 md:col-span-8 lg:col-span-5 h-screen">
      <div className="flex items-center justify-between pb-4">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <h2></h2>
        <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-leviplatte transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* TWEET_BOX */}
      <TweetBox />
    </div>
  )
}

export default Feeds
