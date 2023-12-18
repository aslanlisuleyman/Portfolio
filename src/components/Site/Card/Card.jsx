import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux'
import { addBasket,} from '../../../redux/slices/basketSlice'
import { addWishlist } from '../../../redux/slices/wishlistSlice'
import { Link } from 'react-router-dom'



const Card = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className='card'>
      <p>{item.name.slice(0, 10)}</p>
      <img src={item.image} alt="" />
      <div className="overlay" >
        <p>  <i onClick={() => {
          dispatch(addBasket(item))
        }} class="fa-solid fa-basket-shopping"></i></p>


        <p> <i class="fa-solid fa-heart" style={{ color: "#e00b0b;" }} onClick={() => {
          dispatch(addWishlist(item))
        }}></i></p>
        <p><i class="fa-solid fa-arrow-right-arrow-left"></i></p>
        <Link style={{ color: 'black' }} to={`/${item.id}`}><p  > <i class="fa-solid fa-eye"></i> </p></Link>

      </div>

      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginLeft: '8px', fontSize: '15px' }}> <div className='price'> ${item.unitPrice}</div> <div style={{ color: 'lightgray' }}><del>$21.20</del></div>  <div className='del'>20% </div></div>


    </div>

  )
}

export default Card