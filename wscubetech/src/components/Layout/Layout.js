// import { Outlet } from "react-router-dom";
// import Container from '../Container/Container'
// import Header from "../Container/Header";
// import ContainerItems from "../Container/ContainerItems";
// import ProgramItem from "../Programs/ProgramItem";
// import ProgramDetail from "../Programs/ProgramDetail";
// import CareerItem from "../CareerDomain/CareerItem";
// import ImpactContainer from "../ImpactStory/ImpactContainer";
// import CareerPathContainer from "../CareerPath/CareerPathContainer";
// import CareerSchoolContainer from "../CareerSchool/CareerSchoolContainer";
// import MasterClass from "../MasterClass/MasterClass";
// import FounderMessage from "../FounderMessage/FounderMessage";
// import Footer from "../Footer/Footer";


// const Layout = () => {
//     return (
//         <div>
//             <Container>
//                 <Header />
//                 <ContainerItems />
//             </Container>
//             <ProgramItem />
//             <ProgramDetail />
//             <CareerItem />
//             <ImpactContainer />
//             <CareerPathContainer />
//             <CareerSchoolContainer />
//             <MasterClass />
//             <Outlet />
//             <FounderMessage />
//             <Footer />

//         </div>
//     );
// }

// export default Layout;

import { Outlet } from "react-router-dom";
import Header from "../Container/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />  {/* This is where child routes (like DataAnalytics) will load */}
            <Footer />
        </div>
    );
};

export default Layout;
