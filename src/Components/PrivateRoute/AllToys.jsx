import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllToysCard from './AllToysCard'

const AllToys = () => {
    
    const allToysCollection = useLoaderData()
    
  return (
    <div className='md:grid grid-cols-2 md:gap-4 md:px-36 md:my-10'>
        {
            allToysCollection.map(item => <AllToysCard
            key={item._id}
            data={item}
            ></AllToysCard>)
        }
    </div>
  )
}

export default AllToys