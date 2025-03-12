import CareerSchool from './CareerSchool';
import JobCourse from './JobCourse';
import Lerner from './Lerner';
import LernerAtCompany from './LernerAtCompany';
import ImpactNumber from './ImpactNumber';
import ContactUs from './ContactUs';
import LogoSlider from '../CareerPath/LogoSlider';
import WhyUS from './WhyUS';
import ReviewCarousal from './ReviewsCarousal';
import ProgramStep from '../DataAnalytics/ProgramStep';
import Gallery from './Gallery';

const RajkotSchool = {
    title: "Furte Developers- Rajkot",
    descriptions: [
        "Offline, beginner-friendly, project-based curriculum",
        "1:1 mentorship + career coaching + four-week externship",
        "Transforming education through innovation",
        "NEW! AI for Design Professionals learning units"
    ]
}

const Rajkotcourses = [
    {
        id: 1,
        title: "Python Training In Jodhpur",
        rating: 4.9,
        ratingCount: "19,476",
        sessions: "144 Live Session",
        duration: "24 Weeks",
        image: require("../../assets/images/digital_marketing_course1.png"),
    },
    {
        id: 2,
        title: "Graphic Designing Course in Jodhpur With Certificate & Job Assistance",
        rating: 4.9,
        ratingCount: "6,983",
        sessions: "72 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 3,
        title: "Full Stack Web Development Course in Jodhpur",
        rating: 4.9,
        ratingCount: "919",
        sessions: "45 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 4,
        title: "Flutter Training in Jodhpur (Classroom Training With Certificate & Placement)",
        rating: 4.9,
        ratingCount: "1,230",
        sessions: "60 Live Session",
        duration: "3 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
    {
        id: 5,
        title: "Data Analytics Course in Jodhpur (Master Data Analysis)",
        rating: 4.9,
        ratingCount: "4,512",
        sessions: "50 Live Session",
        duration: "2 Months",
        image: require("../../assets/images/digital_marketing_course2.png"),
    },
];
const RajkotLerners = {
    name: "Pushpendra Singh Rathore",
    description: "Learning Digital Marketing from Fuerte Developers was an outstanding experience. The team is diligent in every aspect, from class schedules, to fee arrangements, and providing ample support in regards to education. The trainers are extremely supportive, making the whole experience truly enjoyable.",
    videoSrc: `${process.env.PUBLIC_URL}/video/video7.mp4`
}
const lernerCompany = [
    { name: "Janvi Yadav", salary: "₹8.3 LPA", company: require('../../assets/images/flipkart.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Anuj Sharma", salary: "₹9 LPA", company: require('../../assets/images/amazon.png'), img: require('../../assets/images/mentor5.jpeg') },
    { name: "Arbaj", salary: "₹5 LPA", company: require('../../assets/images/accenture.png'), img: require('../../assets/images/mentor2.jpeg') },
    { name: "Varsha Rathi", salary: "₹9 LPA", company: require('../../assets/images/adob-icon.png'), img: require('../../assets/images/mentor6.jpeg') },
    { name: "Annanya Tripathi", salary: "₹7.2 LPA", company: require('../../assets/images/google.png'), img: require('../../assets/images/mentor1.jpeg') },
    { name: "Samay", salary: "₹7.2 LPA", company: require('../../assets/images/google.png'), img: require('../../assets/images/mentor3.jpeg') }
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


const Rajkot = () => {
    return (
        <div>
            <CareerSchool data={RajkotSchool} />
            <JobCourse data={Rajkotcourses} />
            <Lerner lernerData={RajkotLerners} />
            <LernerAtCompany learners={lernerCompany} />
            <ImpactNumber/>
            <ContactUs/>
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

export default Rajkot;