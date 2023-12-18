

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Wishlist.css';
import { deleteWishlist, deleteWishlists } from '../../../redux/slices/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.wishlist);

  const handleDeleteAll = () => {
    dispatch(deleteWishlist());
  };

  const handleDelete = (itemId) => {
    dispatch(deleteWishlists({ id: itemId }));
  };

  return ( 
    <div style={{display:'flex',flexDirection:'column',backgroundColor:'white'}}>
    <div style={{marginTop:'90px',backgroundColor:'white',marginLeft:'85.5%'}}>
       <button className='sil' onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
   
    <div className='wishs' style={{ backgroundColor: 'white' }}>
      
      {items.map((item, index) => {
        return (
          <div className='wish' style={{ marginTop: '20px' }} key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>{item.name.slice(0, 20)}</div>
            <div>{item.unitPrice}</div>
            <div>
              
                <button  class="bn30"  onClick={() => handleDelete(item.id)}>Delete</button>
              
            </div>
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default Wishlist;
