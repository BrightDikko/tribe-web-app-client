import './App.css';
import {BrowserRouter} from "react-router-dom";
import React from "react";
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
