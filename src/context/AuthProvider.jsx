import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthProvider = ({ children }) => {

    const createUserFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutuser = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUserFunc,
        loginInUser,
        signOutuser
    }

    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider