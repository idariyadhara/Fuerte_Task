import React from "react";
import "./JobCourse.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JobCourse = ({ data }) => {
  return (
    <div className="job-course-container">
      <div className="job-course-header">
        <h1>Our Job-Ready Courses</h1>
        <div className="swiper-buttons">
          <button className="custom-swiper-button-prev">❮</button>
          <button className="custom-swiper-button-next">❯</button>
        </div>
      </div>
      <p>Choose your program, get certified, and grab new career opportunities</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
      }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="course-swiper"
      >
        {data.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>⭐ {course.rating} ({course.ratingCount} reviews)</p>
              <p>{course.sessions} | {course.duration}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default JobCourse;
