import React, { useEffect, useState } from 'react'
import Getname from '../sharedpage/Getname'
import { useNavigate } from 'react-router-dom'

const Slider = () => {
  const [names, setName] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://travel-guru-server-orcin.vercel.app/names')
      .then((res) => res.json())
      .then((data) => setName(data))
  }, [])
  const gotoblogPage = () => {
    navigate('/blog')
  }
  return (
    <div>
      <div className='home-details'>
        <div className='details'>
          <h2>TO TRAVEL IS TO LIVE</h2>
          <p>
            We hope they inspired you to pack up everything and head out into
            the unknown, to explore the farthest reaches of our planet and your
            soul, to see the world for what it really is....
          </p>
          <button onClick={gotoblogPage}>See blog</button>
        </div>
        <div className='ima'>
          {names.map((name) => (
            <Getname key={name.id} name={name}></Getname>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
