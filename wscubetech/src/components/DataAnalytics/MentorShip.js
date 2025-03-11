import React, { useState } from "react";
import "./MentorShip.css";
import Container from "../Container/Container";
import LogoCarousel from "./LogoCarousel";
import { FaPlayCircle } from "react-icons/fa";
import InquiryForm from "./InquiryForm";
import { Link } from "react-router-dom";

const MentorShip = ({ data, hideCardContent = false }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div>
            <Container>
                <div className="mentorship">
                    <div className="mentor_container">
                        {/* Mentorship Program Details */}
                        <div className="mentorship__programs">
                            <p id="mentor-icon">
                                <span>
                                    <img src={require("../../assets/images/orange-checked-icon.png")} alt="Checked Icon" />
                                </span>
                                {data.programType}
                            </p>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>
                            <hr />
                            <div className="package_data">
                                {data.stats.map((stat, index) => (
                                    <div key={index} className="sal_package">
                                        <h1>{stat.value}</h1>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <div className="advisor-data">
                                <InquiryForm heading="Talk to Program Advisor" buttonText="Talk to Program Advisor" />
                                <p>{data.enrolled} already upskilled!</p>
                            </div>
                        </div>

                        {/* Program Card */}
                        {!hideCardContent && (
                            <div className="card">
                                <div className="video-icon-container">
                                    <FaPlayCircle className="video-icon" onClick={() => setShowVideo(true)} />
                                </div>
                                <img src={data.image} alt="Program" />
                                <div className="card-content">
                                    <div className="badge">{data.cohort}</div>
                                    <div className="date">{data.startDate}</div>
                                    <div className="offer">{data.offer}</div>
                                    <div className="price-section">
                                        <p className="price-text">Total Program Fee:</p>
                                        <span className="strike">{data.originalPrice}</span>
                                        <span className="price">{data.discountedPrice}</span>
                                        <span className="discount">{data.discountPercent} OFF</span>
                                    </div>
                                    <InquiryForm heading="Apply Now" buttonText="Apply Now" />
                                    <p className="terms">
                                        {data.terms} <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-and-condition">Terms & Conditions</Link>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Video Modal */}
                        {showVideo && (
                            <div className="video-modal">
                                <div className="video-content">
                                    <span className="close-btn" onClick={() => setShowVideo(false)}>×</span>
                                    <video controls autoPlay>
                                        <source src={data.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* 
                    <p id="learners">Our learners work at top companies</p>
                    <LogoCarousel /> */}
                    <div className={data?.programType === "Career Preparation Program" ? "hide-logo" : ""}>
                        <p id="learners">Our learners work at top companies</p>
                        <LogoCarousel />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default MentorShip;
