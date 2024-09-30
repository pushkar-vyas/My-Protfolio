import React from 'react'
import './testimonials.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: Image1,
    title: "Nayan Kumawat",
    subtitle: "(Friend)",
    comment:
      "I enjoy working with the theme and learn so much. You make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "Vishal Vishwakarma",
    subtitle: "(Friend)",
    comment:
      "I enjoy working with the theme and learn so much. You make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    image: Image1,
    title: "Piyush Carpenter",
    subtitle: "(Friend)",
    comment:
      "I enjoy working with the theme and learn so much. You make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 4,
    image: Image3,
    title: "Rohit kushwaha",
    subtitle: "(Friend)",
    comment:
      "I enjoy working with the theme and learn so much. You make the process fun and interesting. Good luck! 👍",
  },
];
const Testimonials = () => {
  return (
    <section className="testimonials container section "id="reviews">
      <h2 className="section_title">Clients & Reviews</h2>

       <Swiper className="testimonials_container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, image, title, subtitle, comment})=>{
            return(
              <SwiperSlide className="testimonial_item">
                <div className="thumb">
                  <img src={image} alt=''/>
                </div>
                <h3 className="testimonials_title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            )
          })
        }
       </Swiper>
    </section>
  )
}

export default Testimonials