import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ReviewsCarousal.css';

const reviews = [
    { name: "Rehan Ahsan", review: "This is a wonderful course. Highly appreciated and recommended to everyone who wants to make a career in cybersecurity or ethical hacking." },
    { name: "Shubham Bafna", review: "I did not have knowledge of hacking before enrolling in this course. However, everything was taught from scratch." },
    { name: "Rohan Tripathi", review: "This is simply the best ethical hacking course. The instructor did a great job explaining concepts clearly." },
    { name: "Anshul Rawat", review: "I had watched some videos of ethical hacking and liked the way of teaching. I then chose to go for the full course." },
    { name: "Rehan Ahsan", review: "This is a wonderful course. Highly appreciated and recommended to everyone who wants to make a career in cybersecurity or ethical hacking." },
    { name: "Shubham Bafna", review: "I did not have knowledge of hacking before enrolling in this course. However, everything was taught from scratch." },
    { name: "Rohan Tripathi", review: "This is simply the best ethical hacking course. The instructor did a great job explaining concepts clearly." },
    { name: "Anshul Rawat", review: "I had watched some videos of ethical hacking and liked the way of teaching. I then chose to go for the full course." }
];

const ReviewCarousal = () => {
    return (
        <div className="reviewCarousal-main-container">
            <div className="reviewCarousal-container">
                <div className="reviewCarousal-header">See what learners are saying</div>

                {/* Swiper for Reviews */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    speed={8000}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card">
                                <div className="reviewCarousal-avatar">👤</div>
                                <div className="reviewCarousal-stars">★★★★★</div>
                                <p>{review.review}</p>
                                <div className="student-name">{review.name}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewCarousal;
