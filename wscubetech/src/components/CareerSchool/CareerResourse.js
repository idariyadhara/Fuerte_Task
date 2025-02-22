import './CareerResourse.css';

const CareerResourse=()=>{
    return(
        <div className='ca-resourse'>
            <div className='resource-data'>
                <h1>Upskill with our Free Resources</h1>
                <p>Engage and excel with our diverse collection of free learning resources, from quizzes to e-books and interactive challenges- designed to lift your career at zero cost!</p>
                <img src={require('../../assets/images/adob-icon.png')} alt='Adobe'/>
                <button>Explore Now</button>
            </div>
            <div className='resourse-list'>
                <img src={require('../../assets/images/arrows-group.png')} alt='Arrows'/>
                <div className='resource-data-list'>
                    <p id='resource-interview'>Interview Bites</p>
                    <p id='resource-quize'>Quizzes</p>
                    <p id='resource-article'>Articles</p>
                    <p id='resource-ebook'>eBooks</p>
                    <p id='resource-challenge'>Interactive Challenges</p>
                    <p id='resource-course'>Courses</p>
                    <p id='resource-tool'>Tools</p>
                </div>
            </div>
        </div>
    );
}

export default CareerResourse;