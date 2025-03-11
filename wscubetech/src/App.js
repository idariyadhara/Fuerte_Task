// import {  Routes, Route } from "react-router-dom";
// import Container from "./components/Container/Container";
// import Header from "./components/Container/Header";
// import ContainerItems from "./components/Container/ContainerItems";
// import ProgramItem from "./components/Programs/ProgramItem";
// import ProgramDetail from "./components/Programs/ProgramDetail";
// import CareerItem from "./components/CareerDomain/CareerItem";
// import ImpactContainer from "./components/ImpactStory/ImpactContainer";
// import CareerPathContainer from "./components/CareerPath/CareerPathContainer";
// import CareerSchoolContainer from "./components/CareerSchool/CareerSchoolContainer";
// import MasterClass from "./components/MasterClass/MasterClass";
// import LearnerReview from "./components/LearnerReview/LearnerReview";
// import VideoPlayer from "./components/LearnerReview/VideoPlayer";
// import FounderMessage from "./components/FounderMessage/FounderMessage";
// import Footer from "./components/Footer/Footer"; 


// function App() {
//   return (
//    <>
//     <Container>
//       <Header/>
//       <ContainerItems/>
//       </Container>
//       <ProgramItem/>
//       <ProgramDetail/>
//       <CareerItem/>
//       <ImpactContainer/>
//       <CareerPathContainer/>
//       <CareerSchoolContainer/>
//       <MasterClass/>
  
//             <Routes>
//                 <Route path="/" element={<LearnerReview />} />
//                 <Route path="/video-player" element={<VideoPlayer />} />
                
//             </Routes>
       
//         <FounderMessage/>
//         <Footer/>
//    </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import DataAnalytics from "./components/DataAnalytics/DataAnalytics";
import DigitalMarketing from "./components/DigitalMarketing/DigitalMarketing";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import CyberSecurity from "./components/CyberSecurity/CyberSecurity";
import AppDevelopment from "./components/AppDevelopment/AppDevelopment";
import VideoPlayer from "./components/LearnerReview/VideoPlayer";
import Jaipur from "./components/Cities/Jaipur";
import TermsAndCondition from "./components/DataAnalytics/TermsAndCondition";
import PrivacyPolicy from "./components/DataAnalytics/PrivacyPolicy";
import Jodhpur from "./components/Cities/Jodhpur";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* Home page */}
          <Route path="data-analytics" element={<DataAnalytics />} />  {/* New Page */}
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="jaipur" element={<Jaipur />} />
          <Route path="jodhpur" element={<Jodhpur />} />
          <Route path="video-player" element={<VideoPlayer />} />
          <Route path="terms-and-condition" element={<TermsAndCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
  );
}

export default App;

