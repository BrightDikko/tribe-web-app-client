import React, {useEffect} from "react";
import {useRouteError} from "react-router-dom";

import ErrorHero from "./ErrorHero";


const Error = () => {
    useEffect(() => {
        document.title = "Page Not Found!";
    }, []);

    const error: any = useRouteError();

    return (
        <React.Fragment>
                <ErrorHero errorStatus={error.status}/>
        </React.Fragment>
    )
}

export default Error;
