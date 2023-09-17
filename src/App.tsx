import './App.css';
import Navbar from "./app/components/nav/Navbar";
import Footer from "./app/components/nav/Footer";
import {BrowserRouter, useLocation} from "react-router-dom";
import React from "react";
import AppRoutes from "./app/layout/routes/AppRoutes";
import MainLayout from "./app/layout/MainLayout";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        </div>

    );
}

export default App;
