import React from "react";

import {Swiper, SwiperSlide} from 'swiper/react';

import { Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import 'swiper/css/bundle'
import Card from "./Card";



// https://swiperjs.com/react
// https://www.raddy.dev/blog/better-netflix-carousel-using-swiperjs/
export default function Carousel(props) {
    console.log("carousel props", props, props.key)
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            direction={'horizontal'}
            // centeredSlides={true}
            // onSlideChange={() => console.log('slide change')}
            spaceBetween={0}
            // freeMode={true}
            loop={true}
            slidesPerView={'auto'}
            slidesPerGroupAuto
            // slidesPerView={4}
            // slidesPerGroup={3}
            // slidesPerGroupAuto
            
            pagination={
                {
                    clickable: true,
                    el: '.swiper-pagination' 
                }
            }
            navigation={{}}
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
                            <Card
                                key={item.id}
                                handleClick={() => props.handleClick(item.id, props.data)}
                                {...item}
                            />
                            // <>
                            //     <h2>{item.title}</h2>
                            //     <img src={item.image} className="cards--image"/>
                            // </>
                        }
                    </SwiperSlide>

                    
                )

            }
            )
        }
        </Swiper>
    )
}