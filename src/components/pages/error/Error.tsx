import React from "react";
import {useRouteError} from "react-router-dom";

import ErrorHero from "./ErrorHero";


const Error = () => {
    const error: any = useRouteError();
    console.log(error);

    return (
        <React.Fragment>
                <ErrorHero errorStatus={error.status}/>
        </React.Fragment>
    )
}

export default Error;
