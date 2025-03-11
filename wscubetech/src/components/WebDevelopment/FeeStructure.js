import './FeeStructure.css';
import { FaCheckCircle } from "react-icons/fa";

const FeeStructure = () => {
    return (
        <div className='feestructure-container'>
            <div className='video-meeting'>
                <img src={require('../../assets/images/free-programe-course-img.png')} alt='Fees Detail' />
            </div>
            <div className='fee-data'>
                <div className='fee-structure'>
                    <p>Total Program Fee:</p>
                    <div className="fee-price">
                        <h1>INR 24,999/-</h1>
                        <p><span className="strike">INR 38,320/-</span></p>
                    </div>
                </div>
                <div className="fee-details">
                    <p><FaCheckCircle className="icon" /> Live instruction from Industry Veterans</p>
                    <p><FaCheckCircle className="icon" /> Official certification in Human Resources</p>
                    <p><FaCheckCircle className="icon" /> Vibrant community just like a College Campus</p>
                    <p><FaCheckCircle className="icon" /> Hands-on curriculum with Real-Life Projects</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    );
}


export default FeeStructure;