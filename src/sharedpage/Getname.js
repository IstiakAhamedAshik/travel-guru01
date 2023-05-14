import { Link } from 'react-router-dom'
const Getname = (props) => {
  const { name, id, image } = props.name
  return (
    <div>
      <div className='child'>
        <Link to={`/details/${id}`}>
          <div clasName='swiper-3'>
            <img src={image} alt='' className='picture' />
            <h6>{name}</h6>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Getname
