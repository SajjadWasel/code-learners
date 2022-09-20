import { useState } from 'react';
import { useEffect } from 'react';
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";




function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    // =====================================


    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });

    const setSlidePerView = windowDimenion.winWidth < 791 ? 1 : 3;


    return (
        <>
            <Swiper
                slidesPerView={setSlidePerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialsCard testimonial={testimonial}></TestimonialsCard>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
}

export default Testimonials;




