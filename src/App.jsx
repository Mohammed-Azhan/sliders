import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function App() {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image1.jpg" alt="" /></SwiperSlide>

        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image.png" alt="" /></SwiperSlide>

      </Swiper>
    </>
  )
}

export default App
