import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../AuthProvider'
import MyToyCard from './MyToyCard'

const MyToys = () => {
    const {user} = useContext(AuthContext)

    const [toysInfo,setToysInfo] =useState([])
    useEffect(()=>{
        fetch(`https://assignment-11-serverside-eight.vercel.app/addToys?email=${user.email}`)
        .then(res => res.json())
        .then(data => setToysInfo(data))
    },[])

  return (
    <div>
        <h1>My Toys</h1>
        <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toysInfo.map(item => <MyToyCard
                                key={item._id}
                                data = {item}
                                ></MyToyCard>)
                        }
                    </tbody>
                    </table>
                    </div>
        {
            
        }
    </div>
  )
}

export default MyToys