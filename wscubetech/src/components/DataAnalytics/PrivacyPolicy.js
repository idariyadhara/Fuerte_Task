import './PrivacyPolicy.css';
import FAQ from '../WebDevelopment/FAQ';

const faqsData = [
    {
        question: "1. WHAT INFORMATION DO WE COLLECT?",
        answer: [
            "Personal information you disclose to us",
            "We collect personal information that you provide to us.We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.",
            "The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:", "names", "phone numbers", "email addresses", "job titles", "contact preferences", "billing addresses", "usernames", "passwords", "Payment Data", "We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Razorpay. You may find their privacy notice link(s) here: https://razorpay.com/privacy/.", "Information automatically collected", "Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.Like many businesses, we also collect information through cookies and similar technologies.", "Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings).", "Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.", "Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services."]
    },
    {
        question: "2.HOW DO WE PROCESS YOUR INFORMATION",
        answer: [
            "We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.",
            "To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.",
            "To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.",
            "To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.",
            "To fulfil and manage your orders. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services.",
            "To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.",
            "To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see 'WHAT ARE YOUR PRIVACY RIGHTS?' below.",
            "To evaluate and improve our Services, products, marketing, and your experience. We may process your information when we believe it is necessary to identify usage trends, determine the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.",
            "To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights."
        ]
    },
    {
        question: "3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
        answer: [
            "We may share information in specific situations described in this section and/or with the following third parties.",
            "We may need to share your personal information in the following situations:",
            "Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
            "Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions."
        ]
    },
    {
        question: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
        answer: [
            "We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.",
        ]
    },
    {
        question: "5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
        answer: [
            "If you choose to register or log in to our services using a social media account, we may have access to certain information about you.",
            "Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.",
            "We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.",
        ]
    },
    {
        question: "6. HOW LONG DO WE KEEP YOUR INFORMATION?",
        answer: [
            "We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.",

            "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than six (6) months past the termination of the user's account.",

            "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."
        ]
    },
    {
        question: "7. HOW DO WE KEEP YOUR INFORMATION SAFE?",
        answer: [
            "We aim to protect your personal information through a system of organisational and technical security measures. We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process.",

            "However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment."
        ]
    },
    {
        question: "8. WHAT ARE YOUR PRIVACY RIGHTS?",
        answer: [
            "You may review, change, or terminate your account at any time. If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html",

            "If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.",

            "Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent, depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details.",

            "However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.",

            "Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided.",

            "You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.",

            "Account Information:If you would at any time like to review or change the information in your account or terminate your account, you can:",

            "Contact us using the contact information provided:Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.",

            "Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. If you have questions or comments about your privacy rights, you may email us at info@wscubetech.com."
        ]
    },
    {
        question: "9. CONTROLS FOR DO-NOT-TRACK FEATURES",
        answer: [
            "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.",

            "At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice."
        ]
    },
    {
        question: "10. HOW CAN YOU CONTACT US REGARDING PRIVACY POLICY?",
        answer: [
            "If you have questions or comments about this notice, you may email us at info@wscubetech.com or by post to:",

            "WsCube Tech Pvt. Ltd. 1st Floor, Laxmi Tower,Bhaskar Circle,Jodhpur, Rajasthan 342001,India"
        ]
    },
    {
        question: "11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
        answer: [
            "Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: https://www.wscubetech.com/contact."
        ]
    }
];

const PrivacyPolicy = () => {
    return (
        <div className='terms-container'>
            <div className='terms-data'>
                <h1>WsCube Tech Privacy Policy</h1>
                <p>Last Updated: January 2024</p>
            </div>
            <div className='our-policy'>
                <p>This privacy notice for WsCube Tech Pvt. Ltd. ('Company', 'we', 'us', or 'our',), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:</p>
                <ul>
                    <li>Visit our website at www.wscubetech.com or any website of ours that links to this privacy notice </li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@wscubetech.com.</p>
                <h2>SUMMARY OF KEY POINTS</h2>
                <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>
                <h2>What personal information do we process?</h2>
                <p>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with WsCube Tech Pvt. Ltd. and the Services, the choices you make, and the products and features you use. Click here to learn more.</p>
                <h2>Do we process any sensitive personal information?</h2>
                <p>We do not process sensitive personal information.</p>
                <h2>Do we receive any information from third parties?</h2>
                <p>We do not receive any information from third parties.</p>
                <h2>How do we process your information?</h2>
                <p>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and comply with the law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties.</p>
                <h2>How do we keep your information safe?</h2>
                <p>We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.</p>
                <h2>What are your rights?</h2>
                <p>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                <h2>How do you exercise your rights?</h2>
                <p>How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here: https://www.wscubetech.com/contact, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            </div>
            <div>
                <FAQ heading=""
                    description=""
                    faqs={faqsData} />
            </div>
        </div>
    );
}

export default PrivacyPolicy;