import './ContainerItems.css';
import Banner from './Banner';

const ContainerItems = () => {
    return (
        <div className='container__items' >
            <div className='items__text'>
                <h1>Don’t Just Upskill, Get Career-ready, Get Hired</h1>
                <p>Top Mentorship Programs in Tech, Marketing, & Data- Designed and Delivered by industry maestros.</p>
                <div className='items__icon'>
                    <div className='items__icon-data'>
                        <img src={require('../../assets/images/instructors-icon.png')} alt='Aspirants' />
                        <div>
                            <p>1.5 Lakh+</p>
                            <p>Aspirants Mentored</p>
                        </div>
                    </div>
                    <div className='items__icon-data'>
                        <img src={require('../../assets/images/courses-icon.png')} alt='Aspirants' />
                        <div>
                            <p>1700+</p>
                            <p>Aspirants Mentored</p>
                        </div>
                    </div>
                    <div className='items__icon-data'>
                        <img src={require('../../assets/images/videos-icon.png')} height={"30px"} alt='Aspirants' />
                        <div>
                            <p>40+</p>
                            <p>Aspirants Mentored</p>
                        </div>
                    </div>
                </div>
                <div className='icons__button'>
                    <button id="icon_button" className='icon__button'>Explore Programs</button>
                    <button className='icon__button'>Book Mentor Session</button>
                </div>
            </div>

            <div className='banner__item'>
               <Banner/>
            </div>
        </div>
    );
}

export default ContainerItems;