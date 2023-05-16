import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/picture/logo.png'
import { AuthContext } from '../authProvider/AuthProvider'
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handalelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log('error :', error))
  }
  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img src={logo} alt='' style={{ width: '50px' }} srcset='' />
        </Link>
      </div>
      <div className='rightsidenav'>
        <Link to='/blog'>Blog</Link>
        {user?.uid ? (
          <>
            {user.displayName}
            <button className='logbtn' onClick={handalelogOut}>
              Logout
            </button>
          </>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  )
}

export default Header
