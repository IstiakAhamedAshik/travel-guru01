import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/picture/logo.png'
const Header = () => {
  return (
    <div className='header'>
      <div>
        <Link to='/'>
          <img src={logo} alt='' style={{ width: '50px' }} srcset='' />
        </Link>
      </div>
      <div className='rightsidenav'>
        <Link to='/blog'>Blog</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default Header
