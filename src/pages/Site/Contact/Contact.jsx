

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Contact = () => {
  return (
    <div style={{ paddingTop: '120px',backgroundColor:'white',paddingLeft:'14%',display:'flex',flexDirection:'column' }}>

       <div >
      <iframe
        title="Baku Location"
        style={{ width: '85%', height: '470px' }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.352571622814!2d49.8714482153162!3d40.40926367936324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307045d9a3a89b%3A0x7efc16b8105fb81!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2sus!4v1605814183695!5m2!1sen!2sus"
        
      ></iframe>
    </div>


    <div style={{marginTop:'60px',display:"flex",gap:"10%"}}>
       
       <div style={{display:'flex',flexDirection:'column',gap:'35px'}}>
         <h1>Location & Details</h1>
         <p>It is a long established fact that readewill be distracted by the <br /> readable content of a page when looking at ilayout.</p>
          <p><i class="fa-solid fa-location-dot"></i>Address: 1234 - Azerbaijan,Baku</p>
          <p><i class="fa-regular fa-envelope"></i>Email: support@example.com</p>
          <p><i class="fa-solid fa-mobile-screen-button"></i> Phone: (800) 0123 456 789</p>

       </div>
       
       <div>
         <div> <h2>Send Us a Message</h2></div>  
         <div style={{marginTop:'20px'}}>
         <form >
  <label for="input1">Your Name*</label>  <br />
  <input style={{width:'155%',height:'45px'}} type="text" id="input1" name="input1" required />

  <br /> <br />

  <label for="input2">Your Email*</label> <br />
  <input style={{width:'155%',height:'45px'}} type="text" id="input2" name="input2" required />

  <br /> <br />

  <label for="input3"><p>Your Phone*</p></label> <br />
  <input style={{width:'155%',height:'45px'}} type="text" id="input3" name="input3" required />

  <br /> <br />

  <label for="textarea1">Your Message*</label> <br /> 
  <textarea style={{width:'155%',height:'155px'}} id="textarea1" name="textarea1" rows="4" cols="50" required></textarea>

  <br />

  <button style={{backgroundColor:'black',marginTop:'35px',width:'125px',borderRadius:'5px'}} type="submit">Send</button>
</form>


         </div>

       </div>
      

    </div>

    <div style={{display:'flex',justifyContent:'center',marginRight:'9%',fontSize:'9px'}}>
    <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        
        className="mySwiper"
      >
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://htmldemo.net/pustok/pustok/image/others/brand-2.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>

    </div>
   
  );
};

export default Contact;
