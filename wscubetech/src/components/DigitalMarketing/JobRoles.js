import './JobRoles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const JobRoles = ({ data }) => {
    const { title, jobRoles, recruiters } = data;

    return (
        <div className='jobRole-main-container'>
            <div className="jobRole-container">
                <h2>{title}</h2>

                <div className="jobRole-card">
                    <h3>Job Target Roles</h3>

                    {/* First Swiper Row (Right to Left) */}
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
                        speed={4000}
                        modules={[Autoplay]}
                        breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 5 }, 480: { slidesPerView: 2, spaceBetween: 10 } }}
                        className="jobRole-swiper-container"
                    >
                        {jobRoles.row1.map((role, index) => (
                            <SwiperSlide key={index} className="role">{role}</SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Second Swiper Row (Left to Right) */}
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                        speed={8000}
                        modules={[Autoplay]}
                        breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 5 }, 480: { slidesPerView: 2, spaceBetween: 10 } }}
                        className="jobRole-swiper-container"
                    >
                        {jobRoles.row2.map((role, index) => (
                            <SwiperSlide key={index} className="role">{role}</SwiperSlide>
                        ))}
                    </Swiper>

                    <h3>Top Recruiters</h3>
                    <div className="market-recruiters">
                        {recruiters.map((recruiter, index) => (
                            <div key={index} className="market-recruiter">
                                <img src={recruiter.logo} alt={recruiter.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobRoles;
