import React, {useEffect} from "react";
import {useRouteError} from "react-router-dom";

import ErrorHero from "./ErrorHero";

const Error = () => {
    useEffect(() => {
        document.title = "Page Not Found!";
    }, []);

    return (
        <React.Fragment>
                <ErrorHero errorStatus={404}/>
        </React.Fragment>
    )
}

export default Error;
