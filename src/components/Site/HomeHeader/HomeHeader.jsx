import React from 'react'
import './HomeHeader.css'
import { useDispatch, useSelector } from 'react-redux'





const HomeHeader = () => {
  const dispatch = useDispatch()
  const basketItems = useSelector((state) => state.baskets.items)
  const basketTotalPrice = useSelector((state) => state.baskets.basketTotalPrice)
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header__1'>
          <img className='home__header__1__img' src="https://htmldemo.net/pustok/pustok/image/logo.png" alt="" />
          <div className='home__header__1__div1'>
            <i class="fas fa-headphones-alt" style={{ color: "#1fc913", fontSize: '29px' }}></i>
            <div>
              <p>Free Support 24/7</p>
              <p ><b>+01-202-555-0181</b></p>
            </div>
          </div>
          <div className='home__header__1__pages'>
            <p>HOME <i class="fa-solid fa-chevron-down" style={{ color: "#000000;" }}></i></p>
            <p>PAGES <i class="fa-solid fa-chevron-down" style={{ color: "#000000;" }}></i></p>
            <p>SHOP <i class="fa-solid fa-chevron-down" style={{ color: "#000000;" }}></i></p>
            <p>BLOG <i class="fa-solid fa-chevron-down" style={{ color: "#000000;" }}></i></p>
            <p>CONTACT <i class="fa-solid fa-chevron-down" style={{ color: "#000000;" }}></i></p>
          </div>
        </div>
        <div className='home__header__2'>
          <div className='home__header__2__drop'>
            <i class="fa-solid fa-bars"></i>
            <p><b>Browse Categories</b></p>
          </div>
          <div className='home__header__2__search'>
            <input className='inp' type="text" placeholder='Search entire store here' />
            <button className='btn'>Search</button>
          </div>

          <div className='home__header__2__shop'>
            <div className='abc'>
              <p><b>Login</b></p>
              <p>or Register</p>
            </div>

            {/* <i class="fa-solid fa-cart-shopping aff" style={{color: "#22e208"}}></i> */}
            <i class="fa-brands fa-opencart" style={{ color: "#22e208", fontSize: "37px" }}></i>
            <div className='dollar'>
              <p >Shopping Card <span className='sp' style={{backgroundColor:'red',color:'white',borderRadius:'50%',fontSize:'17px',paddingLeft:'9px',paddingRight:'9PX'}}> {basketItems.length}</span></p>
              <p><i class="fa-solid fa-euro-sign" style={{ color: "#4ad80e" }}></i>{basketTotalPrice} AZN</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default HomeHeader
