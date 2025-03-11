import './Tools.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid ,Pagination, Autoplay } from 'swiper/modules';
import InquiryForm from './InquiryForm';

const tools = [
    { src: require('../../assets/images/chat-gpt.png'), alt: 'ChatGPT' },
    { src: require('../../assets/images/pandas.png'), alt: 'Pandas' },
    { src: require('../../assets/images/seaborn.png'), alt: 'Seaborn' },
    { src: require('../../assets/images/numpy.png'), alt: 'NumPy' },
    { src: require('../../assets/images/python.png'), alt: 'Python' },
    { src: require('../../assets/images/excel.png'), alt: 'excel' },
    { src: require('../../assets/images/tableau.png'), alt: 'tableau' },
    { src: require('../../assets/images/mysql.png'), alt: 'mysql' },
    { src: require('../../assets/images/matplotlib.png'), alt: 'matplotlib' },
    { src: require('../../assets/images/power-bi.png'), alt: 'power-bi' },
    { src: require('../../assets/images/chat-gpt.png'), alt: 'chatGPT' },
    { src: require('../../assets/images/pandas.png'), alt: 'pandas' }
    
];

const Tools=()=>{
    return(
        <div className='tools-container'>
            <div className='tools-master'>
                <h1>Tools you will master</h1>
            </div>
             <Swiper
                modules={[Grid, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5} 
                grid={{ rows: 2, fill: "row" }} 
                loop={true} // Infinite loop
                autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto-slide every 2 sec
                pagination={{ clickable: true }} // Dots to navigate
                className="tools-swiper"
                breakpoints={{
                    1200: { slidesPerView: 5, grid: { rows: 2 } }, // Large screens
                    1024: { slidesPerView: 4, grid: { rows: 2 } }, // Tablets
                    768: { slidesPerView: 3, grid: { rows: 2 } }, // Small tablets
                    480: { slidesPerView: 3, grid: { rows: 2 } }, // Mobile landscape
                    320: { slidesPerView: 2, grid: { rows: 2 } }, // Mobile portrait
                    0: { slidesPerView: 1, grid: { rows: 2 } }, // Mobile portrait
                }}

            >
                {tools.map((tool, index) => (
                    <SwiperSlide key={index} className="tool-slide">
                        <img src={tool.src} alt={tool.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <InquiryForm heading="Apply Now" buttonText="Apply Now" />
        </div>
    );
}

export default Tools;