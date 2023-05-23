import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {
    const data = useLoaderData()
    const {img,name,price,category,description,rating,quantity} = data
  return (
    <div className='md:my-10'>
        <h1 className='md:text-5xl'>Product's Details</h1>
        <hr className='border-2 border-black my-10' />
        <div className='md:flex md:justify-center md:items-center'>
        <img src={img} alt="" />
        <div>
        <h1 className='md:text-4xl text-3xl border-rose-600 border-x-2 border-t-2 md:p-10'>{name}</h1>
        <p>Price : $ {price}</p>
        <p>Rating : {rating}</p>
        <p>Available Quantity : {quantity}</p>
        <p className='border-gray-400 border-b-[2px] p-10'>{description}</p>
        </div>
        </div>
    </div>
  )
}

export default ViewDetails