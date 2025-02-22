import './CareerPathContainer.css';
import { useState } from "react";
import CareerData from './CareerData';
import ProgramButton from '../Programs/ProgramButton';
import '../Programs/ProgramButton.css';

const CareerPathContainer = () => {

    const careerPrograms = {
        "Data Analytics": {
            title: "Data Analytics",
            description: "Become a Data Analyst with hands-on mentorship and real-world projects.",
            salaryData: [
                { id: 1, role: "Data Scientist", salary: "₹6L - ₹15L" },
                { id: 2, role: "Data Analyst", salary: "₹3L - ₹8L" },
                { id: 3, role: "Machine Learning Engineer", salary: "₹7L - ₹16L" },
                { id: 4, role: "Data Engineer", salary: "₹6L - ₹15L" },
            ],
            studentReview: [
                { id: 1, data: "I'm so glad I decided to join this data analytics training. The instructors were engaging and knowledgeable, and I was able to gain skills that have helped me in my career as a business analyst.", name: "Manoj P." },
                { id: 2, data: "The data analytics course by WsCube Tech was an excellent investment in my career. I gained practical skills and knowledge that I have been able to apply to my work every day.", name: "Rahul D." },
                { id: 1, data: "I was initially hesitant about taking an online data analysis course, but I'm so glad I did. The instructors made the material easy to understand, and I was able to apply what I learned to real-world problems.  I feel much more confident now and would highly recommend the course to anyone looking to improve their abilities.", name: "Vishal R." },
                { id: 1, data: "The instructors were incredibly knowledgeable and helpful throughout the data analytics online training. I learned so much and feel much more confident in my data analysis abilities.", name: "Anajli K." },
            ],
            logos: [
                { id: 1, company: require('../../assets/images/amazon.png') },
                { id: 2, company: require('../../assets/images/tata-consultancy-services.png') },
                { id: 3, company: require('../../assets/images/google.png') },
                { id: 4, company: require('../../assets/images/flipkart.png') },
                { id: 5, company: require('../../assets/images/wishup.png') },
                { id: 6, company: require('../../assets/images/infosys.png') },
                { id: 7, company: require('../../assets/images/accenture.png') }
            ],
            courses: [
                {
                    id: 1,
                    title: "Digital Marketing Bootcamp",
                    rating: 4.7,
                    ratingCount: '1,032',
                    sessions: "106 Live Session",
                    duration: "16 Weeks",
                    image: require('../../assets/images/program_detail_bg_img.png'),
                },
                {
                    id: 2,
                    title: "Python Course",
                    rating: 4.9,
                    ratingCount: 950,
                    sessions: "46 Live Session",
                    duration: "2 Months",
                    image: require('../../assets/images/data-anaysis-course.png'),
                },
            ]
        },
        "Digital Marketing": {
            title: "Digital Marketing",
            description: "Craft and execute online strategies to boost business and connect with customers.",
            salaryData: [
                { id: 1, role: "HR Consultant", salary: "₹6L - ₹13L" },
                { id: 2, role: "Digital Marketing Manager", salary: "₹6L - ₹13L" },
                { id: 2, role: "Social Media Manager", salary: "₹3L - ₹5L" },
                { id: 2, role: "Content Marketer", salary: "₹4L - ₹8L" }
            ],
            studentReview: [
                { id: 1, data: "I had very much interest in social media marketing because I saw many brands using their social media to connect with their customers. And with the help of contests and different types of challenges, they create these trend waves which was very fascinating. I wanted to do that too. But when I joined WsCube Tech’s digital marketing training course, I learnt that social media is much more than just trends. And now I feel like I know all the secrets of making someone viral. And I am now ready to join a company and work on their social media. I loved the way they teach and it was such good that they let me work on their own social media projects to get a practical experience too.", name: "Harshita Gupta" },
                { id: 2, data: "Digital marketing is very essential for marketing in today’s world. And everyone who has a store, business or startup should learn the basics of digital marketing to get the best benefit of internet for themselves. I learnt it just out of curiosity. But now I am aware how these small businesses turn themselves into big brands. I will use my practical knowledge for my home bakery and I hope it will help me grow my business and reach more people.", name: "Sprash Jethwani" },
                { id: 3, data: "WsCube Tech’s Digital Marketing Training Courses are great. They are designed in such a way that you get interest in each subject to learn more and more. The teachers are very good and they have deep knowledge of their course. They will solve all your doubts and teach you two extra things to help you in learning better. I also liked the fact that everyone in my batch so passionate for learning that it created a competitive atmoshphere. Hence, everyone was working hard, but it was fun. For first time, learning felt fun and I did not want the course to end. I am glad to be one of the lucky people in my batch who have been chosen for placement in WsCube Tech Digital Marketing.", name: "Riya Bhardwaj" },
                { id: 4, data: "I was already doing my job in SEO for the last 6 months but I just had basic knowledge. By taking this course, I’ve got the skills to work on technical SEO also. My performance at the job has significantly improved. I highly recommend this course to everyone who wants to learn advanced SEO.", name: "Siddharth Chavda" },
            ],
            logos: [
                { id: 1, company: require('../../assets/images/amazon.png') },
                { id: 2, company: require('../../assets/images/accenture.png') },
                { id: 3, company: require('../../assets/images/ninjacart.png') },
                { id: 4, company: require('../../assets/images/neil-patel-digital.png') },
                { id: 5, company: require('../../assets/images/google.png') },
                { id: 6, company: require('../../assets/images/bewakoof.png') },
                { id: 7, company: require('../../assets/images/flipkart.png') },
                { id: 8, company: require('../../assets/images/code-brew-labs.png') },
                { id: 9, company: require('../../assets/images/capgemini.png') },
            ],
            courses: [
                {
                    id: 1,
                    title: "Digital Marketing Mentorship Program",
                    rating: 4.9,
                    ratingCount:'19,476',
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
            ]
        },
        "Web Development": {
            title: "Web Development",
            description: "Create websites that look great, work smoothly, and are easy to use.",
            salaryData: [
                { id: 1, role: "Frontend Developer", salary: "₹4L - ₹10L" },
                { id: 2, role: "Backend Developer", salary: "₹3L - 8L" },
                { id: 3, role: "FullStack Developer", salary: "5L - 12L" },
                { id: 4, role: "DevOps Engineer", salary: "₹6L - 14L" },
            ],
            studentReview: [
                { id: 1, data: "The full stack developer course by WsCube Tech has helped me get my first job. The full support and projects made all the difference. Today, I&apos;m proud to say I&apos;ve landed my dream job, and I couldn&apos;t have done it without this training.", name: "Vikrant Singh" },
                { id: 2, data: "Coming from a non-tech background, I was initially confused whether to learn web development. But the online Full Stack Developer training at WsCube Tech removed all my confusion and doubts. Now, I'm a Full Stack Developer, and I've proven that anyone can transition into this exciting field.", name: "Suresh Sharma" },
                { id: 3, data: "I was a working professional looking for a career change, and the Full Stack Developer course was the perfect choice. The flexibility of the course allowed me to learn while still maintaining my job. The practical skills and mentorship I received have propelled me into a new career, and I couldn't be happier with the decision.", name: "Ritesh Verma" },
                { id: 4, data: "Changing careers was a big step, and I needed the right guidance. WsCube Tech provided that and more. It's more than just a course; it's a career transformation. The real-world projects, job placement assistance, and the welcoming community made my journey smooth and fulfilling.", name: "Jyotsana Sharma" },
            ],
            logos: [
                { id: 1, company: require('../../assets/images/google.png') },
                { id: 2, company: require('../../assets/images/infosys.png') },
                { id: 3, company: require('../../assets/images/ibm.png') },
                { id: 4, company: require('../../assets/images/accenture.png') },
                { id: 5, company: require('../../assets/images/capgemini.png') },
                { id: 6, company: require('../../assets/images/tata-consultancy-services.png') },
                { id: 7, company: require('../../assets/images/wipro.png') },
                { id: 8, company: require('../../assets/images/paytm.png') },
                { id: 9, company: require('../../assets/images/cognizant.png') },
            ],
            courses: [
                {
                    id: 1,
                    title: "Full Stack Web Development Mentorship Program",
                    rating: 4.9,
                    ratingCount: '24,922',
                    sessions: "100 Live Session",
                    duration: "5 Months",
                    image: require('../../assets/images/web_development_couse1.png'),
                },
                {
                    id: 2,
                    title: "WordPress Course",
                    rating: 4.9,
                    ratingCount: '9,406',
                    sessions: "45 Live Session",
                    duration: "2 Months",
                    image: require('../../assets/images/web_development_course2.png'),
                },
            ]
        },
        "Cyber Security": {
            title: "Cyber Security",
            description: "Identify and fix security vulnerabilities in systems using the same tools as hackers but for protecting data.",
            salaryData: [
                { id: 1, role: "Cyber Security Analyst", salary: "₹4L - ₹10L" },
                { id: 2, role: "Information Security Manager", salary: "₹10L - ₹20L" },
                { id: 3, role: "Network Security Engineer", salary: "₹5L - ₹12L" },
                { id: 4, role: "Security Consultant", salary: "₹8L - ₹18L" },
            ],
            studentReview: [
                { id: 1, data: "I would like to thank the mentor and WsCube Tech for the enhanced training provided during the entire course. The mentor has brilliant knowledge. The course content covers beginner to pro. Also, sir is a good motivator and friendly person. ", name: "Gautam Mayekar" },
                { id: 2, data: "I’m thankful for the extra time provided by the institute as I had to take leaves because of illness. Sir had put extra time and effort for me and some other learners who needed more time in learning. This is what makes WsCube tech the best institute for ethical hacking and penetration testing.", name: "Bharat Kumar" },
                { id: 3, data: "If anybody wants to learn the advanced techniques of hacking and penetration testing, then I don’t think there is any other course better than this. Our classes were conducted regularly on Zoom and were very interactive. It was a small batch and learning was effective. Thanks!",name:"Rituraj Sharma" },
                { id: 4, data: "You can feel the difference in the way sir teaches and clears the concepts. I had seen it in the way he had explained in some YouTube videos. That is why I chose to go for the full course. The mentor considers your level of understanding while teaching. I used to ask a lot of questions during classes and found answers always on time. ", name: "Shugandha Sharma" },
            ],
            logos: [
                { id: 1, company: require('../../assets/images/google.png') },
                { id: 2, company: require('../../assets/images/accenture.png') },
                { id: 3, company: require('../../assets/images/paytm.png') },
                { id: 4, company: require('../../assets/images/infosys.png') },
                { id: 5, company: require('../../assets/images/ibm.png') },
                { id: 6, company: require('../../assets/images/wipro.png') },
                { id: 7, company: require('../../assets/images/amazon.png') },
            ],
            courses: [
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
                },
            ]
        },
        "App Development": {
            title: "App Development",
            description: "Build visually appealing apps, function seamlessly, and offer intuitive user experiences.",
            salaryData: [
                { id: 1, role: "Mobile App Developer (General)", salary: "₹4L - ₹10L" },
                { id: 2, role: "Android Developer", salary: "₹3L - 9L" },
                { id: 3, role: "iOS Developer", salary: "₹4L - ₹10L" },
                { id: 4, role: "Cross-Platform Mobile Developer (React Native/Flutter)", salary: "₹5L - ₹12L" },
            ],
            studentReview: [
                { id: 1, data: "The Flutter online course by WsCube Tech helped me understand the industrial and professional needs of the app development market. The training level and expertise of the mentor was of high standard. Grateful for the competitive edge WsCube Tech has provided me with this Flutter certification course.", name: "Monika Joon" },
                { id: 2, data: "I’ve been working as an Android App Developer for the past 1.5 years. During my experience, I saw the growing demand for Flutter app development. That is when I looked for the best online Flutter training course. It has helped me to level up and upgrade my existing skills and explore better career opportunities.", name: "Salman Ali" },
                { id: 3, data: "Flutter is undoubtedly in demand, which is why I enrolled in this course to learn Flutter app development from scratch. I was a beginner when I started, but with proper guidance, technical training, working on projects, and internship, I became confident and skilled. This is simply the best Flutter app development course online.", name: "Neha Bhatt" },
                { id: 4, data: "I joined the Google Flutter online course by WsCube Tech last summer and learnt all the essential concepts of the framework. Loved the quality of content, way of training, engagement during live classes, and support by the mentor. Thank you WsCube Tech!", name: "Himanshu Mishra" },
            ],
            logos: [
                { id: 1, company: require('../../assets/images/google.png') },
                { id: 2, company: require('../../assets/images/wipro.png') },
                { id: 3, company: require('../../assets/images/infosys.png') },
                { id: 4, company: require('../../assets/images/paytm.png') },
                { id: 5, company: require('../../assets/images/ibm.png') },
                { id: 6, company: require('../../assets/images/capgemini.png') },
                { id: 7, company: require('../../assets/images/accenture.png') },
                { id: 8, company: require('../../assets/images/flipkart.png') },
            ],
            courses: [
                {
                    id: 1,
                    title: "Online Flutter App Development Course",
                    rating: 4.9,
                    ratingCount: '4,902',
                    sessions: "85 Live Session",
                    duration: "4 Months",
                    image: require('../../assets/images/App_development_course1.png'),
                },
                {
                    id: 2,
                    title: "Online Android App Development Course",
                    rating: 4.9,
                    ratingCount: '7,623',
                    sessions: "100 Live Session",
                    duration: "4 Months",
                    image: require('../../assets/images/App_development_course2.png'),
                },
            ]
        },
        "Design": {
            title: "Design",
            description: "Craft and execute online strategies to boost business and connect with customers.",
            salaryData: [
                { id: 1, role: "Graphic Designer", salary: "₹3L - ₹8L" },
                { id: 2, role: "Senior Graphic Designer", salary: "₹5L - ₹12L" },
                { id: 3, role: "Visual Designer", salary: "₹4L - ₹10L" },
                { id: 4, role: "Brand Identity Designer", salary: "₹5L - ₹12L" },
            ],
            studentReview: [
                { id: 1, data: "I was amazed by the comprehensive content and industry insights in WSCube Tech's Graphic Design course. The course not only polished my design skills but also gave me a clear understanding of the Indian design landscape. Definitely recommend it to all aspiring designers.", name: "Advait Desai" },
                { id: 2, data: "Choosing WsCube Tech for my graphic design training was the best decision I made for my career. The course structure was well-organized, the trainers were supportive, and the emphasis on portfolio-building gave me a strong foundation to kickstart my design journey in India.", name: "Arjun Gupta" },
                { id: 3, data: "The Graphic Design course at WsCube Tech is a gem! It not only covers the fundamentals but also dives deep into advanced techniques. The exposure to live projects and client interactions made me feel confident about entering the Indian design industry. Kudos to the team!", name: "Riya Sharma" },
                { id: 4, data: "WsCube Tech's Graphic Design course provided me with the skills and knowledge necessary to stand out in the competitive Indian design market. The practical approach and real-world applications make this course a must for anyone serious about a career in graphic design.", name: "Arav Patel" }
            ],
            logos: [
                { id: 1, company: require('../../assets/images/google.png') },
                { id: 2, company: require('../../assets/images/flipkart.png') },
                { id: 3, company: require('../../assets/images/paytm.png') },
                { id: 4, company: require('../../assets/images/bewakoof.png') },
                { id: 5, company: require('../../assets/images/google.png') },
                { id: 6, company: require('../../assets/images/flipkart.png') },
                { id: 7, company: require('../../assets/images/paytm.png') },
            ],
            courses: [
                {
                    id: 1,
                    title: "Online Graphic Designing Course",
                    rating: 5,
                    ratingCount: '11,532',
                    sessions: "70 Live Session",
                    duration: "3 Months",
                    image: require('../../assets/images/program_detail_bg_img.png'),
                }
            ]
        }
    };

    const firstCareer = Object.keys(careerPrograms)[0];
    const [selectedCareer, setSelectedCareer] = useState(careerPrograms[firstCareer]);


    return (
        <div className='career_path'>
            <div className='career_data'>
                <h1>Explore Your Career Fit</h1>
                <p>Grab actionable career insights with recommended mentorship programs designed to turn your passion into a profession.</p>
            </div>
            <div className="career-buttons">
                {Object.keys(careerPrograms).map((career, index) => (
                    <ProgramButton
                        key={index}
                        program={career} // Pass career name as program
                        onClick={(selected) => setSelectedCareer(careerPrograms[selected])}
                        isActive={selectedCareer.title === careerPrograms[career].title}
                    />
                ))}
            </div>
            <div>
                <CareerData program={selectedCareer} logos={selectedCareer.logos} courses={selectedCareer.courses} />
            </div>
        </div>
    );
}

export default CareerPathContainer;