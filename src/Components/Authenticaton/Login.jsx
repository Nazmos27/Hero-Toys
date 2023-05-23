import React, { useContext, useState } from 'react'
import loginImg from '../../../src/images/loginpage.png'
import { AuthContext } from '../AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBeer, FaGoogle } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Login = () => {
    const { logIn, user, googleSignIn } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = (event) => {
        setError('')
        setSuccess('')
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("Log In Successful")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log in Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, { replace: true })


            })
            .catch(error => {
                setError(error.message);

            })


    }

    const handleGoogle = () => {
        setSuccess('')
        setError('')
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
                setSuccess("User Login Successful")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log in Successfull',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="hero md:px-40 min-h-screen  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <img src={loginImg} alt="" className='' />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-900">
                            <div className="card-body">
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                    </label>
                                    <p className='text-sm font-semibold'>Don't Have An Account? <Link to="/registration" className='underline text-sm'>Register Now</Link></p>
                                    <p className='text-xs text-blue-600'>{success}</p>
                                    <p className='text-xs text-red-600'>{error}</p>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn btn-primary' value="Log In" />
                                    <div className="tooltip tooltip-bottom" data-tip="Sign In with Google">
                                    <FaGoogle onClick={handleGoogle} className='text-gray-400 text-4xl mx-auto mt-6'></FaGoogle>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login