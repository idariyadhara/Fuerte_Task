import './Lerner.css';

const Lerner = ({lernerData}) => {
    return (
        <div className='lerner-main-container'>
            <div className='lerner-container'>
                <div className='lerner-story'>
                    <h1>Spotlight on our Learner</h1>
                    <h3>{lernerData.name}</h3>
                    <p>{lernerData.description}</p>
                </div>
                <video width="100%" controls>
                    <source src={lernerData.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Lerner;