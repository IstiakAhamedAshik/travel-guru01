import React, { useContext } from 'react'
import { AuthContext } from '../authProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext)
  const location = useLocation()
  if (loader) {
    return <Spinner animation='border' />
  }
  if (user?.uid) {
    return children
  } else {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
}

export default PrivateRoute
