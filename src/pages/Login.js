import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='log-main-page'>
      <form class='from'>
        <h2>Log in here</h2>
        <input type='email' placeholder='write your mail' />
        <input type='password' placeholder='write password' />
        <button type='submit' class='btn2'>
          Log in
        </button>
        <p style={{ color: 'white' }}>
          Don't have an account ? <Link to='/register'>Create an account</Link>
          <br />
        </p>
      </form>
    </div>
  )
}

export default Login
