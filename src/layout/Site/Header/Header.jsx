import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 

      <div>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg" alt="" />
      </div>
      <div >
        <ul className='site__ul' style={{textDecoration:'none'}}>
        <li> <Link style={{textDecoration:'none',color:'white'}} to='/'>Home</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/Shop'>Shop</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/WishList'>Wishlist</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/Contact'>Contact</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/Card'>Card</Link></li>
        {/* <li><Link style={{textDecoration:'none',color:'white'}} to='/CheckOut'>CheckOut</Link></li> */}
        <li><Link style={{textDecoration:'none',color:'white'}} to='/Order'>Order</Link></li>
        <li><Link style={{textDecoration:'none',color:'white'}} to='/admin'>Admin</Link></li>
    </ul>
      </div>
      <div className='button'>
        <button>Buy now</button>
        </div>

        
    </div>
  )
}

export default Header