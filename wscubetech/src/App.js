import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/Container/ScrollTop"; // Import the ScrollToTop component
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import DataAnalytics from "./components/DataAnalytics/DataAnalytics";
import DigitalMarketing from "./components/DigitalMarketing/DigitalMarketing";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import CyberSecurity from "./components/CyberSecurity/CyberSecurity";
import AppDevelopment from "./components/AppDevelopment/AppDevelopment";
import VideoPlayer from "./components/LearnerReview/VideoPlayer";
import Gurgaon from "./components/Cities/Gurgaon";
import TermsAndCondition from "./components/DataAnalytics/TermsAndCondition";
import PrivacyPolicy from "./components/DataAnalytics/PrivacyPolicy";
import Rajkot from "./components/Cities/Rajkot";

function App() {

  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("no-scroll");
}, [location.pathname]);

  return (
    <>
      <ScrollToTop />  {/* Ensures scrolling resets on route change */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="gurgaon" element={<Gurgaon />} />
          <Route path="rajkot" element={<Rajkot />} />
          <Route path="video-player" element={<VideoPlayer />} />
          <Route path="terms-and-condition" element={<TermsAndCondition />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
