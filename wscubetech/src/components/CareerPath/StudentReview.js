import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay } from 'swiper/modules';

const StudentReview = ({reviews=[]}) => {

    return (
        <div className='student__review'>
            <h4>Student Views</h4>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
                loop={true}
            >
                {reviews.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='students__view'>
                            <p>{item.data}</p>
                            <h3>{item.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default StudentReview;