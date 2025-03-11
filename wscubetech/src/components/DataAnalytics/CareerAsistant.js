import './CareerAsistant.css';

const careerToolsData = [
    { id: 1, imgSrc: require('../../assets/images/resume.png'), title: "Resume Revamp", description: "Upgrade and polish resumes to make them stand out to potential employers." },
    { id: 2, imgSrc: require('../../assets/images/linkdinprofile.png'), title: "LinkedIn Optimization", description: "Optimize LinkedIn profiles to improve visibility and networking opportunities." },
    { id: 3, imgSrc: require('../../assets/images/git-repo.png'), title: "GitHub Mastery", description: "Enhance GitHub profiles to showcase your projects and collaboration skills." },
    { id: 4, imgSrc: require('../../assets/images/portfolio.png'), title: "Portfolio Building", description: "Develop & refine a professional portfolio to demonstrate skills & projects." },
    { id: 5, imgSrc: require('../../assets/images/internship.png'), title: "Pitch Perfect", description: "Improve verbal communication and presentation skills." },
    { id: 6, imgSrc: require('../../assets/images/mock-interviews.png'), title: "Mock Interviews", description: "FPrepare for job interviews through our 1:1 mock interviews and feedback." },
    { id: 7, imgSrc: require('../../assets/images/job-ready.png'), title: "Job Ready", description: "Climb the ladder that leads you to your dream job." },
];


const CareerAsistant = () => {
    return (
        <div className='career-ast-container'>
            <div className='career-ast'>
                <h1>End-to-End Career Assistance</h1>
                <p>Comprehensive Career Support to Help You Shine</p>
            </div>
            <div className="career-tools first-row">
                {careerToolsData.slice(0, 3).map((tool) => (
                    <div className="career-tools-data" key={tool.id}>
                        <img src={tool.imgSrc} alt={tool.title} />
                        <h3>{tool.title}</h3>
                        <p>{tool.description}</p>
                    </div>
                ))}
            </div>

            {/* Rest of the items (4 per row) */}
            <div className="career-tools second-row">
                {careerToolsData.slice(3).map((tool) => (
                    <div className="career-tools-data" key={tool.id}>
                        <img src={tool.imgSrc} alt={tool.title} />
                        <h3>{tool.title}</h3>
                        <p>{tool.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerAsistant;