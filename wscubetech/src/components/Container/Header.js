import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/images/fuerte.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCareer, setIsCareer] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isLoginSidebarOpen, setLoginSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
        setIsOpen(false);
        setIsCareer(false);
        setLoginSidebarOpen(false);
    };

    const toggleLoginSidebar = () => {
        setLoginSidebarOpen(!isLoginSidebarOpen);
        setSidebarOpen(false); // Close menu sidebar when opening login sidebar
        setIsOpen(false); // Close "Explore Courses" dropdown if open
        setIsCareer(false); // Close "Career School" dropdown if open
    };

    return (
        <div className='header'>
            <div className="header-left">
                <img src={logo} alt='Ws-Cube-Tech Logo' className="logo" />
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
                                <li>Data Analytics</li>
                                <li>Digital Marketing</li>
                                <li>Web Development</li>
                                <li>Cyber Security</li>
                                <li>App Development</li>
                                <li>Design</li>
                            </ul>
                        )}
                        {isCareer && (
                            <ul id="career" className="dropdown-menu">
                                <li>Jaipur</li>
                                <li>Jodhpur</li>
                                <li>Delhi</li>
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
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/services">Services</a>
                    <a href="/blog">Blog</a>
                    <a href="login" onClick={(e) => { e.preventDefault(); toggleLoginSidebar(); }}>Login</a>

                    <button onClick={toggleDropdown} className="sidebar-dropdown-button">
                        Explore Courses ⬇
                    </button>
                    {isOpen && (
                        <ul className="sidebar-dropdown-menu right-align">
                            <li>Data Analytics</li>
                            <li>Digital Marketing</li>
                            <li>Web Development</li>
                            <li>Cyber Security</li>
                            <li>App Development</li>
                            <li>Design</li>
                        </ul>
                    )}

                    <button onClick={toggleCareer} className="sidebar-dropdown-button">
                        Career School ⬇
                    </button>

                    {isCareer && (
                        <ul className="sidebar-dropdown-menu right-align">
                            <li>Jaipur</li>
                            <li>Jodhpur</li>
                            <li>Delhi</li>
                        </ul>
                    )}
                </div>
            )}
            {/* Right-side Login Sidebar */}
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
