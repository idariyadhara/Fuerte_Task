import './CareerData.css';
import StudentReview from './StudentReview';
import LogoSlider from './LogoSlider';
import Courses from './Courses';

const CareerData = ({ program,logos,courses }) => {
    if (!program) return null;
    return (
        <div className='career__data'>
            <div className='career_analytics'>
                <h1>{program.title}</h1>
                <p>{program.description}</p>
            </div>
            <div className='careerdata__items'>
                <div className='items__left'>
                    <h4>Avg. Base Salary in India</h4>
                    {/* <div className='career__sal'>
                            <p>Data Scientist</p>
                            <p>₹6L -₹15L</p>
                        </div> */}
                    {program.salaryData.map((item) => (
                        <div key={item.id} className="career__sal">
                            <p>{item.role}</p>
                            <p>{item.salary}</p>
                        </div>
                    ))}
                    <div className='job__openings'>
                        <div className='openings__numbers'>
                            <h4>1,30,000</h4>
                            <p>Job openings in India</p>
                        </div>
                        <div className='openings__numbers'>
                            <h4>16%</h4>
                            <p>Projected 10+ years growth</p>
                        </div>
                    </div>
                    <div className='update'>
                        Updated last month
                    </div>
                    <div>
                        <StudentReview reviews={program.studentReview || []}/>
                    </div>
                </div>  
                <div className='items__right'>
                    <h4>Prime Hiring Destinations</h4>
                    <div>
                        <LogoSlider logos={logos}/>
                    </div>
                    <h4>Recommended Professional Certificates</h4>
                    <div className='recommended__courses'>
                        <Courses courses={courses}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerData;