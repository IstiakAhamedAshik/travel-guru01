import React from 'react'
import { useLoaderData } from 'react-router-dom'
import HotelInfo from './HotelInfo'

const Destination = () => {
  const hotels = useLoaderData()
  console.log(hotels)
  return (
    <div>
      <div className='destination'>
        <div className='info-hotel'>
          {hotels.map((hotel) => (
            <HotelInfo key={hotel.id_} hotel={hotel}></HotelInfo>
          ))}
        </div>
        <div className='map'>
          <h6 style={{ textAlign: 'center' }}>Hereis the MAP</h6>
        </div>
      </div>
    </div>
  )
}

export default Destination
