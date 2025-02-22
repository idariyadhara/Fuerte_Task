import React, { useRef } from 'react';
import './MasterClass.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

const images = [
    require('../../assets/images/master1.jpeg'),
    require('../../assets/images/master2.jpeg'),
    require('../../assets/images/master3.jpeg'),
    require('../../assets/images/master4.jpeg'),
    require('../../assets/images/master5.jpeg'),
    require('../../assets/images/master6.jpeg'),
    require('../../assets/images/master7.jpeg'),
    require('../../assets/images/master8.jpeg'),
    require('../../assets/images/master9.jpeg'),
    require('../../assets/images/master10.jpeg'),
    require('../../assets/images/master11.jpeg'),
    require('../../assets/images/master12.jpeg'),
    require('../../assets/images/master13.jpeg'),
    require('../../assets/images/master14.jpeg'),
    require('../../assets/images/master15.jpeg'),
    require('../../assets/images/master16.jpeg'),
    require('../../assets/images/master17.jpeg'),
    require('../../assets/images/master18.jpeg'),
    require('../../assets/images/master19.jpeg')
];

const MasterClass = () => {
    const swiperRef = useRef(null);
   
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
            restartAutoplay();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
            restartAutoplay();
        }
    };

    const restartAutoplay = () => {
        if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.stop(); // Stop autoplay when clicking
            setTimeout(() => {
                swiperRef.current.autoplay.start(); // Restart autoplay after 5s
            }, 5000);
        }
    };

    return (
        <div className='masterclass-content'>
            <div className='masterclass-left-data'>
                <h1>Free Masterclasses</h1>
                <p>Expert-led, interactive live sessions designed to deepen your knowledge and skills in your chosen domain of interest.</p>
                <div className='arrow'>
                    <img src={require('../../assets/images/left-arrow.png')} alt='previous' onClick={handlePrev} />
                    <img src={require('../../assets/images/right-arrow.png')} alt='next' onClick={handleNext}/>
                </div>
            </div>
            <div className='masterclass-right-data'>
                <Swiper
                   modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        1200: { slidesPerView: 3 },
                        900: { slidesPerView: 3 },
                        700:{slidesPerView: 3},
                        600: { slidesPerView: 2 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
                    speed={1000}
                    loop={true}
                    navigation={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} className='slider-image' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default MasterClass;