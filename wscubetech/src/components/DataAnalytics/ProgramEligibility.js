import './ProgramEligibility.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const eligibilityData = [
    { id: 1, title: "Tech Enthusiasts", image: require("../../assets/images/Tech Enthusiasts.png") },
    { id: 2, title: "Beginners in Data Analytics", image: require("../../assets/images/Beginners in Data Analytics.png") },
    { id: 3, title: "Working Professionals", image: require("../../assets/images/Working Professionals.png") },
    { id: 4, title: "Career Switchers", image: require("../../assets/images/Career Switchers.jpeg") },
    { id: 5, title: "Career Transitioners", image: require("../../assets/images/Career Transitioners.png") },
    { id: 6, title: "Beginners in Data Analytics", image: require("../../assets/images/Beginners in Data Analytics.png") },
    { id: 7, title: "Working Professionals", image: require("../../assets/images/Working Professionals.png") },
    { id: 8, title: "Career Switchers", image: require("../../assets/images/Career Switchers.jpeg") }
];


const ProgramEligibility=({heading, description})=>{
    return(
        <>
        <div className='program_eligibility'>
            <div className='for_whom'>
                <h1>{heading}</h1>
            </div>
            
            <div className='eligibility_criteria'>
               <Swiper
                    modules={[Autoplay]}
                    spaceBetween={5}
                    slidesPerView={5}
                    autoplay={{  delay: 0,      
                        disableOnInteraction: false }}
                    loop={true}
                    freeMode={true}     
                    speed={7000}
                    breakpoints={{
                        1500: { slidesPerView:5 },
                        1200: { slidesPerView: 4 },
                        400: { slidesPerView: 2},
                        300:{slidesPerView:2},
                        0: { slidesPerView: 1}
                      }}
                >
                    {eligibilityData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="eligibility_card">
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className='eligibility-detail'>
            {Array.isArray(description) ? (
                    description.map((desc, index) => <p key={index}>{desc}</p>)
                ) : (
                    <p>{description}</p>
                )}
        </div>
        </>
    );
}

export default ProgramEligibility;