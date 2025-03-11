import './CareerSchool.css';
import ContainerImage from '../WebDevelopment/ContainerImage';
import InquiryForm from '../DataAnalytics/InquiryForm';

const CareerSchool = ({ data}) => {
    return (
        <div className="career-main-cities">
            <div className="career-school-container">
                {/* Left Side - Text Content */}
                <div className="career-city-text">
                    <h1>{data.title}</h1>
                    {data.descriptions.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}

                    {/* Inquiry Form */}
                    <InquiryForm heading="Book Demo Class" buttonText="Book Demo Class" />
                </div>

                {/* Right Side - Image */}
                <div className="career-image">
                    <ContainerImage
                        src={require('../../assets/images/mentor_program.jpeg')}
                        alt="Mentorship Program"
                    />
                </div>
            </div>
        </div >
    );
}

export default CareerSchool;
