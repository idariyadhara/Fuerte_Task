import './FounderMessage.css';
import Mentor from './Mentor';

const FounderMessage=()=>{
    return(
        <>
        <div className='founder-msg'>
            <div className='background-container'>
                <img src={require('../../assets/images/founder-image.jpg')} alt='Founder & CEO'/>
            </div>
            <div className='message-container'>
                <h1>Founder’s Message</h1>
                <p>Our Mission is clear. We are building to train over 10 Crores of Career Aspirants living in under-resourced demographics of Bharat. We are tirelessly working to empower Career Seekers with Professional & Practical Tech/Non-tech Skills to help them compete globally for their dream career opportunities. Ab har career aspirant seekhega top professional skills! Kahi bhi, kabhi bhi! WsCube Tech ke sath, Aapke sapno ki udaan ab hogi aasan!</p>
                <p>Kushagra Bhatia</p><hr/>
                <h1>Meet the Mentors</h1>
            </div>
        </div>
        <Mentor/>
        </>
    );
}

export default FounderMessage;