import './Courses.css';
import InquiryForm from '../DataAnalytics/InquiryForm';

const Courses = ({courses}) => {
    return (
     
        <div className='courses'>
        {courses.map((course) => (
            <div className='course__detail' key={course.id}>
                <img src={course.image} alt={course.title} />
                <h1>{course.title}</h1>
                <div className='program__rating'>
                    <p>{course.rating}</p>
                    <p>
                        <img src={require('../../assets/images/rating.png')} alt="Rating" width='120px' height='50px' />
                    </p>
                    <p id="rating_number">({course.ratingCount})</p>
                </div>
                <div className='course__session'>
                    <p>{course.sessions}</p>
                    <p>{course.duration}</p>
                </div>
                <InquiryForm heading="View Curriculum" buttonText="View Curriculum"/>
            </div>
        ))}
    </div>
    );
}

export default Courses;