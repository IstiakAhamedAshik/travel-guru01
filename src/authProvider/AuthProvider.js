import React, { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const user = {
    name: 'istiak ahamed ashik',
  }
  const authInfo = { user }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider