import './ProgramStep.css';
import InquiryForm from './InquiryForm';

const stepsData = [
    {
        icon: "💡",
        title: "Learn",
        subtitle: "Live classes • Self-Paced",
        description: "Upskill yourself by gaining insights from leading professionals' vast experience."
    },
    {
        icon: "✍️",
        title: "Practice",
        description: "Sharpen your skills by learning through course assignments, live projects, and assessments."
    },
    {
        icon: "📄✔️",
        title: "Ask",
        description: "Resolve your queries from industry experts with dedicated one-on-one doubt-clearing sessions."
    },
    {
        icon: "🚀",
        title: "Build",
        description: "Craft a diverse portfolio and optimize LinkedIn to showcase your data analytics skills."
    }
];


const ProgramStep = () => {
    return (
        <div className='main-programstep'>
            <div className="programstep-container">
                <div className="left-section">
                    <h1>How does this program work?</h1>
                    <p>Your Roadmap to Become a Pro Data Analyst</p>
                    <InquiryForm heading="Talk to Program Advisor" buttonText="Talk to Program Advisor" />
                </div>
                <div className="steps">
                    {stepsData.map((step, index) => (
                        <div className="step" key={index}>
                            <span className="icon-step">{step.icon}</span>
                            <div className="program-text-content">
                                <h3>
                                    {step.title} 
                                    {step.subtitle && <span> {step.subtitle}</span>}
                                </h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgramStep;