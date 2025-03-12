import './DigitalMarketing.css';
import MentorShip from '../DataAnalytics/MentorShip';
import AlumniStudent from './AlumniStudent';
import Courses from '../CareerPath/Courses';
import CourseBenefit from './CourseBenefits';
import Mentors from '../DataAnalytics/Mentors';
import JobRoles from './JobRoles';
import LearnerReview from '../LearnerReview/LearnerReview';

const DigitalMarketingData = {
    programType: "Career Preparation Program",
    title: "Get Job-ready for Digital Marketing Roles",
    description: "Learn the most in-demand skills and craft campaigns that captivate and convert the market.",
    stats: [
        { value: "55,000 +", label: "Aspirants Mentored" },
        { value: "1300+", label: "Cohorts Delivered" },
        { value: "11+", label: "Industry Mentors" }
    ]
};

const alumniData = [
    { name: "Varsha Rathi", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Varsha Rathi", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Varsha Rathi", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Varsha Rathi", image: require("../../assets/images/mentor1.jpeg") },
    { name: "Varsha Rathi", image: require("../../assets/images/mentor1.jpeg") },
];

const jobData = [
    { text: "Jobs on LinkedIn Alone", count: "45,200" },
    { text: "Global Placements", count: "25,000+" },
];
const DMcourses = [
    {
        id: 1,
        title: "Digital Marketing Mentorship Program",
        rating: 4.9,
        ratingCount: '19,476',
        sessions: "144 Live Session",
        duration: "24 Weeks",
        image: require('../../assets/images/digital_marketing_course1.png'),
    },
    {
        id: 2,
        title: "SEO Course",
        rating: 4.9,
        ratingCount: '6,983',
        sessions: "72 Live Session",
        duration: "2 Months",
        image: require('../../assets/images/digital_marketing_course2.png'),
    },
    {
        id: 3,
        title: "Performnace Marketing Course",
        rating: 4.9,
        ratingCount: '919',
        sessions: "45 Live Session",
        duration: "2 Months",
        image: require('../../assets/images/digital_marketing_course2.png'),
    },
]
const digitalMarketingReviews = [
    { id: 1, data: "I had very much interest in social media marketing because I saw many brands using their social media to connect with their customers. And with the help of contests and different types of challenges, they create these trend waves which was very fascinating. I wanted to do that too. But when I joined Fuerte Developers’s digital marketing training course, I learnt that social media is much more than just trends. And now I feel like I know all the secrets of making someone viral. And I am now ready to join a company and work on their social media. I loved the way they teach and it was such good that they let me work on their own social media projects to get a practical experience too.", name: "Harshita Gupta" },
    { id: 2, data: "Digital marketing is very essential for marketing in today’s world. And everyone who has a store, business or startup should learn the basics of digital marketing to get the best benefit of internet for themselves. I learnt it just out of curiosity. But now I am aware how these small businesses turn themselves into big brands. I will use my practical knowledge for my home bakery and I hope it will help me grow my business and reach more people.", name: "Sprash Jethwani" },
    { id: 3, data: "Fuerte Developers’s Digital Marketing Training Courses are great. They are designed in such a way that you get interest in each subject to learn more and more. The teachers are very good and they have deep knowledge of their course. They will solve all your doubts and teach you two extra things to help you in learning better. I also liked the fact that everyone in my batch so passionate for learning that it created a competitive atmoshphere. Hence, everyone was working hard, but it was fun. For first time, learning felt fun and I did not want the course to end. I am glad to be one of the lucky people in my batch who have been chosen for placement in Fuerte Developers Digital Marketing.", name: "Riya Bhardwaj" },
    { id: 4, data: "I was already doing my job in SEO for the last 6 months but I just had basic knowledge. By taking this course, I’ve got the skills to work on technical SEO also. My performance at the job has significantly improved. I highly recommend this course to everyone who wants to learn advanced SEO.", name: "Siddharth Chavda" },
];
const digitalMarketingDemand = {
    heading: "High-Growth Sector",
    text: "Experience ultra-fast growth in career & salary owing to the sector’s high demand.",
    image: require('../../assets/images/digital-marketing-category.png'),
    altText: "Digital Marketing",
    extraHeading: "Most In-Demand",
    extraText: "Digital marketing is the fastest-growing industry. It is growing at 25% to 30% per year."
};
const DMjobRolesData = {
    title: "Be the Bedrock of the Company!",
    jobRoles: {
        row1: [
            "Content Marketer ₹4L - ₹8L",
            "HR Consultant ₹6L - ₹13L",
            "Digital Marketing Manager ₹6L - ₹13L",
            "Social Media Manager ₹3L - ₹5L"
        ],
        row2: [
            "SEO Specialist ₹3L - ₹7L",
            "Brand Strategist ₹5L - ₹12L",
            "Marketing Analyst ₹4L - ₹9L",
            "Public Relations Manager ₹6L - ₹14L"
        ]
    },
    recruiters: [
        { name: "Amazon", logo: require("../../assets/images/amazon.png") },
        { name: "Accenture", logo: require("../../assets/images/accenture.png") },
        { name: "Flipkart", logo: require("../../assets/images/flipkart.png") },
        { name: "Capgemini", logo: require("../../assets/images/capgemini.png") },
        { name: "Bewakoof", logo: require("../../assets/images/bewakoof.png") },
        { name: "NinjaCart", logo: require("../../assets/images/ninjacart.png") },
        { name: "BNPDigital", logo: require("../../assets/images/neil-patel-digital.png") }
    ]
};

const DigitalMarketing = () => {
    return (
        <div>
            <div className='digital_marketing_container'>
                <MentorShip data={DigitalMarketingData} hideCardContent={true} />
            </div>
            <AlumniStudent alumniData={alumniData} jobData={jobData} />
            <Courses courses={DMcourses} />
            <CourseBenefit title="Why Study Digital Marketing"
                description="Learn Digital marketing for better career opportunities where your career advances as fast as the trends!"
                demand={digitalMarketingDemand}
                reviews={digitalMarketingReviews} />
            <Mentors />
            <JobRoles data={DMjobRolesData} />
            <LearnerReview />
        </div>
    );
}

export default DigitalMarketing;