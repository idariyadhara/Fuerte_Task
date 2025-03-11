import './Certificate.css';

const Certificate = () => {
    return (
        <div className='ce-main-container'>
            <div className="certificate-container">
                <div className="certificate-ce">
                    <img src={require('../../assets/images/certificate.jpeg')} alt="Certificate" />
                </div>
                <div className="certificate-content">
                    <h1>Be in the spotlight by getting certified!</h1>
                    <p>A detailed overview of the course, including key topics, objectives, and module sequence.</p>
                    <div className="highlight-box">
                        <div className="highlight-item">
                            <h3>Industry-Recognized Certificate</h3>
                            <p>Earn a certificate valued by top companies.</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Stand Out in Job Market</h3>
                            <p>Fortify Your Profile to Increase Credibility</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Your Passport to Career Growth</h3>
                            <p>Access Well-Paying Data Analyst positions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;