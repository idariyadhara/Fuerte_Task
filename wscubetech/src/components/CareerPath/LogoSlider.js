import './LogoSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay } from 'swiper/modules';

const LogoSlider=({logos})=>{
    return(
        <div className='company__logo'>
             <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={'auto'}
                pagination={{ clickable: false }}
                autoplay={{ delay:0, disableOnInteraction: false }} // Auto-slide every 3s
                speed={3000}
                loop={true}
                freeMode={true} 
            >
              {logos.map((item) => (
                    <SwiperSlide key={item.id}  className='swiper-slide-logo'>
                            <img src={item.company} alt='Company Deatils'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default LogoSlider;