import { useState } from "react";
import './Module.css';
import InquiryForm from "./InquiryForm";

const Module = ({ title, description, curriculumLink, courseInfo, milestones }) => {
    // State to track which module is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to toggle module content visibility
    const toggleModule = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='module-container'>
            <div className="curriculum">
                <div className="module_header">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {curriculumLink && (
                        <InquiryForm heading="Download Curriculum" buttonText="Download Curriculum" />
                    )}
                </div>

                <div className="course-info">
                    {courseInfo.map((info, index) => (
                        <div key={index} className="info-box">
                            <strong>{info.icon} {info.label}:</strong> {info.value}
                        </div>
                    ))}
                    <div className="placement-support">🚀 Placement Support</div>
                </div>

                <div className="modules">
                    {milestones.map((milestone, index) => (
                        <div 
                            key={index} 
                            className={`module ${expandedIndex === index ? "expanded" : ""}`}
                            onClick={() => toggleModule(index)}
                        >
                            <h3 className="module-title">
                                {milestone.title} - Duration: {milestone.duration}
                            </h3>
                            <p>{milestone.description}</p>

                            {/* Display content only when the module is expanded */}
                            {expandedIndex === index && (
                                <div className="topics-container">
                                    {milestone.topicGroups.map((group, i) => (
                                        <ul key={i} className="topics">
                                            <h4>{group.subtitle}</h4>
                                            {group.topics.map((topic, j) => (
                                                <li key={j}>{topic}</li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Module;
