import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default MainLayouts;