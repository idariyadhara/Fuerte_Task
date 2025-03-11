import './AlumniReview.css';

const AlumniReview = ({reviews = []}) => {
    return (
        <div className='alumani-container'>
            <div className='review-star'>
                <img src={require('../../assets/images/rating.png')} alt='Rating Review' />
                <h3>4.9</h3>
                <p>(1,032 Reviews)</p>
            </div>
            <h3 id="alumani-h3">Hear From Our Alumni</h3>
            <div className='alumani-reviews'>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className='alumni-card'>
                            <p>{review.text}</p>
                            <h4>{review.name}</h4>
                        </div>
                    ))
                ) : (
                    <p>No reviews available</p> // Fallback if no reviews are passed
                )}

            </div>
        </div>
    );
}

export default AlumniReview;