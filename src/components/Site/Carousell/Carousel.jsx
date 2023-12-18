import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Carousel = () => {
  return (
    <div style={{marginTop:'20px',display:'flex',justifyContent:'center',marginLeft:'7%',fontSize:'5px'}}>


<Swiper
        slidesPerView={5}
        spaceBetween={30}
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
  )
}

export default Carousel