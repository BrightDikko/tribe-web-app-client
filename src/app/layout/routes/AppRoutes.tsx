import {Route, Routes} from "react-router-dom";
import HomePageHero from "../../components/pages/home/HomePageHero";
import LogIn from "../../components/pages/auth/forms/LogIn";
import SignUp from "../../components/pages/auth/forms/SignUp";
import Error from "../../components/pages/error/Error";
import React from "react";
import TribeFeeder from "../../components/pages/tribe-feeder/TribeFeeder";
import TribeCruiser from "../../components/pages/tribe-cruiser/TribeCruiser";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePageHero />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/register" element={<SignUp />}/>
            <Route path="/feeder" element={<TribeFeeder />}/>
            <Route path="/cruiser" element={<TribeCruiser />}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}

export default AppRoutes;