import './ContactUs.css';

const contactInfo = [
    {
        icon: "✉️",
        title: "Chat to us",
        description: "Our friendly team is here to help.",
        details: "jaipur@wscubetech.com"
    },
    {
        icon: "📍",
        title: "Office",
        description: "Come say hello at our Jaipur office.",
        details: "1st Floor, Plot no. 21, Manav Ashram Colony, Vasundhara Colony, Gopal Pura Mode, Jaipur - Rajasthan - India (302018)"
    },
    {
        icon: "📞",
        title: "Phone",
        description: "Mon-Sat from 10am to 7pm",
        details: "+91-9257155617, +91-8000455617"
    }
];

const ContactUs = () => {
    return (
        <div className='contactUs-main-Container'>
            <div className="contactUs-container">
                <div className="contactUs-header">Get in touch</div>
                <div className="contactUs-sub-header">
                    We’d love to hear from you. Our friendly team is always here to chat.
                </div>

                <div className="contactUs-content">
                    {/* Contact Info Section */}
                    <div className="contactUs-contact-info">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contactUs-info-box">
                                <h3><span className="contactUs-icon">{item.icon}</span> {item.title}</h3>
                                <p>{item.description}</p>
                                <p><strong>{item.details}</strong></p>
                            </div>
                        ))}
                    </div>

                    {/* Map Section */}
                    <div className="contactUs-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5242190203085!2d75.803898!3d26.893648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzM2LjMiTiA3NcKwNDgnMTMuOCJF!5e0!3m2!1sen!2sin!4v1615468720564!5m2!1sen!2sin" 
                            allowFullScreen=""
                            loading="lazy" title='Contact-Us'>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
