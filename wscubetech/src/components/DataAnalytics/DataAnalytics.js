import React from 'react';
import MentorShip from './MentorShip';
import Mentors from './Mentors';
import Highlights from './Highlights';
import ProgramEligibility from './ProgramEligibility';
import Module from './Module';
import Tools from './Tools';
import CareerAsistant from './CareerAsistant';
import Certificate from './Certificate';
import ProgramStep from './ProgramStep';
import Country from './Country';
import AlumniReview from './AlumniReview';

const DataAnalyticsMentorData = {
    programType: "Job Ready Program",
    title: "Data Analytics Mentorship Program",
    description: "Join this 16-week, job-ready program to master Data Analytics from scratch with Top Data Analysts from Microsoft, KPMG, Amazon, and Rapido.",
    stats: [
        { value: "₹11 LPA", label: "Average CTC" },
        { value: "34,000+", label: "Jobs on LinkedIn Alone" },
        { value: "7+", label: "Industry Mentors" },
    ],
    enrolled: "3,785",
    cohort: "Cohort 5 Starting",
    startDate: "21st Mar, 25",
    offer: "Early Bird Offer Live - 40% off for First 50 Seats",
    originalPrice: "₹89,000/-",
    discountedPrice: "₹53,400/-",
    discountPercent: "40%",
    terms: "By continuing, you agree to Fuerte Developer’s Terms. Payment via custom links only.",
    image: require("../../assets/images/mentor_program.jpeg"),
    videoUrl: "/video/data-analytics-course.mp4"
};

const highlightsData = [
    {
        id: "master-voices",
        title: "Master Voices",
        text: "Delve into the exciting realm of Data Analytics with top Data Analysts from leading MNCs...",
        points: [
            "Learn directly from experts with real-world experiences.",
            "Hands-on activities and lively discussions."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "jam-sesh",
        title: "Jam Sesh",
        text: "Drop into jam sessions where creativity explodes and learning turns...",
        points: [
            "Collaborative sessions for practical data applications.",
            "Work on real datasets with peers."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "capstone-showdown",
        title: "Ultimate Capstone Showdown",
        text: "Test your data analytics skills in our Mega Capstone Challenge...",
        points: [
            "Solve real-world industry problems.",
            "Achieve job readiness certification."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    },
    {
        id: "data-capsules",
        title: "On-the-Go Data Capsules",
        text: "Perfect for the busy learner, our data capsules enhance your skills anywhere...",
        points: [
            "Flexible, short video tutorials.",
            "Actionable insights for real-world projects."
        ],
        image: require("../../assets/images/master_voice.jpeg")
    }
];

const dataAnalyticsCourse = {
    title: "What Will You Learn",
    description: "A detailed overview of the course, including key topics, objectives, and module sequence.",
    curriculumLink: true,
    courseInfo: [
        { icon: "📅", label: "Duration", value: "16 Weeks" },
        { icon: "💻", label: "Mode", value: "Live Online" },
        { icon: "🎥", label: "Live Sessions", value: "106+ hrs" },
        { icon: "📊", label: "Projects", value: "6" },
    ],
    milestones: [
        {
            title: "Get started with Excel 📊",
            duration: "3 weeks",
            description: "Kickstart your Data Analytics journey with Excel! From pivot tables to essential functions and from charts to dashboards learn every essential to become a Data Analyst. Excel isn't just a tool, it's your new superpower!",
            topicGroups: [
                {
                    subtitle: "Overview of Excel",
                    topics: ["Introduction to Data Analytics", "Basic Features in Excel","Formatting in Excel","Dealing with Raw Data","Functions in Excel"]
                },
                {
                    subtitle: "Deep Dive with Excel - II",
                    topics: ["Data Connectors in Excel", "Cleaning in Power Query Editor","Adding Conditional Columns using Power Query Editor","Data Modelling and its Importance","Cardinality and Filter Direction in Power Pivot"]
                },
                {
                    subtitle: "Master Advanced Excel - III",
                    topics: ["Pivot Tables in Excel", "Charts in Excel","Slicers in Excel","Measures in Excel","Creating a Dashboard in Excel"]
                }
            ]
        },
        {
            title: "Programming with SQL 🖥️",
            duration: "3 weeks",
            description: "Want to retrieve, clean, manipulate and analyse the data?? Do it efficiently by using SQL queries!! This milestone covers everything from basic queries to complex joins, empowering you to extract valuable insights from large datasets with ease.",
            topicGroups: [
                {
                    subtitle: "Welcome to MySQL",
                    topics: ["Introduction to MySQL", "Basic MySQL Syntax","Clauses in MySQL","Operators in MySQL","Dealing With Null Values in MySQL"]
                },
                {
                    subtitle: "Advanced SQL Queries and Functions in MySQL",
                    topics: ["Functions in MySQL","Case Operator in MySQL", "Group By in MySQL","Having Clause in MySQL","Joins in MySQL"]
                },
                {
                    subtitle: "Advanced SQL Concepts and Techniques in MySQL",
                    topics: ["Subqueries in MySQL","Union Intersect Except in MySQL","Stored Procedures in MySQL","Common Table Expressions(CTE)","Window Functions in MySQL"]
                }
            ]
        },
        {
            title: "Data Visualization Power BI 🖥️",
            duration: "3 weeks",
            description: "Empower your data journey with Python! Learn Pandas, NumPy, and Matplotlib to wield the tools of data magic. Uncover insights, visualize trends, and conquer complex datasets with flair!",
            topicGroups: [
                {
                    subtitle: "Data Visualisation with Power BI",
                    topics: ["Introduction to Power BI", "Data Connectors","Power Query Editor and Tools Power Query Editor","Append Queries and Merge Queries","Pivoting and Unpivoting of data"]
                },
                {
                    subtitle: "Advanced-Data Modeling and DAX in Power BI",
                    topics: ["Data Modelling and Cardinality","Cross Filter Direction","Measures vs Calculated Columns","Functions in DAX","Cumulative Sales and Moving Average Using DAX"]
                },
                {
                    subtitle: "Visualizations and Dashboard Creation in Power BI",
                    topics: ["ChatGPT for Measures","Column Charts and Slicers","Matrix vs Tables","Cards, KPI and Gauge Chart","Formatting a Dashboard"]
                }
            ]
        },
        {
            title: "Python Liabraries 🖥️",
            duration: "4 weeks",
            description: "Master Python for Data Analytics! From data manipulation with Pandas to visualization with Matplotlib & Seaborn, and numerical computing with NumPy, this milestone will equip you with essential coding skills to alyze, transform, and visualize data efficiently.",
            topicGroups: [
                {
                    subtitle: "Python Basics",
                    topics: ["Introduction to Python for Data Analytics","Datatypes and Variables","Operators in Python","Control Flow in Python","Data Structures in Python"]
                },
                {
                    subtitle: "Python Advance",
                    topics: ["Functions in Python","In built Modules","Pickle Library","Introduction to Numpy","Statistical Functions in Array"]
                },
                {
                    subtitle: "Python Libraries - Pandas, Matplotlib and Seaborn",
                    topics: ["Introduction to Pandas","Cleaning Data with Pandas","Merge, concatenate and join Pandas","Introduction to Matplotlib","Charts in Matplotlib"]
                },
                {
                    subtitle: "Python Libraries - Web scraping and Text Analysis",
                    topics: ["What is WebScraping","BeautifulSoup and Requests Library in Pythonn","Extracting Data from Tables","Extracting Data from Multi Page Websites","Text Analysis using Python"]
                }
            ]
        },
        {
            title: "Stats and Machine Learning 🖥️",
            duration: "3 weeks",
            description: "Build a strong foundation in Statistics & Machine Learning! Learn probability, hypothesis testing, and inferential statistics, then advance to regression, classification, clustering,and AI-driven insights. Gain hands on experience applying ML algorithms to real world datasets and making data driven decisions!",
            topicGroups: [
                {
                    subtitle: "Maths & Applied Statistics",
                    topics: ["Introduction to Statistics","Descriptive Statistics","Hypothesis Testing","AB Testing","Fundamentals of Probability"]
                },
                {
                    subtitle: "Machine Learning - I",
                    topics: ["What is ML?","Applications of Machine Learning","Linear Regression","Decision Trees","Random Forests and Ensemble Methods"]
                },
                {
                    subtitle: "Machine Learning - II & AI",
                    topics: ["Clustering algorithms","K means clustering","Dimensionality Reduction","Cross validation","K-fold validation","Leave one out validation","Model selection","Evaluation metrics and ROC curves","AI for data analytics"]
                }
            ]
        }
    ]
};

const dataAnalyticsReviews = [
    {
        text: "The online data analytics courses were well-organised and engaging. I would highly recommend it to anyone looking to gain practical skills in data analysis.",
        name: "Tanvi L."
    },
    {
        text: "I loved the interactive projects in this course. They helped me apply what I learned and made the experience enjoyable.",
        name: "Rahul S."
    },
    {
        text: "The mentorship and hands-on projects were incredibly useful. I now feel confident in my data analysis skills.",
        name: "Priya M."
    },
    {
        text: "This course gave me a solid foundation in data analytics. The instructors were knowledgeable and supportive.",
        name: "Amit K."
    },
    {
        text: "A great learning experience with real-world projects that made concepts clear and practical.",
        name: "Sneha D."
    },
    {
        text: "The structured learning path made it easy to follow. I feel ready to apply these skills professionally.",
        name: "Vikram P."
    }
];

const DataAnalytics = () => {
    return (
        <div>
            <MentorShip data={DataAnalyticsMentorData}/>
            <Mentors/>
            <Highlights heading="Program Highlights" subheading="Explore what this mentorship program is powered with." data={highlightsData} />
            <ProgramEligibility heading="Who Can Join This Bootcamp?" 
            description="Our programs are custom-tailored for Gen-Z career aspirants. The programs aim to equip the learners with industry-ready, hands-on skills and facilitate a confident career kick-off. Focusing on practical learning and real-world application, our programs are designed to transform individuals into skilled professionals ready to tackle industry challenges."/>
            <Module  {...dataAnalyticsCourse}/>
            <Tools/>
            <CareerAsistant/>
            <Certificate/>
            <ProgramStep/>
            <Country/>
            <AlumniReview reviews={dataAnalyticsReviews}/>
        </div>
    );
}

export default DataAnalytics;