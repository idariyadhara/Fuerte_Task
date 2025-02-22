import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VideoPlayer.css";

const VideoPlayer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const videoSrc = location.state?.videoSrc;

    if (!videoSrc) {
        return <p>No video selected!</p>;
    }
    return (
        <div className="video-player-container">
            <button className="close-btn" onClick={() => navigate(-1)}>X Close</button>
            <video className="full-video" src={videoSrc} controls autoPlay></video>
        </div>
    );
};

export default VideoPlayer;
