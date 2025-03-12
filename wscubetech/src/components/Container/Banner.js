import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner_image">
            <div className="banner__layer_1">
                <img id="layer__img1" src={require('../../assets/images/mohit.jpeg')} alt="Banner Layer One" />
                <img id="layer__img2" src={require('../../assets/images/zeeshan.jpeg')} alt="Banner Layer One" />
                <img id="layer__img3" src={require('../../assets/images/abhishek.jpeg')} alt="Banner Layer One" />
            </div>
            <div className="banner__layer_1" id="banner__layer_2">
                <img id="layer__img4" src={require('../../assets/images/aprakash.jpg')} alt="Banner Layer One" />
                <img id="layer__img5" src={require('../../assets/images/mohit.jpeg')} alt="Banner Layer One" />
                <img id="layer__img6" src={require('../../assets/images/poojamam.jpeg')} alt="Banner Layer One" />
                <img id="layer__img7" src={require('../../assets/images/zeeshan.jpeg')} alt="Banner Layer One" />
            </div>
            <div className="banner__layer_1" id="banner__layer_3">
                <img id="layer__img8" src={require('../../assets/images/abhishek.jpeg')} alt="Banner Layer One" />
                <img id="layer__img9" src={require('../../assets/images/zeeshan.jpeg')} alt="Banner Layer One" />
            </div>
            <div class="label label-python">
                Python
            </div>
            <div class="label label-fullstack">
                Full Stack Development
            </div>
            <div class="label label-performance">
                Performance Marketing
            </div>
            <div class="label label-data">
                Data Analytics
            </div>

        </div>
    );
};

export default Banner;
