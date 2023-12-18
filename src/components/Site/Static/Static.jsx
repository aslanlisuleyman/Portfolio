import React from 'react'
import './Static.css'

const Static = () => {
  return (
    <div>


<div className='static'>
       <div className='items'>
           <div>
             <i class="fas fa-shipping-fast"></i>
           </div>
           <div>
               <p>Free Shipping Item</p>
               <p>Orders Over $500</p>

           </div>

       </div>
       <div  className='items' >
        <div>
          <i class="fas fa-redo-alt"></i>
        </div>

         <div>
            <p>Money Back Guarantee</p>
            <p>100% money back</p>
         </div>

       </div>
       <div  className='items'>
        <div>
           <i class="fas fa-piggy-bank"></i>

        </div>
        <div>
            <p>Cash On Delivery</p>
            <p>Lorem ipsum dolar amet</p>
        </div>

       </div>
       <div  className='items'>
        <div>
            <i class="fas fa-life-ring"></i>
        </div>
        <div>
            <p>Help & Support</p>
            <p>Call us : + 0123.4567.89</p>
        </div>
       </div>

    </div>

    <div className='pct'> 
        <div> <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text.jpg" alt="" /></div>
        <div> <img src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-with-text-2.jpg" alt="" /></div>
    </div>
        
    </div>
    
  )
}

export default Static