import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer1'>
        <div className='footer1__div1'>
            <img src="https://htmldemo.net/pustok/pustok/image/logo--footer.png" alt="" />
            <span><b>Address:</b>Example Street 98, HH2<br /> BacHa, New York, USA</span>
            <span><b>Phone:</b>+18088 234 5678</span>
            <span><b>Email:</b>suport@hastech.com</span>
        </div>
        <div className='footer1__div2'>
            <h4>INFORMATION</h4>
            <span>Prices drop</span>
            <span>New products</span>
            <span>Best sales</span>
            <span>Contact us</span>
            <span>Sitemap</span>
        </div>
        <div className="footer1__div3">
            <h4>EXTRAS</h4>
            <span>Delivery</span>
            <span>About Us</span>
            <span>Stores</span>
            <span>Contact us</span>
            <span>Sitemap</span>
        </div>
        <div className="footer1__div4">
          <h4>NEWSLETTER SUBSCRIBE</h4>
          <input type="text" placeholder='Enter your email' />
          <button>Subscribe</button>
          <h3>STAY CONNECTED</h3>
          <div>
            <i class="fa-brands fa-facebook" style={{color: "#004fd6"}}></i>
            <i class="fa-brands fa-twitter" style={{color: "#5685d7"}}></i>
            <i class="fa-brands fa-google-plus-g" style={{color: "#fa8500"}}></i>
            <i class="fa-brands fa-youtube" style={{color: "#f52500"}}></i>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div>  
          <p className='footer__p1'>Suspendisse in auctor augue. Cras fermentum est ac fermentum tempor. Etiam vel magna volutpat, posuere eros</p>
        </div>
        <div className='footer__i'>
          <i class="fa-brands fa-cc-paypal icon" style={{color: "#ffffff"}}></i>
          <i class="fa-brands fa-cc-discover icon" style={{color: "#ffffff"}}></i>
          <i class="fa-brands fa-cc-visa icon" style={{color: "#ffffff"}}></i>
          <i class="fa-brands fa-cc-stripe icon" style={{color: "#ffffff"}}></i>
        </div>
        <div>  <p className='footer__p2'>Copyright © 2022 <span>Pustok</span>. All Right Reserved.</p>  </div>
        <div> <p className='footer__p2'>Design By Pustok</p> </div>    
      </div>
    </>
    
  )
}

export default Footer