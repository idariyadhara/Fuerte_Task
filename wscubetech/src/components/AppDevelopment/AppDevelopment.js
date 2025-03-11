import MentorShip from '../DataAnalytics/MentorShip';
import ContainerImage from '../WebDevelopment/ContainerImage';
import ProgramEligibility from '../DataAnalytics/ProgramEligibility';
import Highlights from '../DataAnalytics/Highlights';
import ProgramStep from '../DataAnalytics/ProgramStep.js';
import Module from '../DataAnalytics/Module';
import CareerAsistant from '../DataAnalytics/CareerAsistant';
import Certificate from '../DataAnalytics/Certificate';
import FeeStructure from '../WebDevelopment/FeeStructure.js';
import Mentors from '../DataAnalytics/Mentors';
import Country from '../DataAnalytics/Country';
import AlumniReview from '../DataAnalytics/AlumniReview.js';
import FAQ from '../WebDevelopment/FAQ.js';

const AppDevelopmentData = {
    programType: "Job Ready Program",
    title: "App Development Mentorship Program",
    description: "Join the best online app development course and acquire this in-demand skill under the guidance of industry practitioners. Understand the fundamentals of developing robust mobile apps and master advanced tools through hands-on learning.",
    stats: [
        { value: "5", label: "4,922 Reviews" },
        { value: "3,500+", label: "Aspirants Mentored" },
        { value: "2+", label: "Industry Mentors" }
    ]
};

const highlightsData = [
    {
        id: "Cohort-Based Learning",
        title: "Cohort-Based Learning",
        text: "Immerse yourself in a collaborative, cohort-based learning environment, prioritizing hands-on problem-solving abilities. Enhance your skills within a community that flourishes through shared growth.",
        points: [
            "Participate in projects and discussions that tackle real-world challenges, boosting your problem-solving skills with collaborative insights.",
            "Take advantage of a strong support network where peers inspire each other, fostering a spirit of growth and shared achievements."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "Guided by the Geeks",
        title: "Guided by the Geeks",
        text: "Thrive under the mentorship of seasoned industry mentors who impart their vast knowledge and insights. Each session is crafted to help you navigate the complexities, boosting your confidence as you master the craft. Incorporate advanced techniques and strategies from industry gurus keen to share their hidden formulas for excellence. ",
        points: [
            "Integrate theoretical knowledge with practical execution, refining your skills through active participation and collaboration."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "Career Launch Countdown",
        title: "Career Launch Countdown",
        text: "Prepare to launch your career into the stratosphere with our intensive  7-day last-mile prep.",
        points: [
            "This comprehensive program offers placement assistance and interviews with top hiring managers.",
            "Boost your employment prospects and exclusive referrals aimed at career readiness."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    }
];

const AppDevelopmentCourse = {
    title: "What Will You Learn",
    description: "A detailed overview of the course, including key topics, objectives, and module sequence.",
    curriculumLink: true,
    courseInfo: [
        { icon: "📅", label: "Duration", value: "12 Weeks" },
        { icon: "💻", label: "Mode", value: "Online" },
        { icon: "🎥", label: "Live Sessions", value: "72+ hrs" },
        { icon: "📊", label: "Projects", value: "13+" },
    ],
    milestones: [
        {
            title: "Stepping into Flutter & Dart",
            duration: "6 Live classes",
            description: "This milestone offers a complete journey from setting up Flutter and Dart environments to mastering the programming fundamentals needed for mobile app development. It equips you with the essential skills and insights to build scalable, high-performance applications right from the start.",
            topicGroups: [
                {
                    subtitle: "Flutter Setup & Dart Fundamentals",
                    topics: ["Flutter Environment Setup","Platform-Specific Essentials","Device Configuration & Virtual Setup","Programming Fundamentals","Functions & Parameters","Control Flow & Loops"]
                },
                {
                    subtitle: "Handshaking with Dart",
                    topics: ["Data Collections Overview","Lists, Maps, and Sets Mastery","Managing Complex Data Structures","Core Object-Oriented Programming Concepts","Advanced OOP Techniques","Fundamental Keywords and Identifiers","High Order Functions and Callbacks"]
                },
            ]
        },
        {
            title: "Flutter Unveiled",
            duration: "6 Live Classes",
            description: "This milestone delves into Flutter's core architecture, exploring widget lifecycles and effective navigation strategies. It provides the essential insights and techniques for crafting dynamic, responsive user interfaces, setting a solid foundation for advanced mobile app development.",
            topicGroups: [
                {
                    subtitle: "Widget Essentials & UI Firepower",
                    topics: ["Flutter Project Setup & Stateless Widget Introduction","Exploring Flutter App Architecture & Basic Widgets","Version Control with GitHub: Branches, Pulls & Rebase","Mastering Layouts: Rows, Columns, Wrap & Interactive Elements","Building Your First Flutter UI with Core Fundamentals","State Management with Stateful Widgets & BMI App Implementation","Building TIP calculator App"]
                },
                {
                    subtitle: "Delving Deeper into Flutter",
                    topics: ["List & Grid Views Mastery","Widget Essentials: ListTile, CircleAvatar, GridTile & Clip","Layered Layouts: Stack, Positioned, Align & Card","Navigation & Routing Fundamentals","UI Essentials: AppBar, FAB, Tabs, Drawer & Nav","Implicit, Explicit Animations & Hero","Advanced Animations: Controllers, Tween, Lottie & Rive"]
                },
            ]
        },
        {
            title: "Efficient Persistent Data Management in Flutter",
            duration: "3 Live Classes",
            description: "This milestone focuses on robust strategies for managing persistent data in Flutter applications. It covers best practices for local storage, database integration, and offline capabilities, ensuring data integrity and an optimal user experience.",
            topicGroups: [
                {
                    subtitle: "Offline Database Mastery",
                    topics: ["Database Fundamentals & Async Programming","Shared Preferences Overview","Session Management with Shared Preferences","SQFLite: Adding & Fetching Data","Data Modeling: fromMap & toMap","SQFLite: Update & Delete Operations","Local Database Authentication: Login & Signup"]
                }
            ]
        },
        {
            title: "Flutter Excellence",
            duration: "9 Live Classes",
            description: "This milestone focuses on mastering advanced Flutter techniques, including effective state management and sophisticated UI styling. It also offers practical experience by guiding you through the development of a complete, production-ready expense app.",
            topicGroups: [
                {
                    subtitle: "Flutter State Management Demystified",
                    topics: ["State Management Overview","Provider & MultiProvider Essentials","Consumer & ContextFlow Techniques","Cubit for State Management","Bloc Pattern: Event & State Handling","GetX State Management","Comprehensive State Management Strategies"]
                },
                {
                    subtitle: "Styling & Customization Mastery",
                    topics: ["Responsive UI & MediaQuery Essentials","Orientation & Layout Builders","Flexible Widgets & Screen Util Alternatives","Design Styles & Theme Fundamentals","Global App Utilities Management","Dark/Light Theme Customization with Provider"]
                },
                {
                    subtitle: "First Live Project: Flutter Database Essentials",
                    topics: ["Expense App: UI Foundation & State Management","Project Foundation Setup","Core UI & State Management","Data Handling Techniques","Persistence Strategies","Charts & Analytics Integration","Feature Finalization"]
                }
            ]
        },
        {
            title: "Unlocking the Potential of Dynamic App Development",
            duration: "6 Live Classes",
            description: "This milestone unveils innovative approaches to dynamic app development, focusing on building adaptive, interactive user experiences. It integrates cutting-edge UI techniques and agile methodologies to empower developers in creating scalable, high-performance applications.",
            topicGroups: [
                {
                    subtitle: "Dynamic Flutter: Enriching Apps with API",
                    topics: ["API Fundamentals & Integration","GET/POST Requests & FutureBuilder","API Handling in Flutter Apps","JSON Parsing & Data Modeling","News & Weather API Integration","BLoC API Handling: Setup","BLoC API Handling: Implementation & Error Management"]
                },
                {
                    subtitle: "Firebase-Enabled Flutter",
                    topics: ["Firebase Setup & Firestore Data Write","Firestore Data Retrieval & Querying","Email Auth & FCM Notifications","Phone Auth via OTP","Firebase Storage & Image Handling","Ads Integration & Q&A Session","Payment Gateway Integration"]
                }
            ]
        },
        {
            title: "Capstone Project",
            duration: "6 Live Classes",
            description: "This capstone project provides a comprehensive opportunity to apply your skills in a real-world scenario, guiding you from initial development through to final testing and deployment. It emphasizes practical problem-solving, robust optimization, and the delivery of a polished, production-ready application.",
            topicGroups: [
                {
                    subtitle: "Building the Capstone Project",
                    topics: ["Career Essentials: Resume & Interview Prep","Audio Player Implementation in Flutter","Video Player Implementation in Flutter","Google Maps Integration: UI, Markers & Overlays","Displaying User Location via GPS","E-Commerce App Day 1: Setup & UI Design","E-Commerce App Day 2: API Integration & Cart System"]
                },
                {
                    subtitle: "Finalising the Capstone Project",
                    topics: ["User Authentication (Login & Signup)","Checkout Process & App Optimization","Final App Touches","Playstore Deployment","Appstore Deployment","Web Hosting Deployment","Live App Launch"]
                }
            ]
        }
    ]
};
const AppDevelopmentReviews = [
    {
        text: "I wanted to upskill and diversify my career options, and this course was the perfect choice. The live sessions were informative and engaging, and I appreciated the mentor's expertise. The work on projects allowed me to apply what I learned, and the career-oriented components, such as app testing and user experience design, were extremely valuable.",
        name: "Abhinav Tiwari."
    },
    {
        text: "The Mobile App Development Course was an incredible learning experience. The instructor-led training was engaging and provided a solid foundation in mobile app development. Having access to a mentor who guided me through the complexities of app development was priceless. The hands-on projects were not only practical but also fun to work on.",
        name: "Anjali Khurana."
    },
    {
        text: "I had been wanting to break into mobile app development, and this course was the perfect starting point. The live training sessions were well-structured, making it easy to understand the concepts. The mentorship provided the support I needed, and the course's focus on practical projects allowed me to build real apps. With the career-oriented content, including app store submission and marketing strategies, I feel ready to embark on a career in mobile app development.",
        name: "Karthik Sharma."
    },
    {
        text: "This career turned out to be better than my expectations. As a beginner in coding, I was worried about the complexity of app development, but the course broke it down into manageable steps. The mentor was patient and helpful, and the hands-on projects were both challenging and rewarding. This course not only taught me how to develop apps but also provided valuable insights into app monetization and marketing.",
        name: "Nandini Thakur."
    }
];
const faqsData = [
    {
        question: "What is mobile app development, and why is it a promising career choice?",
        answer: [
            "Mobile app development involves creating applications for smartphones and tablets. It's a promising career choice because mobile apps are integral to modern life, and there is a growing demand for skilled developers in the tech industry."
        ]
    },
    {
        question: "Do I need prior programming experience to enroll in App Development Course?",
        answer: ["While some programming experience can be beneficial, our course is designed to accommodate both beginners and individuals with coding backgrounds. We start with the basics and gradually progress to more advanced topics."]
    },
    {
        question: "What platforms or programming languages will I learn in the course?",
        answer: [
            "Our course typically covers mobile app development for both Android and iOS platforms using languages like Java (for Android) and Swift (for iOS). You'll also learn about cross-platform development tools like React Native."
        ]
    },
    {
        question: "Will I be able to build and publish real mobile apps by the end of the course?",
        answer: [
            "Yes, our course includes hands-on projects that allow you to create and publish real mobile apps. You'll gain practical experience and build a portfolio of work.",
        ]
    },
    {
        question: "Is certification provided upon course completion?",
        answer: [
            "Yes, we provide a certification upon successful completion of the Mobile App Development Course. This certification can enhance your credibility and job prospects.",
        ]
    },
    {
        question: "Can I use the skills learned in this course to work as a freelance app developer?",
        answer: [
            "Certainly! The skills you acquire can open opportunities for freelance app development or entrepreneurship. Many app developers start their own businesses or work as freelancers."
        ]
    },
    {
        question: "What skills are essential for a career in mobile app development?",
        answer: [
            "Essential skills include proficiency in programming languages such as Java, Kotlin (for Android) and Swift, Objective-C (for iOS), as well as knowledge of app development frameworks, UI/UX design principles, and problem-solving abilities."
        ]
    },
    {
        question: "Is a degree in computer science or related field necessary for a career in mobile app development?",
        answer: [
            "While a degree can be beneficial, it's not always necessary. Many successful app developers are self-taught or have completed specialized training programs. Building a strong portfolio of apps and projects can be equally important."
        ]
    },
    {
        question: "What platforms or operating systems should I focus on for mobile app development?",
        answer: [
            "It depends on your career goals and interests. You can choose to specialize in Android app development, iOS app development, or both. Cross-platform development tools like React Native and Flutter allow you to build apps for both platforms simultaneously."
        ]
    },
    {
        question: "Are there different types of mobile app developers, such as front-end and back-end developers?",
        answer: [
            "Yes, mobile app development roles can be specialized. Front-end developers focus on the user interface and user experience, while back-end developers handle server-side logic, databases, and server management. Full-stack developers are proficient in both area."
        ]
    },
    {
        question: "What industries hire mobile app developers?",
        answer: [
            "Mobile app developers are in demand across various industries, including e-commerce, healthcare, finance, gaming, entertainment, education, and more. Virtually any business with a mobile presence requires app development expertise."
        ]
    },
    {
        question: "Why should I learn mobile app development?",
        answer: [
            "Mobile applications have proved to be advantageous for companies in reaching a wider audience and boosting sales. These apps generate around 53% of online traffic over desktop users. Companies are seeking skilled developers who can create customized apps, ensure seamless user experience, increase SEO potential, and add value to their business.",
            "Recruiters are ready to pay attractive salary packages to deserving candidates. Moreover, there are thousands of jobs for mobile developers worldwide, and the field ensures more jobs in the future, making mobile app development worth learning."
        ]
    },
    {
        question: "What jobs can I apply for after completing the mobile app development course?",
        answer: [
            "Upon completing our mobile app development course online, you can apply for the following job roles:",
            "Android Developer",
            "iOS Developer",
            "Mobile Application Developer",
            "Software Engineer",
            "Android Mobile Development Engineer"
        ]
    },
    {
        question: "What kind of people are best suited for a mobile app development course?",
        answer: [
            "Any aspirant, freelancer, business owner, college student, or professional fascinated with large-scale apps like Snapchat and Instagram can enroll in this online mobile app development course. You don’t need a technical background to learn mobile app development or make a career in this field. Your interest in the field and passion for learning would suffice. If you want to work as a mobile app developer and build powerful applications, register for the course now."
        ]
    }
];

const AppDevelopment = () => {
    return (
        <div>
            <MentorShip data={AppDevelopmentData} hideCardContent={true} />
            <ContainerImage src={require('../../assets/images/mentor_program.jpeg')}
                alt="Mentorship Program" />
            <ProgramEligibility heading="Who Should Join Mobile App Development Course?"
                description={[
                    "Are you looking for a career that offers boundless opportunities in the dynamic world of technology? The job market is competitive, and standing out can be a challenge. Traditional career paths may not always align with your aspirations, leaving you longing for something more.",
                    "Our online Mobile App Development Course is the solution to your career aspirations and the key to unlocking a world of innovation and growth in the tech industry. Mobile apps have become an integral part of our lives, from communication to entertainment, business, and beyond. As a mobile app developer, you have the power to shape these experiences and make a meaningful impact.",
                    "The majority of buyers and target audiences are mobile users. Hence, mobile app development is crucial for most companies, whether it’s a startup, large-scale enterprise, or small business. The demand for mobile apps is rising rapidly because of the ever-evolving technology and consumer needs. Thus, the skills and proficiency to develop powerful mobile apps can help aspirants and professionals become valuable assets in the workplace.",
                    "Fuerte Developers offers the best mobile app development course with certificate that aligns with the latest industry trends and standards. Through this extensive training program, we help you build the skills and knowledge that top MNCs and recruiters seek.",
                    "Along with technical skills, we also help you hone problem-solving and project-management skills, which are key elements to building a promising career in this field. You will learn to assess the requirements of different types of users and troubleshoot and adjust accordingly.",
                    "You will work on several hands-on projects, building and designing dynamic mobile apps from scratch. Enroll in this mobile app development course in India and open doors to infinite opportunities and success."
                ]} />
                 <Highlights heading="Online Mobile App Development Course Highlights" subheading="Highlighting the Best Course Features." data={highlightsData} />
                 <ProgramStep/>
            <Module  {...AppDevelopmentCourse} />
            <CareerAsistant/>
            <Certificate/>
            <FeeStructure/>
            <Mentors/>
            <Country/>
            <AlumniReview reviews={AppDevelopmentReviews}/>
            <FAQ heading="Mobile App Development Course FAQs" 
            description="Here’s everything you may ask." 
            faqs={faqsData} />
        </div>
    );
}

export default AppDevelopment;