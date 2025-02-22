import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Container/Header";
import ContainerItems from "./components/Container/ContainerItems";
import ProgramItem from "./components/Programs/ProgramItem";
import ProgramDetail from "./components/Programs/ProgramDetail";
import CareerItem from "./components/CareerDomain/CareerItem";
import ImpactContainer from "./components/ImpactStory/ImpactContainer";
import CareerPathContainer from "./components/CareerPath/CareerPathContainer";
import CareerSchoolContainer from "./components/CareerSchool/CareerSchoolContainer";
import MasterClass from "./components/MasterClass/MasterClass";
import LearnerReview from "./components/LearnerReview/LearnerReview";
import VideoPlayer from "./components/LearnerReview/VideoPlayer";
import FounderMessage from "./components/FounderMessage/FounderMessage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <>
    <Container>
      <Header/>
      <ContainerItems/>
      </Container>
      <ProgramItem/>
      <ProgramDetail/>
      <CareerItem/>
      <ImpactContainer/>
      <CareerPathContainer/>
      <CareerSchoolContainer/>
      <MasterClass/>
      <Router>
            <Routes>
                <Route path="/" element={<LearnerReview />} />
                <Route path="/video-player" element={<VideoPlayer />} />
            </Routes>
        </Router>
        <FounderMessage/>
        <Footer/>
   </>
  );
}

export default App;
