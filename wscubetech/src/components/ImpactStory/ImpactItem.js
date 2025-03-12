import './ImpactItem.css';

const ImpactItem = () => {
    return (
        <div className='impact_story'>
            <div className='impact_left_data'>
                <div className='impact_student'>
                    <h1>150k+</h1>
                    <h2>Students Trained</h2>
                    <p>Empowering futures through skilled students trained by our EdTech expertise</p>
                </div>
                <div className='impact_left_detail'>
                    <div className='impact_intern'>
                        <img src={require('../../assets/images/interns-icon.png')} alt="Our Interns"/>
                        <h1>3K+</h1>
                        <p>Interns</p>
                    </div>
                    <div className='impact_domain'>
                        <img src={require('../../assets/images/comains-icon.png')} alt="Our Domain"/>
                        <h1>100+</h1>
                        <p>Training Domains</p>
                    </div>
                </div>
            </div>
            <div className='impact_right_data'>
                <div className='impact_images'>
                    <img src={require('../../assets/images/abhishek.jpeg')} alt="Person1"/>
                    <img src={require('../../assets/images/zeeshan.jpeg')} alt="Person1"/>
                    <img src={require('../../assets/images/mohit.jpeg')} alt="Person1"/>
                    <img src={require('../../assets/images/aprakash.jpg')} alt="Person1"/>
                    <img src={require('../../assets/images/poojamam.jpeg')} alt="Person1"/>                                        
                </div>

               <div className='impact_right_detail'>
                    <h1>3M+</h1>
                    <p>Learners On <strong style={{'color':'red'}}>YouTube</strong></p>
                    <a href='https://fuertedevelopers.com/'>@FuerteDevelopers | 5K videos</a>
               </div>
            </div>
        </div>
    );
}

export default ImpactItem;