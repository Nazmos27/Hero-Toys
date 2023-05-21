import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../AuthProvider'

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')   

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>All toys</Link></li>
                            <li><Link>My toys</Link></li>
                            <li><Link>Add a toy</Link></li>
                            <li><Link>Blogs</Link></li>
                        </ul>
                    </div>
                    <img src={"https://cdn-icons-png.flaticon.com/512/1142/1142749.png?w=740&t=st=1684687799~exp=1684688399~hmac=ccd29a961f2013fc9b435e5440a4ec3b06bb5df50c172e9efae8b390d619b2d5"} className='h-20 w-20' alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Hero Toys</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link to="/allToys">All toys</Link></li>
                        <li><Link to="/addedToysCollection">My toys</Link></li>
                        <li><Link to="/addToys">Add a toy</Link></li>
                        <li><Link to="/blogs" >Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 rounded-full">
                        <img src={user?.displayImage} />
                    </div>
                    {
                        user? <button className='btn btn-primary' onClick={handleLogOut}>Logout</button> : <Link to="/login" className="btn">Log In</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar