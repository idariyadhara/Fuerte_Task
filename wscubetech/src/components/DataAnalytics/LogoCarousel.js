import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay } from 'swiper/modules';
import "./LogoCarousel.css";

// Logo data stored in the same file
const logos = [
  { id: 1, image: require('../../assets/images/white-google.png'), alt: "Company 1" },
  { id: 2, image: require('../../assets/images/white-accenture.png'), alt: "Company 2" },
  { id: 3, image: require('../../assets/images/walmart.png'), alt: "Company 3" },
  { id: 4, image: require('../../assets/images/adobe.png'), alt: "Company 4" },
  { id: 5, image: require('../../assets/images/lenscart.png'), alt: "Company 5" },
  { id: 6, image: require('../../assets/images/duolingo.png'), alt: "Company 6" },
  { id: 7, image: require('../../assets/images/mamaearth.png'), alt: "Company 7" },
  { id: 8, image: require('../../assets/images/expedia.png'), alt: "Company 8" },
  { id: 9, image: require('../../assets/images/meta.png'), alt: "Company 9" },
  { id: 10, image: require('../../assets/images/ola-electric.png'), alt: "Company 10" }
];

const LogoCarousel = () => {
  return (
    <div className="logo-carousel">
      <Swiper
      modules={[Autoplay]}
        slidesPerView={9}  
        spaceBetween={10}   
        loop={true}        
        freeMode={true}     
        autoplay={{
          delay: 0,      
          disableOnInteraction: false
        }}
        speed={3000}
        breakpoints={{
          768: { slidesPerView: 7 },
          480: { slidesPerView: 4 },
          300: { slidesPerView: 3},
          0: { slidesPerView: 2}
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <img src={logo.image} alt={logo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
