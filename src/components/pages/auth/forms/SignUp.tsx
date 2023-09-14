import React from "react";

const SignUp = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center mb-12 py-5 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Create your <span className="font-extrabold">TRiBE</span> account
                    </h2>
                </div>

                <div className="mt-8 px-4 sm:mx-auto w-full sm:max-w-[480px]">
                    <div className="bg-black border-2 border-[#24292F] px-6 py-8 shadow rounded-lg sm:px-12">
                        <form className="space-y-5" action="#" method="POST" autoComplete="off">
                            <div>
                                <label htmlFor="user_fullname"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Full name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_fullname"
                                        name="user_fullname"
                                        type="user_fullname"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="user_school"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Choose your TRiBE
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="user_school"
                                        name="user_school"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="" disabled selected>Select your school or university</option>
                                        <option value="university_1">Holy Cross College</option>
                                        <option value="university_2">Saint Mary's College</option>
                                        <option value="university_3">University of Notre Dame</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="user_email"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Your school email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="user_email"
                                        autoComplete="new-email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="user_password"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_password"
                                        name="user_password"
                                        type="user_password"
                                        autoComplete="new-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Create account
                                </button>
                            </div>
                        </form>

                        <div>
                            <div className="relative mt-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200"/>
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-black px-6 text-white">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 w-full">

                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                                >
                                    <svg   className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M 16.003906 14.0625 L 16.003906 18.265625 L 21.992188 18.265625 C 21.210938 20.8125 19.082031 22.636719 16.003906 22.636719 C 12.339844 22.636719 9.367188 19.664063 9.367188 16 C 9.367188 12.335938 12.335938 9.363281 16.003906 9.363281 C 17.652344 9.363281 19.15625 9.96875 20.316406 10.964844 L 23.410156 7.867188 C 21.457031 6.085938 18.855469 5 16.003906 5 C 9.925781 5 5 9.925781 5 16 C 5 22.074219 9.925781 27 16.003906 27 C 25.238281 27 27.277344 18.363281 26.371094 14.078125 Z"></path>
                                    </svg>
                                    <span className="text-sm font-semibold leading-6">Google Account</span>
                                </a>
                            </div>
                        </div>

                        <p className="mt-5 text-center text-sm text-gray-500">
                            Have an account?{' '}
                            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Log in
                            </a>
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
}

export default SignUp;