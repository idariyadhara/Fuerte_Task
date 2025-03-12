import './Mentor.css'; import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Mentor = () => {

    const images = [
        { id: 1, src: require('../../assets/images/zeeshan.jpeg'), alt: "Zeeshan Khan"},
        { id: 2, src: require('../../assets/images/poojamam.jpeg'), alt: "Pooja Gangwani"},
        { id: 3, src: require('../../assets/images/abhishek.jpeg'), alt: "Abhishek Kumar"},
        { id: 4, src: require('../../assets/images/mohit.jpeg'), alt: "Mohit Ahuja"},
        { id: 5, src: require('../../assets/images/aprakash.jpg'), alt: "Aditya Prakash "},
        { id: 6, src: require('../../assets/images/zeeshan.jpeg'), alt: "Zeeshan Khan"},
        { id: 7, src: require('../../assets/images/poojamam.jpeg'), alt: "Pooja Gangwani"},
        { id: 8, src: require('../../assets/images/abhishek.jpeg'), alt: "Abhishek Kumar"},
        { id: 9, src: require('../../assets/images/mohit.jpeg'), alt: "Mohit Ahuja"},
        { id: 10, src: require('../../assets/images/aprakash.jpg'), alt: "Aditya Prakash"},
        { id: 11, src: require('../../assets/images/zeeshan.jpeg'), alt: "Zeeshan Khan"},
        { id: 12, src: require('../../assets/images/poojamam.jpeg'), alt: "Pooja Gangwani"},
        { id: 13, src: require('../../assets/images/abhishek.jpeg'), alt: "Abhisek Kumar"},
        { id: 14, src: require('../../assets/images/mohit.jpeg'), alt: "Mohit Ahuja"},
        { id: 15, src: require('../../assets/images/aprakash.jpg'), alt: "Aditya Prakash"},
        { id: 16, src: require('../../assets/images/zeeshan.jpeg'), alt: "Zeeshan Khan"},
    ];

    return (
        <div className="swiper-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={7}
                loop={true}
                speed={4000}
                breakpoints={{
                    1400: { slidesPerView: 7 }, // Large screens
                    1200: { slidesPerView: 5 },
                    400: { slidesPerView: 4 },
                    300: { slidesPerView: 3 } ,// For mobile
                    200:{slidesPerView:2},
                    0:{slidesPerView:1}
                }}
                autoplay={{ delay: 0, disableOnInteraction: false }} // Auto slide
                freeMode={true}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className='image-content'>
                            <img src={image.src} alt={image.alt} />
                            <h1>{image.alt}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Mentor;