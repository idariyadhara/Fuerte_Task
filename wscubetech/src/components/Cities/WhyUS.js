import './WhyUS.css';

const reasons = [
    { img: require('../../assets/images/live-class-icon.png'), text: 'Live Classes' },
    { img: require('../../assets/images/mentorship-icon.png'), text: 'Mentorship Sessions' },
    { img: require('../../assets/images/career-information-icon.png'), text: 'Career Guidance' },
    { img: require('../../assets/images/industry-learder-icon.png'), text: 'Elite Educators & Industry Leaders' },
    { img: require('../../assets/images/campus-certificate-icon.png'), text: 'Campus Certificates' },
    { img: require('../../assets/images/sholarship-icon.png'), text: 'Scholarships and Financial Assistance' }
];

const WhyUS = () => {
    return (
        <div className='whyus-container'>
            <h1>Why choose WsCubeTech Campus?</h1>
            <div className='campus-reason-data'>
                {reasons.map((reason, index) => (
                    <div className='reason-for-campus' key={index}>
                        <img src={reason.img} alt={reason.text} />
                        <p>{reason.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyUS;
