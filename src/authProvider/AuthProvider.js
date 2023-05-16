import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signInwithGoogle = (provider) => {
    return signInWithPopup(auth, provider)
  }
  const createEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateProfileUser = (profile) => {
    updateProfile(auth.currentUser, profile)
  }
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    signInwithGoogle,
    logOut,
    createEmailPassword,
    login,
    updateProfileUser,
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
