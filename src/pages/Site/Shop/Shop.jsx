import React from 'react'

import {  useDispatch, useSelector } from 'react-redux';
import './Shop.css'
import { addBasket } from '../../../redux/slices/basketSlice'
import { addWishlist } from '../../../redux/slices/wishlistSlice'
import { Toaster } from 'react-hot-toast';

const Shop = () => {
  const dispatch = useDispatch()
  const {data}=useSelector((state)=>state.api)
  return (
    <div style={{backgroundColor:'white' }}>
       {data.map((item, index) => {
            return (
              <div   style={{backgroundColor:'white',display:'flex',textAlign:'center'}} className='sho' key={index}> 
                 <div className='i' > <img style={{  height: '250px', width: '270px',marginLeft:'400px' }} src={item.image} alt="" />  </div>
                 <div  className='it' style={{marginTop:'40px',display:'flex',flexDirection:'column',gap:'10px',fontSize:'18px'}}>
                   <p > {item.id}</p>
                 <p > {item.name}</p>
                 <p>{item.quantityPerUnit}</p>
                 <p style={{ display: "flex", gap: "15px", justifyContent: "center", marginLeft: '8px', fontSize: '15px' }}> <div className='price'> ${item.unitPrice}</div> <div style={{ color: 'lightgray' }}><del>$21.20</del></div>  <div className='del'>20% </div></p>
                
                <div>
                  <button className='but'  onClick={() => {
          dispatch(addBasket(item))
        }} >Add To Cart</button>
                     <button style={{background:'transparent',marginLeft:'40px',color:'black',width:'180px'}} onClick={() => {
          dispatch(addWishlist(item))
        }} > <i style={{fontSize:'18px'}} class="fa-solid fa-heart"></i>  Add To Wishlist</button>
                  </div>


                 </div>
                 
                    
                   
               
                
              </div>
              
               
                
               

            
            );
          })}
          <Toaster />
    </div>
  )
}

export default Shop