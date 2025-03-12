import MentorShip from '../DataAnalytics/MentorShip';
import AlumniStudent from '../DigitalMarketing/AlumniStudent';
import Courses from '../CareerPath/Courses';
import CourseBenefit from '../DigitalMarketing/CourseBenefits';
import Mentors from '../DataAnalytics/Mentors';
import JobRoles from '../DigitalMarketing/JobRoles';
import LearnerReview from '../LearnerReview/LearnerReview';

const CyberSecurityData = {
    programType: "Career Preparation Program",
    title: "Get Job-ready for Cyber Security  Roles",
    description: "Immerse into a comprehensive cybersecurity program, fortify your skills, and achieve job readiness!",
    stats: [
        { value: "19,400 +", label: "Aspirants Mentored" },
        { value: "435+", label: "Cohorts Delivered" },
        { value: "3+", label: "Industry Mentors" }
    ]
};

const alumniData = [
    { name: "Shubham", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Manish", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Sonali", image: require("../../assets/images/mentor1.jpeg") },
    { name: "RAjesh", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Nitesh", image: require("../../assets/images/mentor1.jpeg") },
];

const jobData = [
    { text: "Jobs on LinkedIn Alone", count: "6,600+" },
    { text: "Maximum Compensation", count: "₹ 15 LPA" },
];
const CyberSecuritycourses = [
    {
        id: 1,
        title: "Ethical Hacking Course",
        rating: 4.9,
        ratingCount: '8,732',
        sessions: "44 Live Session",
        duration: "2 Months",
        image: require('../../assets/images/cyber_security_course1.png'),
    },
    {
        id: 2,
        title: "Penetration Testing Course",
        rating: 5,
        ratingCount: '3,820',
        sessions: "100 Live Session",
        duration: "4 Months",
        image: require('../../assets/images/cyber_security_course2.png'),
    }
]
const cyberSecurityReviews = [
    { id: 1, data: "I would like to thank the mentor and Fuerte Developers for the enhanced training provided during the entire course. The mentor has brilliant knowledge. The course content covers beginner to pro. Also, sir is a good motivator and friendly person. ", name: "Gautam Mayekar" },
    { id: 2, data: "I’m thankful for the extra time provided by the institute as I had to take leaves because of illness. Sir had put extra time and effort for me and some other learners who needed more time in learning. This is what makes Fuerte Developers the best institute for ethical hacking and penetration testing.", name: "Bharat Kumar" },
    { id: 3, data: "If anybody wants to learn the advanced techniques of hacking and penetration testing, then I don’t think there is any other course better than this. Our classes were conducted regularly on Zoom and were very interactive. It was a small batch and learning was effective. Thanks!", name: "Rituraj Sharma" },
    { id: 4, data: "You can feel the difference in the way sir teaches and clears the concepts. I had seen it in the way he had explained in some YouTube videos. That is why I chose to go for the full course. The mentor considers your level of understanding while teaching. I used to ask a lot of questions during classes and found answers always on time. ", name: "Shugandha Sharma" },
];
const cyberSecurityDemand = {
    heading: "High-Growth Sector",
    text: "Experience ultra-fast growth in career & salary owing to the sector’s high demand.",
    image: require('../../assets/images/digital-marketing-category.png'),
    altText: "Cyber Security",
    extraHeading: "Most In-Demand",
    extraText: "The cybersecurity market has been experiencing significant growth, with an expected CAGR of 12.3% from 2023 to 2030."
};
const CSjobRolesData = {
    title: "Be the Bedrock of the Company!",
    jobRoles: {
        row1: [
            "Network Security Engineer₹5L - ₹12L",
            "Security Consultant₹8L - ₹18L",
            "Penetration Tester/Ethical Hacker₹6L - ₹15L",
            "Cybersecurity Analyst₹4L - ₹10L"
        ],
        row2: [
            "Information Security Manager₹10L - ₹20L",
            "Network Security Engineer₹5L - ₹12L",
            "Cybersecurity Analyst₹4L - ₹10L",
            "Security Consultant₹8L - ₹18L"
        ]
    },
    recruiters: [
        { name: "Paytm", logo: require("../../assets/images/paytm.png") },
        { name: "Google", logo: require("../../assets/images/google.png") },
        { name: "Infosys", logo: require("../../assets/images/infosys.png") },
        { name: "IBM", logo: require("../../assets/images/ibm.png") },
        { name: "Wipro", logo: require("../../assets/images/wipro.png") },
        { name: "Amazon", logo: require("../../assets/images/amazon.png") },
        { name: "Accenture", logo: require("../../assets/images/accenture.png") }
    ]
};
const CyberSecurity = () => {
    return (
        <div>
            <div className='digital_marketing_container'>
                <MentorShip data={CyberSecurityData} hideCardContent={true} />
                <AlumniStudent alumniData={alumniData} jobData={jobData} />
                <Courses courses={CyberSecuritycourses} />  
                <CourseBenefit title="Why study Cybersecurity?"
                    description="Cybersecurity is the backbone of every business, opening up a universe of career possibilities."
                    demand={cyberSecurityDemand}
                    reviews={cyberSecurityReviews} />
                <Mentors/>
                <JobRoles data={CSjobRolesData} />
                <LearnerReview/>
            </div>
        </div>
    );
}

export default CyberSecurity;