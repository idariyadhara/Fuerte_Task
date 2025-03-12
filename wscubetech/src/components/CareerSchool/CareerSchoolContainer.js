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
                            <img src={require("../../assets/images/gurgaon.jpg")} alt="Jaipur" />
                            <h1>Gurgaon</h1>
                            <p>Haryana</p>
                        </div>
                        <div className="career-city">
                            <img src={require("../../assets/images/rajkot.jpg")} alt="Jodhpur" />
                            <h1>Rajkot</h1>
                            <p>Gujarat</p>
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