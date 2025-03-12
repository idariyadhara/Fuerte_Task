import './Gurgaon.css';
import CareerSchool from './CareerSchool';
import JobCourse from './JobCourse';
import Lerner from './Lerner';
import LernerAtCompany from './LernerAtCompany';
import ImpactNumber from './ImpactNumber';
import ContactUs from './ContactUs';
import LogoSlider from '../CareerPath/LogoSlider';
import WhyUS from './WhyUS';
import ProgramStep from '../DataAnalytics/ProgramStep';
import Gallery from './Gallery';
import ReviewCarousal from './ReviewsCarousal';

const GurgaonSchool = {
    title: "Fuerte Developers - Gurugram",
    descriptions: [
        "Offline, beginner-friendly, project-based curriculum",
        "1:1 mentorship + career coaching + four-week externship",
        "Transforming education through innovation",
        "NEW! AI for Design Professionals learning units"
    ]
}

const DMcourses = [
    {
        id: 1,
        title: "Digital Marketing Mentorship Program",
        rating: 4.9,
        ratingCount: "19,476",
        sessions: "144 Live Session",
        duration: "24 Weeks",
        image: require("../../assets/images/digital_marketing_course1.png"),
    },
    {
        id: 2,
        title: "SEO Course",
        rating: 4.9,
        ratingCount: "6,983",
        sessions: "72 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 3,
        title: "Performance Marketing Course",
        rating: 4.9,
        ratingCount: "919",
        sessions: "45 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 4,
        title: "Advanced Marketing Course",
        rating: 4.9,
        ratingCount: "1,230",
        sessions: "60 Live Session",
        duration: "3 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 5,
        title: "Social Media Marketing",
        rating: 4.9,
        ratingCount: "4,512",
        sessions: "50 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
];

const Lerners = {
    name: "Jitesh Bhojwani",
    description: "Fuerte Developers is a great institute. All the teachers are friendly in nature and have high knowledge of the IT field. They have all the facilities like projector classes and a lab for practical practice. I got a lot of knowledge regarding my course and also received extra advice and help for my future planning in this field.",
    videoSrc: `${process.env.PUBLIC_URL}/video/video1.mp4`
}

const lernerCompany = [
    { name: "Anannya Tripathi", salary: "₹8.3 LPA", company: require('../../assets/images/flipkart.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Anuj Sharma", salary: "₹9 LPA", company: require('../../assets/images/amazon.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Arbaj", salary: "₹5 LPA", company: require('../../assets/images/accenture.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Jhanvi Yadav", salary: "₹9 LPA", company: require('../../assets/images/adob-icon.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Varsha Rathi", salary: "₹7.2 LPA", company: require('../../assets/images/google.png'), img: require('../../assets/images/mentor1.jpeg') }
];
const Companylogos = [
    { id: 1, company: require('../../assets/images/google.png') },
    { id: 2, company: require('../../assets/images/accenture.png') },
    { id: 3, company: require('../../assets/images/paytm.png') },
    { id: 4, company: require('../../assets/images/infosys.png') },
    { id: 5, company: require('../../assets/images/ibm.png') },
    { id: 6, company: require('../../assets/images/wipro.png') },
    { id: 7, company: require('../../assets/images/amazon.png') },
    { id: 1, company: require('../../assets/images/google.png') },
    { id: 2, company: require('../../assets/images/accenture.png') },
    { id: 3, company: require('../../assets/images/paytm.png') },
    { id: 4, company: require('../../assets/images/infosys.png') },
    { id: 5, company: require('../../assets/images/ibm.png') },
    { id: 6, company: require('../../assets/images/wipro.png') },
    { id: 7, company: require('../../assets/images/amazon.png') },
]

const Gurgaon = () => {
    return (
        <div>
            <CareerSchool data={GurgaonSchool} />
            <JobCourse data={DMcourses} />
            <Lerner lernerData={Lerners} />
            <LernerAtCompany learners={lernerCompany} />
            <ImpactNumber />
            <ContactUs />
            <div className='top-company'>
                <h1>Top Companies, our alumni work at</h1>
                <LogoSlider logos={Companylogos} />
            </div>
            <WhyUS/>
            <ReviewCarousal/>
            <ProgramStep/>
            <Gallery/>
        </div>
    );
}

export default Gurgaon;