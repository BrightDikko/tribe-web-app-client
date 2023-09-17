import error404 from "../../../assets/images/error/error404.jpg";
import React from "react";

type ErrorHeroProps = {
    errorStatus?: number;
};

const ErrorHero: React.FC<ErrorHeroProps> = (props) => {
    if (props.errorStatus) {
        console.log("Props from ErrorHero: ", props.errorStatus);
    }

    return (
        <React.Fragment>
            {(props.errorStatus === 404) ?
                (<section>
                    <div className="bg-black">
                        <main>
                            <div className="relative isolate">
                                <div
                                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                                        style={{
                                            clipPath:
                                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                                        }}
                                    />
                                </div>
                                <div className="overflow-hidden">
                                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-24 lg:px-8 lg:pt-24 ">
                                        <div
                                            className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none md:items-center flex-row justify-center">
                                            <div
                                                className="w-full max-w-2xl lg:shrink-0 xl:max-w-2xl mb-16 lg:mb-0 px-2">

                                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black pt-4 pb-5 font-serif italic relative bg-transparent slanted-bg">
                                                    Page Not Found!
                                                </h1>

                                                <p className="relative mt-6 text-lg leading-8 text-gray-400 mx-auto sm:max-w-md lg:max-w-none text-center">
                                                    We have shifted a few things around, and your page must have gotten
                                                    lost.
                                                    Try retyping the address or just head back to our home page.
                                                </p>

                                                <div className="mt-10 flex  justify-center items-center gap-x-6">
                                                    <a
                                                        href="#"
                                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Go to home
                                                    </a>
                                                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                                                        Contact us <span aria-hidden="true">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className=" flex items-center justify-center">
                                                <div className="relative">
                                                    <img
                                                        src={error404}
                                                        alt=""
                                                        className=" max-h-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                    />
                                                    <div
                                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>) :
                (<section>
                    <div className="bg-black">
                        <main>
                            <div className="relative isolate">
                                <div
                                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                                        style={{
                                            clipPath:
                                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                                        }}
                                    />
                                </div>
                                <div className="overflow-hidden">
                                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-24 lg:px-8 lg:pt-24 ">
                                        <div
                                            className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none md:items-center flex-row justify-center">
                                            <div
                                                className="w-full max-w-2xl lg:shrink-0 xl:max-w-2xl mb-16 lg:mb-0 px-2">

                                                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black pt-4 pb-5 font-serif italic relative bg-transparent slanted-bg">
                                                    Unexpected Error!
                                                </h1>

                                                <p className="relative mt-6 text-lg leading-8 text-gray-400 mx-auto sm:max-w-md lg:max-w-none text-center">
                                                    An unexpected internal server error has occurred. We kindly ask that you try refreshing the page. If error persists, please try again later.
                                                </p>

                                                <div className="mt-10 flex  justify-center items-center gap-x-6">
                                                    <a
                                                        href="#"
                                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Go to home
                                                    </a>
                                                    <a href="#" className="text-sm font-semibold leading-6 text-white">
                                                        Contact us <span aria-hidden="true">→</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className=" flex items-center justify-center">
                                                <div className="relative">
                                                    <img
                                                        src={error404}
                                                        alt=""
                                                        className=" max-h-[500px] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                                    />
                                                    <div
                                                        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>)
            }
        </React.Fragment>
    )
}

export default ErrorHero;