import React from 'react'
import './ArtsBook.css'
import { useSelector } from 'react-redux'
import Card3 from '../Site/Card3/Card3'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const ArtsBook = () => {
  const {data}=useSelector(state=>state.api)
  return (
    <div style={{marginTop:'30px',position:'relative'}}>
        <h2 style={{textAlign:'center' , paddingTop:"50px"}}>ARTS & PHOTOGRAPHY BOOKS</h2>
        <div className='container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        data.map((item, index) => {
                            return (<SwiperSlide><Card3 className="swiper-slide" item={item} key={index} /></SwiperSlide>)
                        })
                    }

                </Swiper>
            </div>



        <div className='arts'>
           <img style={{width:'100%',height:'320px'}} src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-full.jpg" alt="" />
           <div style={{position:'absolute',top:"65%",marginLeft:"300px",textAlign:'center',display:'flex',flexDirection:'column',gap:"13px"}}>  
                    <h2 style={{fontSize:'55px',color:'white'}}> <i>I Love This Idea!</i></h2>
                <p  style={{fontSize:'35px',color:'white'}}> <i>Cover up front of book and leave <br /> summary</i> </p>
                <button className='artb'  style={{marginLeft:'130px',width:'250px',height:'55px',borderRadius:'4px',color:'black'}}>$78.09 - Learn More</button>
                </div>
        </div>
    </div>
  )
}

export default ArtsBook