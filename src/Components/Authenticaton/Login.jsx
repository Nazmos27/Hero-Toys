import React, { useContext } from 'react'
import loginImg from '../../../src/images/loginpage.png'
import { AuthContext } from '../../../AuthProvider'

const Login = () => {
    const {createUser,user} = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        createUser(email,password)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
        console.log(user);
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

export default Login