import { useLocation } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "../components/nav/Footer";
import React from "react";

const MainLayout = () => {
    const location = useLocation();
    const routesToRenderFooterFor = ["/", "/feeder", "/cruiser", "/projects", "/about", "/help"];
    return (
        <>
            <Navbar/>
            <AppRoutes/>
            {routesToRenderFooterFor.includes(location.pathname) && <Footer />}
        </>
    );
}

export default MainLayout;
