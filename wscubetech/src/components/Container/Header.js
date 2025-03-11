import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/images/fuerte.png';
import { Link } from "react-router-dom";

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
                                <li><Link to="/data-analytics" onClick={closeDropdowns}>Data Analytics</Link></li>
                                <li><Link to="/digital-marketing" onClick={closeDropdowns}>Digital Marketing</Link></li>
                                <li><Link to="/web-development" onClick={closeDropdowns}>Web Development</Link></li>
                                <li><Link to="/cyber-security" onClick={closeDropdowns}>Cyber Security</Link></li>
                                <li><Link to="/app-development" onClick={closeDropdowns}>App Development</Link></li>
                            </ul>
                        )}
                        {isCareer && (
                            <ul className="dropdown-menu">
                                <li><Link to="/jaipur" onClick={closeDropdowns}>Jaipur</Link></li>
                                <li><Link to="/jodhpur" onClick={closeDropdowns}>Jodhpur</Link></li>
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
                            <li><Link to="/data-analytics" onClick={toggleSidebar}>Data Analytics</Link></li>
                            <li><Link to="/digital-marketing" onClick={toggleSidebar}>Digital Marketing</Link></li>
                            <li><Link to="/web-development" onClick={toggleSidebar}>Web Development</Link></li>
                            <li><Link to="/cyber-security" onClick={toggleSidebar}>Cyber Security</Link></li>
                            <li><Link to="/app-development" onClick={toggleSidebar}>App Development</Link></li>
                        </ul>
                    )}

                    <button onClick={toggleCareer} className="sidebar-dropdown-button">
                        Career School ⬇
                    </button>
                    {isCareer && (
                        <ul className="sidebar-dropdown-menu right-align">
                            <li><Link to="/jaipur" onClick={toggleSidebar}>Jaipur</Link></li>
                            <li><Link to="/jodhpur" onClick={toggleSidebar}>Jodhpur</Link></li>
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
