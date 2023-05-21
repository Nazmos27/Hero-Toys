import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../AuthProvider'

const MyToys = () => {
    const {user} = useContext(AuthContext)

    const [toysInfo,setToysInfo] =useState([])
    useEffect(()=>{
        fetch(`https://assignment-11-serverside-eight.vercel.app/addToys?email=${user.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

  return (
    <div>
        <h1>My Toys</h1>
        {
            toysInfo.map(item => <p>{item.name}</p>)
        }
    </div>
  )
}

export default MyToys