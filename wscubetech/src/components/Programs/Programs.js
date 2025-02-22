import { useState } from "react";
import ProgramDetail from "./ProgramDetail";
import ProgramButton from "./ProgramButton";

const programData = {
    "Data Analytics": {
        image: require('../../assets/images/program_detail_bg_img.png'),
        title: "Data Analytics Mentorship Program",
        subtitle: "Join this 16-week, job-ready program to master Data Analytics with experts from Microsoft, KPMG, Amazon, and Rapido.",
        rating: 4.9,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '1,032',
        jobRole: 'Data Analyst',
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "16 Weeks",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 106
    },
    "Digital Marketing": {
        image: require('../../assets/images/digital_marketing.png'),
        title: "Digital Marketing Mentorship Program",
        subtitle: "Join the best online digital marketing course in India by WsCube Tech. Become a digital marketer with our comprehensive program to elevate your career to reach new professional heights and excel in today's competitive landscape in 24 weeks.",
        rating: 4.9,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '19,476',
        jobRole: [
            'Digital Marketing, ',
            'SEO, ',
            'Branding, ',
            'Social Media'
        ],
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "24 Weeks",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 144
    },
    "Web Development":{
        image: require('../../assets/images/web_development.png'),
        title: "Full Stack Web Development Mentorship Program",
        subtitle: "Join the best full stack developer course online and accelerate your career as a skilled web developer. Learn from the top industry mentors and launch your career in Full Stack Web Development.",
        rating: 4.9,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '24,922',
        jobRole: 'Full Stack',
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "5 Months",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 100
    },
    "Cyber Security":{
        image: require('../../assets/images/cyber_security.png'),
        title: "Ethical Hacking Course",
        subtitle: "Learn the basics of ethical hacking and cyber security with the best online ethical hacker course in India. This training program is designed for beginners and covers core concepts, hacking methodologies, tools, techniques, and more.",
        rating: 4.9,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '8,732',
        jobRole: [
            'CyberSecurity, ',
            'Hacker, ',
            'Engineering, ',
            'Nmap'
        ],
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "2 Months",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 44
    },
    "App Development":{
        image: require('../../assets/images/App_development.png'),
        title: "Online Flutter App Development Course",
        subtitle: "Learn Flutter from scratch and build a promising career with WsCube Tech’s online Flutter course. Get mentorship from experienced Flutter developers, with regular LIVE classes, hands-on projects, certification, and placement assistance.",
        rating: 4.9,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '4,902',
        jobRole: 'Flutter Mentorship',
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "4 Months",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 85
    },
    "Design":{
        image: require('../../assets/images/design.png'),
        title: "Online Graphic Designing Course",
        subtitle: "Join the best online graphic design course and learn the basic to advanced concepts of designing appealing graphics and visual content. With WsCube Tech, you get to learn from industry leaders who have been training aspirants for years. ",
        rating: 5,
        ratingStar: require('../../assets/images/rating.png'),
        ratingNumber: '11,532',
        jobRole: [
            'Graphic Designer, ',
            'Junior Designer'
        ],
        durationIcon: require('../../assets/images/green-calendar-icon.png'),
        duration: "3 Months",
        sessionIcon: require('../../assets/images/salary-icon.png'),
        sessions: 70
    }
};

const Programs = () => {
    // Select first program by default
    const firstProgram = Object.values(programData)[0];
    const [selectedProgram, setSelectedProgram] = useState(firstProgram);

    return (
        <div>
            <div className='program-list'>
                {Object.keys(programData).map((program, index) => (
                    <ProgramButton
                        key={index}
                        program={program}
                        onClick={() => setSelectedProgram(programData[program])}
                        isActive={selectedProgram.title === programData[program].title}
                    />
                ))}
            </div>

            {/* Display the selected program */}
            {selectedProgram && <ProgramDetail program={selectedProgram} />}
        </div>
    );
}

export default Programs;
