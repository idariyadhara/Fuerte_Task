import { useState } from 'react';
import './FAQ.css';

const FAQ = ({ heading, description, faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='faq-container-data'>
            <h2>{heading}</h2>
            <p>{description}</p>
            <div className="faq-container">
                 {/* {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question} 
                            <span className="plus-icon">{openIndex === index ? "−" : "+"}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))} */}
                  {faqs && faqs.length > 0 ? (
                    faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className="plus-icon">{openIndex === index ? "−" : "+"}</span>
                            </div>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {Array.isArray(faq.answer) ? (
                                        <ul>
                                            {faq.answer.map((ans, i) => (
                                                <li key={i}>{ans}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{faq.answer}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No FAQs available.</p>
                )}
            </div>
        </div>
    );
}

export default FAQ;