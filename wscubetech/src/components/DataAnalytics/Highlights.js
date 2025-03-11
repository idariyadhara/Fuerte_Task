import React, { useRef } from "react";
import "./Highlights.css";

const Highlights = ({ heading, subheading,data }) => {
    const sectionRefs = useRef({}); // Store references for scrolling

    // Function to scroll to the clicked section
    const handleScrollTo = (id) => {
        if (sectionRefs.current[id]) {
            sectionRefs.current[id].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="highlights">
            <div className="program_highlight">
                <h1>{heading}</h1>
                <p>{subheading}</p>
            </div>

            <div className="highlight_details">
                {/* Buttons */}
                <div className="highlights_buttons">
                    {data.map((item) => (
                        <button key={item.id} onClick={() => handleScrollTo(item.id)}>
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="content">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="hightlight_card"
                            ref={(el) => (sectionRefs.current[item.id] = el)} // Assign ref
                        >
                            <div className="hightlight-card-content">
                                <div className="card-title">{item.title}</div>
                                <div className="card-text">{item.text}</div>
                                {item.points.map((point, index) => (
                                    <div key={index} className="bullet-point">{point}</div>
                                ))}
                            </div>
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Highlights;
