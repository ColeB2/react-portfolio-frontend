import React from "react";

import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import 'swiper/css/bundle'
import Cards from "./Cards";



// https://swiperjs.com/react
// https://www.raddy.dev/blog/better-netflix-carousel-using-swiperjs/
export default function Carousel(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            direction={'horizontal'}
            // centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            spaceBetween={20}
            freeMode={true}
            slidesPerView={5}
            slidesPerGroup={1}
            
            pagination={
                {
                    clickable: true,
                    el: '.swiper-pagination' 
                }
            }
            navigation
        >
        {/* using array */}
        {
            props.data.map(item => {
                return (
                    // <Cards
                    //     key={item.id}
                    //     // handleClick={() => handleClick(item.id)}
                    //     {...item}
                    // />
                    <SwiperSlide>
                        {
                            <div className="">
                                <h2>{item.title}</h2>
                                <img src={item.image} className="cards--image"/>
                            </div>
                        }
                    </SwiperSlide>

                    
                )

            }
            )
        }
            {/* <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
    )
}