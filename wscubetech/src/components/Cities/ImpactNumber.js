import './ImpactNumber.css';

const impactData = [
    { number: "3M+", text: "Learners On YouTube" },
    { number: "150K+", text: "Aspirants Trained" },
    { number: "100+", text: "Training Domains" },
    { number: "4.5/5", text: "Average Learner Satisfaction" }
];

const ImpactNumber = () => {
    return (
        <div className='impact-number-main-container'>
            <div className='impact-number-container'>
                <h1>Our company has Impactful Numbers</h1>
                <p>The numbers are consistently increasing, thanks to the trust & confidence of our students.</p>
                <div className='numbers-impact'>
                    {impactData.map((item, index) => (
                        <div key={index} className='number-trainie'>
                            <h1>{item.number}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImpactNumber;
