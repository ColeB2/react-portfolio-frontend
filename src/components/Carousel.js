import React from "react";

import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation, Pagination } from 'swiper';
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import 'swiper/css/bundle'
import Card from "./Card";



// https://swiperjs.com/react
// https://www.raddy.dev/blog/better-netflix-carousel-using-swiperjs/
export default function Carousel(props) {
    return ( props.data.length !== 0 &&
        <div className="" key={props.techId}>
            <h5>{props.title}</h5>
        
        <Swiper
            modules={[Navigation, Pagination]}
            direction={'horizontal'}
            spaceBetween={0}
            // loop={true}
            rewind={true}
            slidesPerView={'auto'}
            slidesPerGroupAuto
            pagination={
                {
                    clickable: true,
                    el: '.swiper-pagination' 
                }
            }
            navigation={{}}
        >
            {
                props.data.map((item, idx) => {
                    return (
        
                        <SwiperSlide key={idx}>
                            {
                                <Card
                                    key={item.id}
                                    handleClick={
                                        () => props.handleClick(
                                            item.id,
                                            props.data)
                                        }
                                    {...item}
                                />
                            }
                        </SwiperSlide>

                        
                    )

                }
                )
            }
        </Swiper>
        </div>
    )
}