import {BiJoystick, BiMusic} from 'react-icons/bi'
import {FaFire,FaGamepad,FaMusic,FaRobot} from 'react-icons/fa'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation } from "swiper";
const ExploreCategories = () => {

  return (
    <div>
        <Swiper
        spaceBetween={30}
        slidesPerView={2.6}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper ExploreCategories"
      >
          <SwiperSlide> 
            <div className="card">
                <FaFire style={{fill:"orange",}}  />
                <h3>Entertainment</h3>
            </div>
        </SwiperSlide>
        
        <SwiperSlide> 
        <div className="card">
            <FaGamepad  style={{fill:"green",}} />
            <h3>Games</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="card">
            <FaMusic  style={{fill:"crimson",}} />
            <h3>Music</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="card">
            <FaRobot  style={{fill:"royalblue",}} />
            <h3>Technologies</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="card">
            <FaRobot />
            <h3>Technologies</h3>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ExploreCategories