import "./AlumniStudent.css";

const AlumniStudent = ({alumniData, jobData}) => {


    return (
        <div className="our-student-alumni">
            <div className="our-alumni-data">
                <span><strong>Our Alumni<h3>have secured jobs at 100+ top global brands!</h3></strong></span>
            </div>

            <div className="alumni-student-card">
                {/* First row */}
                <div className="alumni-row">
                    <div className="alumni-job-data">
                        <p>{jobData[0].text}</p>
                        <h4>{jobData[0].count}</h4>
                    </div>
                    {alumniData.slice(0, 2).map((alumni, index) => (
                        <div key={index} className="alumani-student-card">
                            <img src={alumni.image} alt="Alumni Student" />
                            <p>{alumni.name}</p>
                        </div>
                    ))}
                </div>

                {/* Second row */}
                <div className="alumni-row">
                    {alumniData.slice(2, 4).map((alumni, index) => (
                        <div key={index} className="alumani-student-card">
                            <img src={alumni.image} alt="Alumni Student" />
                            <p>{alumni.name}</p>
                        </div>
                    ))}
                    <div className="alumni-job-data">
                        <p>{jobData[1].text}</p>
                        <h4>{jobData[1].count}</h4>
                    </div>
                    <div className="alumani-student-card">
                        <img src={alumniData[4].image} alt="Alumni Student" />
                        <p>{alumniData[4].name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniStudent;
