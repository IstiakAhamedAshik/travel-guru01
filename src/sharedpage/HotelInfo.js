import React from 'react'
import { FaStar } from 'react-icons/fa'
const HotelInfo = (props) => {
  const { name, appartment, description, rating, rent, picture } = props.hotel
  return (
    <div>
      <h4>{name}</h4>
      <div className='hotel-mother'>
        <div className='image-hotel'>
          <img src={picture} alt='' />
        </div>
        <div className='hotel-desc'>
          <h6>{appartment}</h6>
          <p>{description}</p>
          <p>
            <span>
              <FaStar
                style={{ color: ' rgb(211, 134, 35)', marginRight: '2px' }}
              ></FaStar>
            </span>
            {rating}
          </p>
          <p>{rent}</p>
        </div>
      </div>
    </div>
  )
}

export default HotelInfo
