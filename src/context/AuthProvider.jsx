import React from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'

const AuthProvider = ({ children }) => {

    const createUserFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        createUserFunc


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider