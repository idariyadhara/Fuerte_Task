// import './CareerItem.css';
import './CareerItem.css';
import Container from '../Container/Container';

const CareerItem = () => {

    const careerItems = [
        {
            id: 1,
            title: 'Web Development',
            image: require('../../assets/images/learn-web-dev.png'),
            link: '/web'
        },
        {
            id: 2,
            title: 'App Development',
            image: require('../../assets/images/app-development-icon.png'),
            link: '/app'
        },
        {
            id: 3,
            title: 'Data Analytics',
            image: require('../../assets/images/data-science-icon.png'),
            link: '/analytics'
        },
        {
            id: 4,
            title: 'Digital Marketing',
            image: require('../../assets/images/digital-marketing-icon.png'),
            link: '/marketing'
        },
        {
            id: 5,
            title: 'Cyber Security',
            image: require('../../assets/images/cyber-security-icon.png'),
            link: '/cyber'
        },
        {
            id: 6,
            title: 'Design',
            image: require('../../assets/images/design-icon.png'),
            link: '/design'
        }
    ];

    return (
        <Container>
            <div className='career__domain'>
                <div className='domain_detail'>
                    <h1>Explore Top Career Domains</h1>
                    <p>Discover career paths that truly resonate with your passion & explore mentorship programs that align perfectly with you.</p>
                </div>
                <div className='career_box'>
                    {/* <div className='career_items'>
                        <img src={require('../../assets/images/courses-icon.png')} alt='career' />
                        <h1>Web Development</h1>
                        <a href='/web'>see Programs </a>
                    </div>     */}
                    {careerItems.map((item) => (
                        <div key={item.id} className='career_items'>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                            <a href={item.link}>See Programs {item.logo} </a>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default CareerItem;