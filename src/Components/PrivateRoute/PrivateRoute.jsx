import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

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
        alert("Pelase login to proceed")
        return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
    }
}

export default PrivateRoute