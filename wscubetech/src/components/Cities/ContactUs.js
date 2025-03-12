import './ContactUs.css';

const contactInfo = [
    {
        icon: "✉️",
        title: "Chat to us",
        description: "Our friendly team is here to help.",
        details: "contact@fuertedevelopers.com"
    },
    {
        icon: "📍",
        title: "Office",
        description: "Come say hello at our Rajkot office.",
        details: "405 - The Spire, 150 Feet Ring Rd, Rajkot, Gujarat 360007"
    },
    {
        icon: "📞",
        title: "Phone",
        description: "Mon-Sat from 10am to 7pm",
        details: "+91-097240 00697, +91-7903955297"
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9186623992027!2d70.7671785!3d22.3189157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9909e845a83%3A0x4863465519cad832!2sFuerte%20Developers!5e0!3m2!1sen!2sin!4v1741774173207!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            title="Rajkot-Location"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default ContactUs;
