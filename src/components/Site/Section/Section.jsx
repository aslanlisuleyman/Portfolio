import React from 'react'
import './Section.css'
import { useSelector } from 'react-redux'
import './styless.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';
import SectionCard from '../SectionCard/SectionCard';
import 'swiper/css/free-mode';
const Section = () => {
    const {data}=useSelector(state=>state.data2)
  return (
    <div className='section'> 
    
        <img src="https://htmldemo.net/pustok/pustok/image/bg-images/best-seller-bg.jpg" alt="" />
        <h2>BEST BEST SELLER BOOKS</h2>
      <div className='section__2'>
        
       <div className='man' > <img src="https://htmldemo.net/pustok/pustok/image/others/best-seller-author.jpg" alt="" /> </div>
      
      
      
       <div className='swi'>
       <Swiper 
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                    {
                        data.map((item, index) => {
                            return (<SwiperSlide><SectionCard className="swiper-slide" item={item} key={index} /></SwiperSlide>)
                        })
                    }

                </Swiper>
       </div>


      </div>


    </div>
  )
}

export default Section