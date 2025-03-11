import React, { useRef, useEffect  } from 'react';
import './Mentors.css';

const Mentors=()=>{

    const mentorsData = [
        {
            "name": "Tushar Jha",
            "position": "Sr. Data Analyst",
            "image": require("../../assets/images/mentor1.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        },
        {
            "name": "Amit Sharma",
            "position": "Lead Software Engineer",
            "image": require("../../assets/images/mentor2.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        },
        {
            "name": "Ritika Singh",
            "position": "AI Researcher",
            "image": require("../../assets/images/mentor3.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        },
        {
            "name": "Tushar Jha",
            "position": "Sr. Data Analyst",
            "image": require("../../assets/images/mentor1.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        },
        {
            "name": "Amit Sharma",
            "position": "Lead Software Engineer",
            "image": require("../../assets/images/mentor2.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        },
        {
            "name": "Ritika Singh",
            "position": "AI Researcher",
            "image": require("../../assets/images/mentor3.jpeg"),
            "companyLogo": require("../../assets/images/wscube-tech-logo-2.png")
        }
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