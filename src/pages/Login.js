import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../authProvider/AuthProvider'
const provider = new GoogleAuthProvider()
const Login = () => {
  const { signInwithGoogle, login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'
  const handaleGooglelogIn = () => {
    signInwithGoogle(provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log('error :', error)
      })
  }
  const handalelogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log('error :', error)
      })
    form.reset()
  }
  return (
    <div className='log-main-page'>
      <form class='from' onSubmit={handalelogin}>
        <h6>Log in here</h6>
        <input type='email' name='email' placeholder='write your mail' />
        <input type='password' name='password' placeholder='write password' />
        <button type='submit' class='btn2'>
          Log in
        </button>
        <p style={{ color: 'white', textAlign: 'center', fontSize: '12px' }}>
          Don't have an account ? <Link to='/register'>Create an account</Link>
          <br />
        </p>
      </form>
      <div className='google-button'>
        <button onClick={handaleGooglelogIn}>
          <FaGoogle style={{ marginRight: '20px' }} />
          Countine with Google
        </button>
      </div>
    </div>
  )
}

export default Login
