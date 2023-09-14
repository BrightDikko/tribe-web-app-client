import './App.css';
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import HomePageHero from "./components/pages/home/HomePageHero";
import FeederHeading from "./components/pages/tribe-feeder/FeederHeading";
import FeederHero from "./components/pages/tribe-feeder/FeederHero";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import CruiserHeading from "./components/pages/tribe-cruiser/CruiserHeading";
import CruiserHero from "./components/pages/tribe-cruiser/CruiserHero";
import Error from "./components/pages/error/Error";
import LogIn from "./components/pages/auth/forms/LogIn";
import SignUp from "./components/pages/auth/forms/SignUp";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <HomePageHero/>
            </div>),
        errorElement: <Error/>
    },
    {
        path: "/feeder",
        element: (
            <div>
                <FeederHeading/>
                <FeederHero/>
            </div>),
    },
    {
        path: "/cruiser",
        element: (
            <div>
                <CruiserHeading/>
                <CruiserHero/>
            </div>),
    },
    {
        path: "/login",
        element: (
            <div>
                <LogIn/>
            </div>),
    },
    {
        path: "/register",
        element: (
            <div>
                <SignUp/>
            </div>),
    }
]);

function App() {
    return (
        <div className="App">
            <Navbar/>
            <RouterProvider router={router}/>
            {/*TODO: Save images within codebase, in case they get taken down from web*/}
            <Footer/>
        </div>

    );
}

export default App;
