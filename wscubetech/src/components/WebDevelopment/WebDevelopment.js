import './WebDevelopment.css';
import MentorShip from '../DataAnalytics/MentorShip.js';
import ContainerImage from './ContainerImage.js';
import ProgramEligibility from '../DataAnalytics/ProgramEligibility.js';
import Highlights from '../DataAnalytics/Highlights.js';
import ProgramStep from '../DataAnalytics/ProgramStep.js';
import Module from '../DataAnalytics/Module.js';
import Tools from '../DataAnalytics/Tools.js';
import CareerAsistant from '../DataAnalytics/CareerAsistant.js';
import Certificate from '../DataAnalytics/Certificate.js';
import FeeStructure from './FeeStructure.js';
import Mentor from '../FounderMessage/Mentor.js';
import Country from '../DataAnalytics/Country.js';
import AlumniReview from '../DataAnalytics/AlumniReview.js';
import FAQ from './FAQ.js';

const WebDevelopmentData = {
    programType: "Job Ready Program",
    title: "Full Stack Web Development Mentorship Program",
    description: "Join the best full stack developer course online and accelerate your career as a skilled web developer. Learn from the top industry mentors and launch your career in Full Stack Web Development.",
    stats: [
        { value: "4.9", label: "24,922 Reviews" },
        { value: "27,000+", label: "Aspirants Mentored" },
        { value: "15+", label: "Industry Mentors" }
    ]
};

const highlightsData = [
    {
        id: "guided-by-the-geeks",
        title: "Guided by the Geeks",
        text: "Thrive under the mentorship of seasoned industry mentors who impart their vast knowledge and insights. Each session in this full stack web development course is crafted to help you navigate the complexities, boosting your confidence as you master the craft. Incorporate advanced techniques and strategies from industry gurus keen to share their hidden formulas for excellence.",
        points: [
            "Thrive under the mentorship of seasoned industry mentors who impart their vast knowledge and insights."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "Project-Driven Curriculum",
        title: "Project-Driven Curriculum",
        text: "Step into engaging, hands-on sessions where learning meets real-world application. This online full stack development course is crafted to enhance problem-solving skills by immersing you in projects that reflect real-world challenges. ",
        points: [
            "Integrate theoretical knowledge with practical execution, refining your skills through active participation and collaboration.",
            "Simulate real-world complexities by engaging through practical, hands-on solutions that bring concepts to life."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "Career Launch Countdown",
        title: "Career Launch Countdown",
        text: "Prepare to launch your career into the stratosphere with our intensive  7-day last-mile prep.",
        points: [
            "This is the best full stack developer course that offers placement assistance and interviews with top hiring managers.",
            "Boost your employment prospects and exclusive referrals aimed at career readiness."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "Hybrid Dissemination",
        title: "Hybrid Dissemination",
        text: "Embrace the best of both worlds with our hybrid dissemination approach. You can access self-paced resources and instructor-led sessions on your schedule.",
        points: [
            " Attend our structured classes at your convenience and upskill to meet the industry demands. ",
            "Adapt this blended learning model to your lifestyle and maximize your learning experience."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    }
];

const WebDevelopmentCourse = {
    title: "Full Stack Developer Course Syllabus",
    description: "Explore the curriculum designed according to the industry standards!",
    curriculumLink: true,
    courseInfo: [
        { icon: "📅", label: "Duration", value: "5 Months" },
        { icon: "💻", label: "Mode", value: "Online" },
        { icon: "🎥", label: "Live Sessions", value: "100+ hrs" },
        { icon: "📊", label: "Projects", value: "15+" },
    ],
    milestones: [
        {
            title: "Module 1",
            duration: "1 Live classes",
            description: "Introduction to Web Development",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["What is web development?", "Static vs dynamic website", "Who is front-end developer?"]
                },
                {
                    subtitle: "",
                    topics: ["Static vs dynamic website", "Who is backend developer?"]
                },
            ]
        },
        {
            title: "Module 2",
            duration: "3 Live Classes",
            description: "HTML",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["Introduction to HTML", "HTML page structure", "Basic HTML tags", "Anchor tag, email tag, tel tag", "Ordered and Unordered Lists", "Table tags in HTML", "Designing a calendar using HTML table", "HTML form elements", "HTML input attributes"]
                },
                {
                    subtitle: "",
                    topics: ["Opening and closing tags", "How to create HTML file", "Image tag and attributes", "HTML lists", "Creating website homepage using basic tags", "Table attributes in HTML", "HTML Div Tag", "HTML input types"]
                },

            ]
        },
        {
            title: "Module 3",
            duration: "17 Live Classes",
            description: "CSS",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["Introduction to Cascading Style Sheet (CSS)", "Types of CSS Types of CSS (external, internal, inline)", "CSS selector (CSS selector (class, Id, tagName))", "Using internal CSS", "Basic CSS properties", "Border properties", "Creating professional webpage using HTML & CSS", "CSS Spacing properties (Margin & Padding)", "Margin properties", "Padding properties", "CSS measurement units", "CSS box model browser", "Background image property", "External CSS", "Border-radius property", "How to comment HTML or CSS code?", "Full-width vs fixed-width web design", "Setting width in percentage"]
                },
                {
                    subtitle: "",
                    topics: ["CSS clear property", "Creating full-width section", "CSS hover", "CSS transition property", "CSS position (fixed, relative, sticky) properties", "Absolute positioning", "CSS display property", "CSS overflow properties", "CSS Z-index properties", "CSS opacity", "CSS flexbox", "CSS Grid", "Pseudo classes and elements", "Display properties", "Concept of one-page website", "CSS #id selector", "CSS cursor properties", "CSS scroll properties"]
                }
            ]
        },
        {
            title: "Module 4",
            duration: "4 Live Classes",
            description: "CSS3",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["Introduction to CSS3", "Google Fonts & FontAwesome", "CSS transform: scale", "Calc function", "Column properties", "CSS3 Animation", "After & before selector", "Multiple background images", "Creating responsive layout", "@import mystyle.css", "3D transforms", "Background gradient", "CSS hover"]
                },
                {
                    subtitle: "",
                    topics: ["Box-shadow & text-shadow", "CSS3 transition", "Compatibility and ventor prefixes", "CSS transform: translate", "Figma To HTML", "CSS3 new features", "CSS skew", "CSS Media Queries", "Creating section from Figma file", "Responsiveness across all devices", "Max and min height", "CSS transform: rotate", "Max and min width"]
                }
            ]
        },
        {
            title: "Module 5",
            duration: "4 Live Classes",
            description: "HTML5",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["Introduction to HTML5", "Basic HTML5 structure", "Text-level semantic tags"]
                },
                {
                    subtitle: "",
                    topics: ["HTML5 semantic & non-semantic elements", "Structural and semantic tags", "Media and interaction tags"]
                }
            ]
        },
        {
            title: "Module 6",
            duration: "16 Live Classes",
            description: "JavaScript",
            topicGroups: [
                {
                    subtitle: "",
                    topics: ["Introduction to JavaScript", "Scope and lifetime", "JavaScript arrays", "JavaScript conditional statements", "Window object functions", "JavaScript loops", "JavaScript promises", "Events in JavaScript", "Show/hide password using JS DOM", "JavaScript Operators", "Building random code generator", "Creating responsive menu", "Creating password generator", "JavaScript array methods", "Most useful functions in JS", "Mini e-commerce app using promise with free API", "Date object in JavaScript"]
                },
                {
                    subtitle: "",
                    topics: ["JavaScript data types", "JavaScript variables", "Uses of JavaScript", "Functions in JavaScript", "Ways to embed JS", "Object in JavaScript", "JavaScript DOM", "Math operations", "Changing image using this function", "Product cart system to increase/decrease quantity", "Creating JavaScript calculator", "Creating to-do list", "Different types of patterns using nested loop", "Weather app using promise with free API", "JavaScript exception handling for of loop and for in loop", "Data swipe using JavaScript DOM", "Local Storage in JS"]
                }
            ]
        }
    ]
};

const WebDevelopmentReviews = [
    {
        text: "I needed to understand the technical side of my business. This training was the ideal choice. It helped me to build and manage my web projects and gave me the confidence to take my business to the next level. I'm now the tech-savvy entrepreneur I aspired to be",
        name: "Vijay Raj Singh."
    },
    {
        text: "I was a working professional looking for a career change, and the Full Stack Developer course was the perfect choice. The flexibility of the course allowed me to learn while still maintaining my job. The practical skills and mentorship I received have propelled me into a new career, and I couldn't be happier with the decision.",
        name: "Ritesh Verma."
    },
    {
        text: "Coming from a non-tech background, I was initially confused whether to learn web development. But the online Full Stack Developer training at Fuerte Developers removed all my confusion and doubts. Now, I'm a Full Stack Developer, and I've proven that anyone can transition into this exciting field.",
        name: "Suresh Sharma."
    },
    {
        text: "Changing careers was a big step, and I needed the right guidance. Fuerte Developers provided that and more. It's more than just a course; it's a career transformation. The real-world projects, job placement assistance, and the welcoming community made my journey smooth and fulfilling.",
        name: "Jyotsana Jadoun."
    },
    {
        text: "The full stack developer course by Fuerte Developers has helped me get my first job. The full support and projects made all the difference. Today, I&apos;m proud to say I&apos;ve landed my dream job, and I couldn&apos;t have done it without this training.",
        name: "Vikrant Singh."
    }
];

const faqsData = [
    {
        question: "What is Full Stack Development?",
        answer: [
            "Full Stack Development is a term used in web development which involves working on both the front-end and back-end aspects of a website or web application. Full Stack Developers are versatile professionals who have expertise in a wide range of technologies and can handle all the tasks involved in creating and maintaining a web application."
        ]
    },
    {
        question: "What are the key components of full stack development?",
        answer: [
            "Here's a breakdown of the key components of Full Stack Development:",
            "Front-End Development: This involves working on the user interface (UI) and the client-side of a web application. Full Stack Developers are skilled in technologies such as HTML, CSS, and JavaScript. They create the visual and interactive elements of a website, ensuring a user-friendly and responsive design.",
            "Back-End Development: This focuses on the server-side of web development. Full Stack Developers work with server technologies, databases, and server-side programming languages like Node.js, and others. They manage the server, database, and application logic to ensure data processing, security, and server-side functionality.",
            "Databases: Full Stack Developers understand how to design and manage databases to store, retrieve, and manipulate data efficiently. They work with database management systems (DBMS) like MongoDB and others.",
            "Server Management: Full Stack Developers are responsible for configuring and maintaining servers and server infrastructure. This includes setting up web servers, managing hosting environments, and ensuring the overall performance and security of the server-side components.",
            "Version Control: Full Stack Developers often use version control systems like Git to manage changes to code and collaborate with other developers. This ensures that multiple team members can work on a project without conflicts."
        ]
    },
    {
        question: "Who is a Full-Syack Developer?",
        answer: [
            "A Full Stack Developer is a versatile and all-rounder professional in the field of web development who has expertise in both front-end and back-end technologies.",
            "Full Stack Developers are capable of working on all aspects of a web application or website, from designing the user interface to managing server infrastructure and databases. They are often referred to as full stack because they have a broad understanding of the entire technology stack required to build and maintain web applications."
        ]
    },
    {
        question: "Who should join this full stack developer course online?",
        answer: [
            "Our Full Stack Developer Course is designed for beginners and intermediate learners interested in pursuing a career in web development. It's suitable for those with no prior coding experience as well as those looking to advance their skills.",
        ]
    },
    {
        question: "What is the duration of the full stack development course??",
        answer: [
            "The course spans six months, providing comprehensive training in Full Stack Development. It includes both theoretical knowledge and extensive hands-on experience.",
        ]
    },
    {
        question: "Do I need any prior coding experience to enroll in the course?",
        answer: [
            "No, you don't need prior coding experience. Our full stack developer course is structured to accommodate beginners, starting with the fundamentals and gradually progressing to advanced topics."
        ]
    },
    {
        question: "What technologies are covered in the course?",
        answer: [
            "Our online full stack development course is centered around the MERN Stack, which includes MongoDB, Express.js, React, and Node.js. You'll also learn front-end technologies like HTML, CSS, and JavaScript."
        ]
    },
    {
        question: "What makes your course stand out from others?",
        answer: [
            "This is the best full stack development course in India due to its live training, expert mentorship, focus on practical experience through real projects, recognized certification, and job placement support. We provide a holistic learning experience that prepares you for a successful career."
        ]
    },
    {
        question: "Can I work on real projects during the course?",
        answer: [
            "Absolutely. You will have the opportunity to work on over 10 real-world projects, allowing you to build a strong portfolio and gain practical experience that employers value."
        ]
    },
    {
        question: "Is there a certification upon completion of the course?",
        answer: [
            "Yes, you will receive a recognized certification from Fuerte Developers upon successfully completing the Full Stack Developer Course."
        ]
    },
    {
        question: "How can I enroll in the course?",
        answer: [
            "To enroll, simply fill out the given form by clicking on the Book demo Class button. Our team will contact you and guide you through the process."
        ]
    },
    {
        question: "Why is Full Stack Development important?",
        answer: [
            "Full Stack Developers can work on all parts of a web project, making them versatile and in high demand. They can understand the entire development process, which is valuable for project management and troubleshooting."
        ]
    },
    {
        question: "What skills are essential for a Full Stack Developer?",
        answer: [
            "Full Stack Developers need a strong grasp of front-end and back-end technologies, as well as knowledge of databases, version control, and problem-solving skills. They should also be proficient in web security and deployment."
        ]
    },
    {
        question: "Can I become a Full Stack Developer with no prior coding experience?",
        answer: [
            "Yes, you can become a Full Stack Developer with no prior coding experience."
        ]
    },
    {
        question: "Is Full Stack Development a good career choice?",
        answer: [
            "Yes, Full Stack Development is a promising career choice. The demand for Full Stack Developers is high, and their versatility and problem-solving skills are valued in the tech industry."
        ]
    },
    {
        question: "Can I specialize in a specific technology within Full Stack Development??",
        answer: [
            "Absolutely, Full Stack Developers can specialize in areas like front-end development, back-end development, or even specific frameworks and languages. Specialization can make you an expert in a particular domain."
        ]
    },
    {
        question: "What is the average salary of a Full Stack Developer?",
        answer: [
            "The average Full Stack Developer salary in India is INR 8.6 lakh per year. With experience and expertise, it can go beyond 15 lakh per year within 3-6 years."
        ]
    }
    , {
        question: "Do I need a degree to pursue a career in Full Stack Development?",
        answer: [
            "While a degree in computer science or a related field can be beneficial, it's not a strict requirement. Many successful Full Stack Developers have gained their skills through self-learning and practical experience."
        ]
    },
    {
        question: "Are there opportunities for remote work in Full Stack Development?",
        answer: [
            "Yes, Full Stack Development offers many remote work opportunities. With the rise of distributed teams and remote-friendly companies, you can often work from anywhere in the world."
        ]
    }
 
];


const WebDevelopment = () => {
    return (

        <div>
            <MentorShip data={WebDevelopmentData} hideCardContent={true} />
            <ContainerImage src={require('../../assets/images/mentor_program.jpeg')}
                alt="Mentorship Program" />
            <ProgramEligibility heading="Who Should Join Full Stack Development Course?"
                description={[
                    "Our Full Stack Developer Course offers an extensive curriculum that covers everything you need to become a proficient web developer. We'll equip you with the skills and knowledge to create dynamic, cutting-edge websites and web apps from start to finish.",
                    "As a learner of our online Full Stack Development Course, you'll unlock lucrative career opportunities. The demand for Full Stack developers is skyrocketing, and businesses worldwide are actively seeking professionals with the expertise to design and build interactive, user-friendly websites and applications.",
                    "At Fuerte Developers, we believe in learning by doing. That's why our course includes six months of live, hands-on training to ensure you're job-ready. You won't be alone on this journey. Our experienced mentors are there to guide you at every step, offering invaluable insights and personalized assistance.",
                    "You’ll become a master at HTML, CSS, HTML5, CSS3, Bootstrap, Tailwind CSS, ReactJS, JavaScript, MongoDB, NodeJS, and ExpressJS.",
                    "You'll work on over 10 real-world projects, building a robust portfolio to showcase your skills to potential employers. Upon completing the full stack development course, you'll receive a recognized certification from Fuerte Developers, validating your proficiency as a Full Stack Developer.",
                    "Whether you are a fresher or a working professional, we have designed an extensive curriculum to fit different learning goals. This training program will introduce you to the front-end, back-end, and middleware development technologies.",
                    "Hence, don't miss out on the opportunity to jumpstart your career in web development with the best online Full Stack Developer Course. Book your demo class now and take the first step towards a successful and prosperous future."
                ]}
            />
            <Highlights heading="Full Stack Developer Course Highlights" subheading="Explore what this online full stack development course is powered with." data={highlightsData} />
            <ProgramStep />
            <Module  {...WebDevelopmentCourse} />
            <Tools />
            <CareerAsistant />
            <Certificate />
            <FeeStructure/>
            <div className='web-mentor'>
                <h1>Meet Your Mentor</h1>
                <p>Take a closer look at Mentors who've been there and done that!</p>
                <Mentor />
            </div>
            <Country />
            <AlumniReview reviews={WebDevelopmentReviews}/>
            <FAQ heading="Full Stack Developer Course - FAQs" 
            description="Here’s everything you may ask." 
            faqs={faqsData} />

        </div>
    );
}

export default WebDevelopment;