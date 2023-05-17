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
  const [loader, setLoader] = useState(true)

  const signInwithGoogle = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }
  const createEmailPassword = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const updateProfileUser = (profile) => {
    setLoader(true)
    updateProfile(auth.currentUser, profile)
  }
  const logOut = () => {
    setLoader(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
      setLoader(false)
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
    loader,
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
