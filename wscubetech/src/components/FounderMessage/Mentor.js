import './Mentor.css'; import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Mentor = () => {

    const images = [
        { id: 1, src: require('../../assets/images/mentor1.jpeg'), alt: "Ayushi Jain"},
        { id: 2, src: require('../../assets/images/mentor2.jpeg'), alt: "Bhagirath Giri"},
        { id: 3, src: require('../../assets/images/mentor3.jpeg'), alt: "Ashish Kumar"},
        { id: 4, src: require('../../assets/images/mentor4.jpeg'), alt: "Bhawani Singh"},
        { id: 5, src: require('../../assets/images/mentor5.jpeg'), alt: "Virendra Singh Rathore"},
        { id: 6, src: require('../../assets/images/mentor6.jpeg'), alt: "Pallavi Chandra"},
        { id: 7, src: require('../../assets/images/mentor7.jpeg'), alt: "Pawan Kumar"},
        { id: 8, src: require('../../assets/images/mentor8.jpeg'), alt: "Tushar Jha"},
        { id: 9, src: require('../../assets/images/mentor9.jpeg'), alt: "Pradeep Kumar"},
        { id: 10, src: require('../../assets/images/mentor10.jpeg'), alt: "Naveen Verma"},
        { id: 11, src: require('../../assets/images/mentor11.jpeg'), alt: "Sujal Dave"},
        { id: 12, src: require('../../assets/images/mentor12.jpeg'), alt: "Sultan Khan"},
        { id: 13, src: require('../../assets/images/mentor13.jpeg'), alt: "Bhawika Kumawat"},
        { id: 14, src: require('../../assets/images/mentor14.jpeg'), alt: "Neetiraj Singh"},
        { id: 15, src: require('../../assets/images/mentor15.jpeg'), alt: "Pradeep Rai"},
        { id: 16, src: require('../../assets/images/mentor16.jpeg'), alt: "Himanshu Tiwari"},
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