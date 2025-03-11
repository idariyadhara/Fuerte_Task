// import './Gallery.css';

// const Gallery = () => {
//     return (
//         <div className='gallery-container'>
//             <div className='gallery-container-data'>
//                 <h1>Campus Gallery</h1>
//                 <p>Bridging Knowledge and Technology to Shape Brighter Futures.</p>
//             </div>
//             <div>
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />  
//                 <img src={require('../../assets/images/mentor1.jpeg')} alt='Company' />
//             </div>
//         </div>
//     );
// }

// export default Gallery;
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Gallery.css';

const images = [
    require('../../assets/images/Gallery1.jpeg'),
    require('../../assets/images/Gallery2.jpeg'),
    require('../../assets/images/Gallery3.jpeg'),
    require('../../assets/images/Gallery4.jpeg'),
    require('../../assets/images/Gallery5.jpeg'),
    require('../../assets/images/Gallery6.jpeg'),
    require('../../assets/images/Gallery7.jpeg'),
    require('../../assets/images/Gallery8.jpeg'),
    require('../../assets/images/Gallery9.jpeg'),
    require('../../assets/images/Gallery10.jpeg'),
    require('../../assets/images/Gallery11.jpeg'),
    require('../../assets/images/Gallery12.jpeg'),
    require('../../assets/images/Gallery13.jpeg'),
    require('../../assets/images/Gallery14.jpeg')
];

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <div className='gallery-container-data'>
                <h1>Campus Gallery</h1>
                <p>Bridging Knowledge and Technology to Shape Brighter Futures.</p>
            </div>

            {/* Swiper for Image Slider */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10} 
                slidesPerView={8}  // Show 12 images at once
                autoplay={{ delay: 3000 }}
                loop={true}
                speed={5000}
                breakpoints={{
                    0: { slidesPerView: 1 } ,
                    320: { slidesPerView: 2 },  
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 8 } 
                }}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Gallery ${index + 1}`} className='gallery-image' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Gallery;
