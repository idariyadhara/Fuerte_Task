import './ProgramItem.css';
import Programs from './Programs';

const ProgramItem = () => {
    return (
        <div>
            <div className='programs__data'>
                <div className='program_mentor'>
                    <h1>Mentorship Programs</h1>
                    <p>Choose your program, get certified, and grab new career opportunities.</p>
                </div>
                <Programs/>
            </div>
        </div>
    );
}

export default ProgramItem;