import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from './firebase.config'

const auth = getAuth(app)


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }




    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser => {
            console.log('state changed',currentuser)
            setUser(currentuser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const sharedInfo = {
        user,
        loading,
        createUser,
    }

    return (
        <div>
            <AuthContext.Provider value={sharedInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider