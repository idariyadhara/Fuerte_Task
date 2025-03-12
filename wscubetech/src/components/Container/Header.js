import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/images/fuerte.png';
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCareer, setIsCareer] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLoginSidebarOpen, setLoginSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeDropdowns = () => {
        setIsOpen(false);
        setIsCareer(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsCareer(false);
    };

    const toggleCareer = () => {
        setIsCareer(!isCareer);
        setIsOpen(false);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        closeDropdowns();
        setLoginSidebarOpen(false);
    };

    const toggleLoginSidebar = () => {
        setLoginSidebarOpen(!isLoginSidebarOpen);
        setSidebarOpen(false);
        closeDropdowns();
    };

    return (
        <div className={`header ${isSticky ? "sticky" : ""}`}>
            <div className="header-left">
                <img src={logo} alt='Logo' className="logo" />
                {!isMobile && (
                    <div className='dropdown'>
                        <button onClick={toggleDropdown} className="dropdown-button">
                            Explore Courses ⬇
                        </button>
                        <button onClick={toggleCareer} className="dropdown-button">
                            Career School ⬇
                        </button>

                        {isOpen && (
                            <ul className="dropdown-menu">
                                <Link to="/data-analytics" onClick={closeDropdowns}>
                                    <li>
                                        Data Analytics
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                                <Link to="/digital-marketing" onClick={closeDropdowns}>
                                    <li>
                                        Digital Marketing
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                                <Link to="/web-development" onClick={closeDropdowns}>
                                    <li>
                                        Web Development
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                                <Link to="/cyber-security" onClick={closeDropdowns}>
                                    <li>
                                        Cyber Security
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                                <Link to="/app-development" onClick={closeDropdowns}>
                                    <li>
                                        App Development
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                            </ul>

                        )}
                        {isCareer && (
                            <ul className="dropdown-menu" id="career-dropdown">
                                <Link to="/gurgaon" onClick={closeDropdowns}>
                                    <li>
                                    Gurgaon
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                                <Link to="/rajkot" onClick={closeDropdowns}>
                                    <li>
                                        Rajkot
                                        <LiaArrowRightSolid className="arrow-icon" />
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <div className='login'>
                <button onClick={toggleLoginSidebar}>Login</button>
            </div>

            {isMobile && (
                <button className="menu-icon" onClick={toggleSidebar}>
                    {isSidebarOpen ? <FiX /> : <FiMenu />}
                </button>
            )}

            {isMobile && (
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                    <Link to="/about" onClick={toggleSidebar}>About Us</Link>
                    <Link to="/contact" onClick={toggleSidebar}>Contact Us</Link>
                    <Link to="/services" onClick={toggleSidebar}>Services</Link>
                    <Link to="/blog" onClick={toggleSidebar}>Blog</Link>
                    <Link to="/login" onClick={(e) => { e.preventDefault(); toggleLoginSidebar(); }}>Login</Link>

                    <button onClick={toggleDropdown} className="sidebar-dropdown-button">
                        Explore Courses ⬇
                    </button>
                    {isOpen && (
                        <ul className="sidebar-dropdown-menu right-align">
                            <Link to="/data-analytics" onClick={toggleSidebar}>
                                <li>Data Analytics</li>
                            </Link>
                            <Link to="/digital-marketing" onClick={toggleSidebar}>
                                <li>Digital Marketing</li>
                            </Link>
                            <Link to="/web-development" onClick={toggleSidebar}>
                                <li>Web Development</li>
                            </Link>
                            <Link to="/cyber-security" onClick={toggleSidebar}>
                                <li>Cyber Security</li>
                            </Link>
                            <Link to="/app-development" onClick={toggleSidebar}>
                                <li>App Development</li>
                            </Link>
                        </ul>
                    )}

                    <button onClick={toggleCareer} className="sidebar-dropdown-button">
                        Career School ⬇
                    </button>
                    {isCareer && (
                        <ul className="sidebar-dropdown-menu right-align" id="career-sidebar">
                            <Link to="/gurgaon" onClick={toggleSidebar}>
                                <li>Gurgaon</li>
                            </Link>
                            <Link to="/rajkot" onClick={toggleSidebar}>
                                <li>Rajkot</li>
                            </Link>
                        </ul>
                    )}
                </div>
            )}

            <div className={`login-sidebar ${isLoginSidebarOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={toggleLoginSidebar}>×</button>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button className="login-submit">Login</button>
                <p>Don't have an account?<a href='#login'>Create an account</a></p>
            </div>
        </div>
    );
};

export default Header;
