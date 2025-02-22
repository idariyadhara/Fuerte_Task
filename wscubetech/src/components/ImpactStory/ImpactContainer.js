import './ImpactContainer.css';
import ImpactItem from './ImpactItem';

const ImpactContainer = () => {
    return (
        <div>
            <div className='impact_data'>
                <h1>Our Impact Numbers</h1>
                <p>Join our rapidly growing learning community and acquire real-world skills.</p>
            </div>
            <div>
                <ImpactItem/>
            </div>
        </div>
    );
}

export default ImpactContainer;