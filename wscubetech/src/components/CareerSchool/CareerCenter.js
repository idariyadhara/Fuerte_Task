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
                <h1>Fuerte Developers Rajkot Center</h1>
                <p>405 - The Spire, 150 Feet Ring Rd, Rajkot, Gujarat 360007</p>
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