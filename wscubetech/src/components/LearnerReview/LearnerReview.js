import './LearnerReview.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import playIcon from "../../assets/images/videos-review-icon.png";

const videos = [
    { id: 1, src: "/video/video1.mp4" },
    { id: 2, src: "/video/video2.mp4" },
    { id: 3, src: "/video/video3.mp4" },
    { id: 4, src: "/video/video4.mp4" },
    { id: 5, src: "/video/video5.mp4" },
    { id: 6, src: "/video/video6.mp4" }
];

const LearnerReview = () => {
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    const handlePlay = (videoSrc) => {
        navigate("/video-player", { state: { videoSrc } }); // Navigate to player with video source
    };

    return (
        <div className='Learner-data'>
            <h1>Hear it From Our Learners <strong>Testimonials</strong></h1>
            <p>Fuerte Developers Alumni Stories, You can’t afford to miss.</p>
            <div className='video-review'>
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`video-container ${hovered === index ? "expanded" : ""}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Video Thumbnail */}
                        <video className="video" src={video.src} muted></video>

                        {/* Play Button (Navigates to New Screen) */}
                        <img
                            src={playIcon}
                            alt="Play"
                            className="play-button"
                            onClick={() => handlePlay(video.src)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnerReview;
