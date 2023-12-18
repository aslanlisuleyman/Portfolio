import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import './Card2.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Cards2 = () => {
    const { data } = useSelector(state => state.api)
    console.log(data)
    return (

        <>
            <div className='div1'><h2 style={{color:'white'}}>Deal of the day up to 20% off Special offer</h2></div>
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

                            return (<SwiperSlide><Card className="swiper-slide" item={item} key={index} /></SwiperSlide>)
                        })
                    }

                </Swiper>
            </div>
        </>

    )
}

export default Cards2