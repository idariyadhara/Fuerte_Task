import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LernerAtCompany.css';

const LernerAtCompany = ({ learners }) => {
    const swiperRef = useRef(null);

    return (
        <div className="lerner-company-container">
            <div className="lerner-company-header">Our Learners have secured jobs at 200+ product companies</div>

            <div className="stats">
                <div className="stat-box">Jobs on LinkedIn Alone <br /><span>42,000+</span></div>
                <div className="stat-box">Maximum Compensation <br /><span>₹12 LPA</span></div>
            </div>

            {/* Swiper Carousel with Custom Navigation */}
            <div className="lerner-carousel-container">
                <button className="nav-btn prev" onClick={() => swiperRef.current?.slidePrev()}>
                    <FaChevronLeft />
                </button>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: { slidesPerView: 4 },
                        768: { slidesPerView: 3 },
                        480: { slidesPerView: 2 },
                        0: { slidesPerView: 1 }
                    }}
                    className="lerner-carousel"
                >
                    {learners.map((learner, index) => (
                        <SwiperSlide key={index}>
                            <div className="lerner-company-card">
                                <img src={learner.img} alt={learner.name} />
                                <p>{learner.name}</p>
                                <p className="lerner-salary">{learner.salary}</p>
                                <p className='lerner-company'><img src={learner.company} alt={learner.name} /></p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="nav-btn next" onClick={() => swiperRef.current?.slideNext()}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default LernerAtCompany;
