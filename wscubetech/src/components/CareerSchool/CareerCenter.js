import './CareerCenter.css';
import ProgramButton from '../Programs/ProgramButton';
import React, { useState } from "react";

const CareerCenter = () => {
    const [activeProgram, setActiveProgram] = useState(null);

    const handleProgramClick = (program) => {
        setActiveProgram(program);
        console.log(`Selected Program: ${program}`);
      };
    
    return (
        <div className='ca-center-container'>
            <div className='jaipur-center'>
                <h1>WsCube Tech Jaipur Center</h1>
                <p>1st Floor, Plot no. 21, Manav Ashram Colony, Vasundhara Colony, Gopal Pura Mode, Jaipur - Rajasthan - India (302018)</p>
                <button>Get Direction</button>
                <p><a href='https://mail.google.com/' target='contact@fuertedevelopers.com'>contact@fuertedevelopers.com</a></p>
                <div style={{display: "flex", gap: "10px" }}>
                    <ProgramButton
                        program="Request Callback"
                        onClick={handleProgramClick}
                        isActive={activeProgram === "Request Callback"}
                    />
                    <ProgramButton
                        program="Explore Courses"
                        onClick={handleProgramClick}
                        isActive={activeProgram === "Explore Courses"}
                    />
                </div>
            </div>
            <div className='jaipur-team'>
                <img src={require('../../assets/images/Jaipur_team.jpeg')} alt='Our Team' />
            </div>
        </div>
    );
}

export default CareerCenter;