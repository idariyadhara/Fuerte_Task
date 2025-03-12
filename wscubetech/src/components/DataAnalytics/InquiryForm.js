import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './InquiryForm.css';

const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' }
];

const InquiryForm = ({ heading, buttonText }) => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default: India
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add("no-scroll");
    }
    // const closeModal = () => {
    //     setIsOpen(false);
    //     document.body.classList.remove("no-scroll"); // Re-enable scrolling
    // };
    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove("no-scroll"); // Re-enable scrolling
    };

    useEffect(() => {
        document.body.classList.remove("no-scroll"); // Ensure scroll is enabled on route change
    }, [location.pathname]);


    return (
        <>
            {/* Reusable Button */}
            <button className="open-modal-btn" onClick={openModal}>
                {buttonText || "Apply Now"}
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        {/* Left Side */}
                        <div className="modal-left">
                            <img src={require('../../assets/images/login-hero.png')} alt="Rocket" />
                            <p>Let's enable fun learning experiences, together</p>
                        </div>

                        {/* Right Side */}
                        <div className="modal-right">
                            <span className="close-btn" onClick={closeModal}>&times;</span>
                            <h2>{heading || "Apply Now"}</h2>

                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />

                            <label>Mobile</label>
                            <div className='custom-phone-input'>
                                <div className='custom-country-dropdown'>
                                    <select
                                        value={selectedCountry.code}
                                        onChange={(e) => {
                                            const selected = countries.find(country => country.code === e.target.value);
                                            setSelectedCountry(selected);
                                        }}
                                    >
                                        {countries.map((country, index) => (
                                            <option key={index} value={country.code}>
                                                {country.flag} {country.code}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Mobile Number Input */}
                                <input
                                    type='tel'
                                    className='custom-phone-number'
                                    placeholder='Enter mobile number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    maxLength={15}
                                />
                            </div>


                            <label>Occupation</label>
                            <select>
                                <option>Select Occupation</option>
                                <option>Student</option>
                                <option>Employed</option>
                                <option>Freelancer</option>
                            </select>

                            <label>Highest Education</label>
                            <select>
                                <option>Select Highest Education</option>
                                <option>High School</option>
                                <option>Bachelor’s Degree</option>
                                <option>Master’s Degree</option>
                            </select>

                            <div className="checkbox-group">
                                <input type="checkbox" id="privacy" />
                                <label htmlFor="privacy">
                                    I have read and agree to the<Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-and-condition">Terms & Conditions</Link>.
                                </label>
                            </div>

                            <div className="checkbox-group">
                                <input type="checkbox" id="updates" />
                                <label htmlFor="updates">Send me updates on WhatsApp</label>
                            </div>

                            <button className="continue-btn">Continue</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InquiryForm;
