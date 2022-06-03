import { useState, useEffect } from 'react'
import axios from 'axios'
import { PlusIcon } from '@heroicons/react/outline'
import { SettingsHeader } from '../index'
import { useSelector } from 'react-redux'

const ListBox = () => {
  const [userList, setUserLists] = useState([])
  const [listName, setListName] = useState("")
  const [userObj, setUserObj] = useState({})
  const [loading, setLoading] = useState(false)
  const { user } = useSelector((state) => ({ ...state.auth }))

  if (user) {
    useEffect(() => {
      axios
      .get('https://oracleblocksdapp.xyz/api/user', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((data) => {
        setUserObj(data.data)
      })
      .catch((err) => console.log('An error occured'))

      axios
        .get('https://oracleblocksdapp.xyz/api/lists', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          setUserLists(data.data)
          console.log(data)
        })
        .catch((err) => console.log('An error occured'))
    }, [])
  }

  console.log(userObj)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    axios
        .post('https://oracleblocksdapp.xyz/api/list/new', { id: userObj.userId, name: listName}, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          setUserLists(data.data)
          setLoading(false)
        })
        .catch((err) => console.log('An error occured'))
  }

  return (
    <div className="col-span-10 h-screen border-x sm:col-span-9 md:col-span-8 lg:col-span-8">
      <div className="flex items-center justify-between border-b-2 pb-4">
        <h1 className="p-5 pb-0 text-xl font-bold">Lists</h1>
        <label htmlFor="my-modal-4" className="modal-button">
          {' '}
          <PlusIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-leviplatte dark:text-white" />
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
          <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">
                Create New List
            </h3>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter list name" className="input input-bordered w-full" onChange={(e) => setListName(e.target.value)} />
            <div className="mt-3 modal-action"> 
            <button className={` ${loading && "loading"} btn btn-primary`} type="submit"> {loading ? '' : 'Save'}</button>
            </div>
            </form>
          </label>
        </label>
      </div>

      <div>
        {userList !== [] && userList?.map((userList, idx) => (
          <SettingsHeader
            text={userList.name}
            small={`${userList.slug} | List Count ${userList.listCount}`}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default ListBox
