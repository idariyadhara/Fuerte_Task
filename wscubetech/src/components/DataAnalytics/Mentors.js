import React, { useRef, useEffect  } from 'react';
import './Mentors.css';

const Mentors=()=>{

    const mentorsData = [
        {
            "name": "Zeeshan Khan",
            "position": "Full Stack Developer",
            "image": require("../../assets/images/zeeshan.jpeg"),
            "companyLogo": require("../../assets/images/fuerte_logo.png")
        },
        {
            "name": "Pooja Gangwani",
            "position": "Digital Marketing",
            "image": require("../../assets/images/poojamam.jpeg"),
            "companyLogo": require("../../assets/images/fuerte_logo.png")
        },
        {
            "name": "Aditya Praksh",
            "position": "Founder and CEO",
            "image": require("../../assets/images/aprakash.jpg"),
            "companyLogo": require("../../assets/images/fuerte_logo.png")
        },
        {
            "name": "Mohit Ahuja",
            "position": "Sr. Data Analyst",
            "image": require("../../assets/images/mohit.jpeg"),
            "companyLogo": require("../../assets/images/fuerte_logo.png")
        },
        {
            "name": "Ahishek Kumar ",
            "position": "Lead Software Engineer",
            "image": require("../../assets/images/abhishek.jpeg"),
            "companyLogo": require("../../assets/images/fuerte_logo.png")
        },
    ];

    const scrollRef = useRef(null);
    const scrollAmount = 300;

    const handleNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left:scrollAmount, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

                // If reached end, reset to start
                if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
                    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="mentor-container">
        <h1>Meet Your Mentors</h1>
        <p>Take a closer look at Mentors who've been there and done that!</p>

        <div className="mentor-slider">
            <button className="prev-btn" onClick={handlePrev}>⬅</button>
            
            <div className="mentor-list" ref={scrollRef}>
                {mentorsData.map((mentor, index) => (
                    <div key={index} className="mentor-card">
                        <img src={mentor.image} alt="Mentor" className="mentor-img"/>
                        <h2>{mentor.name}</h2>
                        <p>{mentor.position}</p>
                        <img src={mentor.companyLogo} alt="Company Logo" className="company-logo"/>
                    </div>
                ))}
            </div>

            <button className="next-btn" onClick={handleNext}>➡</button>
        </div>
    </div>
    );
}

export default Mentors;