import './ProgramDetail.css';

const ProgramDetail = ({ program }) => {
    if (!program) return null;
    return (
        <div className='container_data'>
            <div className='image_bg'>
                <img src={program.image} alt="Program Background" />
            </div>
            <div className='program_detail'>
                <div className='program__titles'>
                    <h1>{program.title}</h1>
                    <p>{program.subtitle}</p>
                </div>
                <div className='program__rating'>
                    <p>{program.rating}</p>
                    <p><img src={program.ratingStar} alt="Rating Stars" width='120px' height='50px' /></p>
                    <p id="rating_number">({program.ratingNumber})</p>
                </div>
                <div className='program__job'>
                    <p>Targeted Job Role:</p>
                    <p>{program.jobRole}</p>
                </div>
                <div className='program__duration_session'>
                    <div className='program__duration'>
                        <div className='icon icon-green'>
                            <img src={program.durationIcon} alt="Duration Icon" width='30px' height='30px' />
                        </div>
                        <div className='program__items'>
                            <p>Duration</p>
                            <p>{program.duration}</p>
                        </div>
                    </div>
                    <div className='program__session'>
                        <div className='icon icon-yellow'>
                            <img src={program.sessionIcon} alt="Session Icon" width='30px' height='30px' />
                        </div>
                        <div className='program__items'>
                            <p>Live Sessions</p>
                            <p>{program.sessions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgramDetail;
