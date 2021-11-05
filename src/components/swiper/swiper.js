
import React, { useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./style.scss";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import Podcast from '../../assets/Home/podcast.webp';

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function MobSwiper() {
     
  
  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={30} centeredSlides={true} pagination={{"clickable": true}} className="mySwiper">
    <SwiperSlide className='swiper-slide'> 
    
       <img src={Podcast} alt="" />

    </SwiperSlide>
    <SwiperSlide className='swiper-slide'>
        {/* <img src={Podcast} alt="" /> */}
    </SwiperSlide>
    <SwiperSlide className='swiper-slide'>
        {/* <img src={Podcast} alt="" /> */}
    </SwiperSlide>
    <SwiperSlide className='swiper-slide'>
        {/* <img src={Podcast} alt="" /> */}
    </SwiperSlide>
  </Swiper>
    </>
  )
}