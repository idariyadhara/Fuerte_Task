import './CourseBenefits.css';
import StudentReview from '../CareerPath/StudentReview';

const CourseBenefit = ({ title, description, demand, reviews }) => {
    return (
        <div className='course-benefit-container-main'>
            <div className='course-benefit-container'>
                <div className='study-reason'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className='course-demand-review'>
                    <div className='course-demand'>
                        <h3>{demand.heading}</h3>
                        <p>{demand.text}</p>
                        <img src={demand.image} alt={demand.altText || 'Course Image'} />
                    </div>
                    <div className='courses-reviews'>
                        <StudentReview reviews={reviews} />
                        <h3>{demand.extraHeading}</h3>
                        <p>{demand.extraText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseBenefit;
