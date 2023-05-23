import React, { useContext, useState } from 'react'
import { AuthContext } from '../AuthProvider'
import { Link } from 'react-router-dom'
import { updateProfile } from 'firebase/auth'

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')  

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const username = form.name.value
        const photo = form.userImage.value
        createUser(email,password)
        .then(result => {
            const user = result.user
            console.log(user)
            setSuccess("Registration Completed")
            updateProfile(result.user, {
                displayName: username, photoURL: photo
              })
              .then(()=> {
                console.log("Profile Updated")
              })
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
        })
    }




  return (
    <div>
            <form onSubmit={handleRegister}>
            <div className="hero md:px-40 min-h-screen  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src='' alt="" className='' />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-900">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='userImage' required placeholder="img url" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered rounded-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' required placeholder="password" className="input input-bordered rounded-none" />
                                <p className='text-sm font-semibold'>Already Have An Account? <Link to="/login" className='underline text-sm'>Please Login</Link></p>
                                <p className='text-xs text-blue-600'>{success}</p>
                                <p  className='text-xs text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Log In" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
  )
}

export default Register