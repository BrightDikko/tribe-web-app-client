import React, {useEffect} from "react";
import {locationPin} from "../../../assets/icons/locationPin";

const CruiserHeading = () => {
    useEffect(() => {
        document.title = "TRiBE Cruiser";
    }, []);

    return (
        <div className="bg-white">
            <div className="flex bg-white h-16 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
                        Cruiser
                    </h2>
                </div>
                <div className="flex items-center justify-center md:ml-4 md:mt-0 gap-x-1">
                    <div className="flex">
                        <locationPin.svg aria-hidden="true"/>
                    </div>
                    <div className="flex">
                        <h2 className="text-md sm:text-lg font-bold leading-7 text-indigo-800 sm:truncate sm:tracking-tight">
                            See All Campuses
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CruiserHeading;