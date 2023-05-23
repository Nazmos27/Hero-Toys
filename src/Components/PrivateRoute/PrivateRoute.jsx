import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const PrivateRoute = ({children}) => {
    const location = useLocation()
  
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    else{
        // alert("Pelase login to proceed")
        toast("You have to Log In first!")
        
        return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    }
}

export default PrivateRoute