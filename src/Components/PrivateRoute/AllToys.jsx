import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AllToysCard from './AllToysCard'
import { FaSearch } from 'react-icons/fa'
import useTitle from '../../CustomHooks/useTitle'

const AllToys = () => {

  const normalData = useLoaderData()
  const [ordered,setOrdered] = useState(normalData)
  useTitle("All toys")
  // const [searchData,setSearchData] = useState()
  const [query,setQuery] = useState('')
  useEffect(()=>{
    const fetchUser = async () => {
      const result = await fetch(`https://assignment-11-serverside-eight.vercel.app/addToysCollection?search=${query}`)
      const data = await result.json()
      setOrdered(data)
    }
    fetchUser()
  },[query])

  
  const handleAsscending = async() => {
    const res = await fetch(`https://assignment-11-serverside-eight.vercel.app/addToys?value=price&type=-1`)
    const data =  await res.json()
    console.log(data);
    setOrdered(data)
  }
  const handleDesscending = async() => {
    const res = await fetch(`https://assignment-11-serverside-eight.vercel.app/addToys?value=price&type=1`)
    const data =  await res.json()
    console.log(data);
    setOrdered(data)
  }

  return (
    <div>
      <h1 className='text-4xl'>All Toys</h1>
      <hr className='border-black brder-[2px] my-6 w-2/3 mx-auto' />
      <div className='flex justify-end'>
      <input className='input input-bordered rounded-none italic ' onChange={(e) => setQuery(e.target.value)} type="text" name="search" placeholder='search by product name'  id="" />
      <button className='btn btn-accent rounded-none '><FaSearch className='text-gray-500 text-2xl'></FaSearch></button>
      
      </div>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-primary m-1">Sort <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li onClick={handleDesscending}><a>Low to High</a></li>
          <li onClick={handleAsscending}><a>High To Low</a></li>
        </ul>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-4 md:px-36 md:my-10'>

        {
          ordered.map(item => <AllToysCard
            key={item._id}
            data={item}
          ></AllToysCard>)
        }
      </div>
    </div>
  )
}

export default AllToys