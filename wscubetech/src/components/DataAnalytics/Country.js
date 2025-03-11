import React, { useState } from 'react';
import './Country.css';
import Container from '../Container/Container';
import InquiryForm from './InquiryForm';

const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'USA', flag: '🇺🇸' },
    { code: '+44', name: 'UK', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' }
];

const Country = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default: India
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Container>
            <div className='country-container'>
                <div className='country-data'>
                    <h1>Still Confused? Want to know more?</h1>

                    <div className='country-form'>
                        {/* Combined Dropdown and Input Field */}
                        <div className='phone-input-wrapper'>
                            <div className='country-dropdown'>
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
                                placeholder='Enter your mobile number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                maxLength={15}
                            />
                        </div>

                        {/* Call to Action Button */}
                        <InquiryForm heading="Talk to Program Advisor" buttonText="Talk to Program Advisor" />
                    </div>

                    <p>Secure your spot quickly — seats are filling fast! Don’t miss out — enroll now and take the first step towards transforming your career!</p>
                </div>

                <div className='country-right-data'>
                    <p>Fuerte Developers GRADUATES HAVE BEEN HIRED BY</p>
                    <img src={require('../../assets/images/top-company-hiring.png')} alt='Company Logos' />
                </div>
            </div>
        </Container>
    );
}

export default Country;
