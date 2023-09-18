import './App.css';
import {BrowserRouter, useLocation} from "react-router-dom";
import React, {useCallback, useEffect} from "react";
import MainLayout from "./app/layout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./app/store/store";
import {logout} from "./app/store/slices/authSlice";
import EventBus from "./app/common/EventBus";


function App() {
    const {user: currentUser} = useSelector((state: RootState) => state.auth);
    console.log("currentUser from App.tsx: ", currentUser);

    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        EventBus.on("logout", () => {
            handleLogout();
        });

        return () => {
            EventBus.remove("logout");
        };

    }, [currentUser, handleLogout]);


    return (
        <div className="App">
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        </div>

    );
}

export default App;
