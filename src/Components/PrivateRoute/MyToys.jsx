import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthProvider'
import MyToyCard from './MyToyCard'
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(AuthContext)

    const [toysInfo, setToysInfo] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-serverside-eight.vercel.app/addToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToysInfo(data))
    }, [])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-serverside-eight.vercel.app/addToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setToysInfo(toysInfo.filter(toy => toy._id !== id))
                        }
                    })

            }
        })
    }










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
                            <th></th>                        </tr>
                    </thead>
                    <tbody>
                        {
                            toysInfo.map(item => <MyToyCard
                                key={item._id}
                                data={item}
                                handleDelete={handleDelete}
                            ></MyToyCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyToys