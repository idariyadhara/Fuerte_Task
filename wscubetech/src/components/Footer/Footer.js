import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-container">
                <div class="footer-logo-container">
                    <img src={require('../../assets/images/fuerte.png')} alt="Bling Jewellery" class="footer-logo" />
                    <p>Elevate Your Learning Journey with Cutting-Edge Education Technology.</p>
                    {/* Social Media Icons */}
                    <div className="social-media-links">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#techblog">Fuerte Tech Blog</a></li>
                        <li><a href="#courses">Self Placed Courses</a></li>
                        <li><a href="#events">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Our Programs</h4>
                    <ul>
                        <li><a href="#data-analysis">Data Analysis</a></li>
                        <li><a href="#digital-marketing">Digital Marketing</a></li>
                        <li><a href="#web-development">Web Development</a></li>
                        <li><a href="#cyber-security">Cyber Security</a></li>
                        <li><a href="#app-development">App Development</a></li>
                        <li><a href="#design">Design</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Refund policy</p>
                    <p>FAQ's</p>
                </div>
            </div>
            <div className='courses-data'>
                <hr />
                <div className='digital-marketing'>
                    <h4>Digital Marketing Courses</h4>
                    <p>Digital Marketing Course |
                        SEO Course |
                        Social Media Marketing Course |
                        Content Writing Course |
                        YouTube Course |
                        Instagram Marketing Course |
                        Google Ads Course |
                        Copywriting Course |
                        Performance Marketing Course</p>
                </div><hr />
                <div className='web-development'>
                    <h4>Web Development Courses</h4>
                    <p>Full Stack Developer Course |
                        WordPress Course |
                        MERN Stack Course |
                        Laravel Course |
                        Web Development Course |
                        HTML Course |
                        ReactJS Course |
                        Javascript Course |
                        PHP Course |
                        NodeJS Course |
                        Front-End Development Course |
                        Web Designing Course |
                        CSS Course</p>
                </div><hr />
                <div className='digital-marketing'>
                    <h4>Digital Marketing Courses</h4>
                    <p>Digital Marketing Course |
                        SEO Course |
                        Social Media Marketing Course |
                        Content Writing Course |
                        YouTube Course |
                        Instagram Marketing Course |
                        Google Ads Course |
                        Copywriting Course |
                        Performance Marketing Course</p>
                </div><hr />
                <div className='professional-courses'>
                    <h4>More Professional Courses</h4>
                    <p>Cyber Security Course |
                        Tableau Course |
                        Android App Development Course |
                        Mobile App Development Course |
                        Power BI Course</p>
                </div><hr />
                <div className='free-course'>
                    <h4>Free Courses</h4>
                    <p>Semrush Course |
                        Google Tag Manager Course |
                        Blogging Course |
                        Photoshop Course |
                        Video Editing Course |
                        AngularJS Course |
                        Shopify Course |
                        Django Course |
                        Email Marketing Course |
                        Affiliate Marketing Course
                    </p>
                </div><hr />
                <div className='interview-questions'>
                    <h4>Interview Questions</h4>
                    <p>HTML Interview Questions |
                        CSS Interview Questions |
                        PHP Interview Questions |
                        JavaScript Interview Questions |
                        Flutter Interview Questions |
                        Data Structure Interview Questions |
                        Java Interview Questions |
                        MySQL Interview Questions |
                        Python Interview Questions |
                        DBMS Interview Questions |
                        Power BI Interview Questions |
                        Angular Interview Questions |
                        ReactJS Interview Questions |
                        C Interview Questions |
                        Django Interview Questions |
                        Email Marketing Interview Questions |
                        Content Writing Interview Questions |
                        NodeJS Interview Questions |
                        SEO Interview Questions |
                        OOPS Interview Questions |
                        SQL Interview Questions |
                        Digital Marketing Interview Questions</p>
                </div><hr />
                <div className='career-resource-data'>
                    <h4>Popular Career Resources</h4>
                    <p>Professional Courses After 12th |
                        Courses After Graduation |
                        How to Become SEO Freelancer? |
                        High-Income Skills |
                        Digital Marketing Books |
                        Become Google Ads Expert |
                        Build a Career in Digital Marketing |
                        SEO Career Path |
                        Make Money Online |
                        Become Data Analyst |
                        Become a Flutter Developer |
                        Best Programming Languages to Learn |
                        Become Ethical Hacker |
                        Python Developer Salary |
                        Full Stack Developer Salary |
                        Data Analyst Salary|
                        Free Digital Marketing Projects
                    </p>
                </div><hr />
            </div>
            <div class="footer-bottom">
                <p>&copy; Copyright © 2025, All Right Reserved By Fuerte Developers</p>
            </div>
        </div>
    );
}

export default Footer;