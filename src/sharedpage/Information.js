import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Information = () => {
  const information = useLoaderData()

  return (
    <div>
      <div className='backGround'>
        <div className='backGround0'>
          <div className='motherInfo'>
            <div className='detaileInfo'>
              <h1>{information.name}</h1>
              <p>{information.description}</p>
            </div>
            <div className='destinationinfo'>
              <div>
                <label style={{ display: 'block' }} htmlFor='Origin'>
                  Origin
                </label>
                <input defaultValue='Dhaka' type='text' />
              </div>
              <div style={{ marginTop: '7px' }}>
                <label style={{ display: 'block' }} htmlFor='Destination'>
                  Destination
                </label>
                <input defaultValue={information.name} type='text' />
              </div>
              <Link to={`/category/${information.id}`}>
                <button>Start Booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
