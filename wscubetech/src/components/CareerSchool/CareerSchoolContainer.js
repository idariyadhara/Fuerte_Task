import './CareerSchoolContainer.css';
import Container from '../Container/Container';
import CareerCenter from './CareerCenter';
import CareerResourse from './CareerResourse';

const CareerSchoolContainer = () => {
    return (
        <div>
            <Container>
                <div className='ca-school-container'>
                    <div className='ca-school-city'>
                        <h1>Our Career Schools</h1>
                        <p>Replicating online impact through offline centers city-by-city.</p>
                    </div>
                    <div className="career-cities">
                        <div className="career-city">
                            <img src={require("../../assets/images/Jaipur.png")} alt="Jaipur" />
                            <h1>Jaipur</h1>
                            <p>Rajasthan</p>
                        </div>
                        <div className="career-city">
                            <img src={require("../../assets/images/Jodhpur.png")} alt="Jodhpur" />
                            <h1>Jodhpur</h1>
                            <p>Rajasthan</p>
                        </div>
                        <div className="career-city">
                            <img src={require("../../assets/images/coming-center.png")} alt="Coming Soon" />
                            <h1>Coming Soon</h1>
                            <p>to your city</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="career-center-wrapper">
                <CareerCenter />
            </div>
            <CareerResourse/>
        </div>
    );
}

export default CareerSchoolContainer;