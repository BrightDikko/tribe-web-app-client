import { useLocation } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "../components/nav/Footer";
import React from "react";

const MainLayout = () => {
    const location = useLocation();
    const routesToRenderFooterFor = [
        "/",
        "/products/feeder",
        "/products/cruiser",
        "/products/marketplace",
        "/products/talent-plus",
        "/campuses",
        "/resources/support-center",
        "/resources/guide",
        "/resources/testimonials",
        "/fireside"
    ];

    return (
        <>
            <Navbar/>
            <AppRoutes/>
            {routesToRenderFooterFor.includes(location.pathname) && <Footer />}
        </>
    );
}

export default MainLayout;
