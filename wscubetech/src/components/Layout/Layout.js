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
