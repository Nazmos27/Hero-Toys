import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase.config'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth,provider)
    }

    const logIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
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
        googleSignIn,
        logIn,
        logOut,
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