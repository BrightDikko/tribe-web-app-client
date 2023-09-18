import React from 'react';
import {Link} from "react-router-dom";

const FeederHero = () => {
    return (
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
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-24 lg:px-8 lg:pt-16 ">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none md:items-center flex-row justify-center">
                                <div className="w-full max-w-2xl lg:shrink-0 xl:max-w-2xl mb-16 lg:mb-0 px-2">

                                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black pt-4 pb-5 font-serif italic relative bg-transparent slanted-bg">
                                        Everyone gon' eat!
                                    </h1>

                                    <h1 className="text-4xl mt-4 font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
                                        Feeding the <span className="text-indigo-400">TRiBE</span>, <br/> one bite at a time.
                                    </h1>

                                    <div className="mt-10 flex  justify-center items-center gap-x-6">
                                        <Link
                                            to={"/login"}
                                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started
                                        </Link>
                                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                </div>
                                <div className=" flex items-center justify-center">
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwZWF0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                                alt=""
                                                className=" max-h-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FeederHero;