import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../authProvider/AuthProvider'
const Register = () => {
  const { createEmailPassword, updateProfileUser } = useContext(AuthContext)
  const handaleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const url = form.url.value
    const name = form.name.value
    createEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUserProfile(name, url)
        console.log(user)
      })
      .catch((error) => {
        console.log('error :', error)
      })
    form.reset()
  }
  const setUserProfile = (name, url) => {
    let profile = {
      displayName: name,
      photoURL: url,
    }
    updateProfileUser(profile)
      .then(() => {})
      .catch((error) => {
        console.log('error:', error)
      })
  }
  return (
    <div className='log-main-page'>
      <form class='reg-from' onSubmit={handaleSubmit}>
        <h2>Registration Here</h2>
        <input type='text' name='name' placeholder='write your User name' />
        <input type='text' name='url' placeholder='give your Url' />
        <input type='email' name='email' placeholder='write your email' />
        <input type='password' name='password' placeholder='write password' />
        <button type='submit' class='btn2'>
          Register
        </button>
        <p style={{ color: 'white', textAlign: 'center' }}>
          Already have an account ? <Link to='/login'>Log in</Link>
          <br />
        </p>
      </form>
    </div>
  )
}

export default Register
