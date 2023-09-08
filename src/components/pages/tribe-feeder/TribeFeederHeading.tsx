import React from "react";


const icons = {
    locationPin: {
        name: 'Location pin',
        svg: (props: React.ComponentProps<'svg'>) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"/>
            </svg>
        ),
    }
}

const TribeFeederHeading = () => {
    return (
        <div className="bg-white">
            <div className="flex bg-white h-16 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
                        Feeder
                    </h2>
                </div>
                <div className="flex items-center justify-center md:ml-4 md:mt-0 gap-x-1">
                    <div className="flex">
                        <icons.locationPin.svg aria-hidden="true"/>
                    </div>
                    <div className="flex">
                        <h2 className="text-md sm:text-lg font-bold leading-7 text-indigo-800 sm:truncate sm:tracking-tight">
                            University of Notre Dame
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TribeFeederHeading;