import Container from '../Container/Container';
import ContainerItems from '../Container/ContainerItems';
import ProgramItem from '../Programs/ProgramItem';
import ProgramDetail from '../Programs/ProgramDetail';
import CareerItem from '../CareerDomain/CareerItem';
import ImpactContainer from '../ImpactStory/ImpactContainer';
import CareerPathContainer from '../CareerPath/CareerPathContainer';
import CareerSchoolContainer from '../CareerSchool/CareerSchoolContainer';
import MasterClass from '../MasterClass/MasterClass';
import LearnerReview from "../LearnerReview/LearnerReview";
import FounderMessage from '../FounderMessage/FounderMessage';

const Home = () => {
    return (
        <>
            <Container>
                <ContainerItems />
            </Container>
            <ProgramItem />
            <ProgramDetail />
            <CareerItem />
            <ImpactContainer />
            <CareerPathContainer />
            <CareerSchoolContainer />
            <MasterClass />
            <LearnerReview/>
            <FounderMessage />
        </>
    );
};

export default Home;
