import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logInUser} from "../../../../store/auth/authSlice";
import {RootState} from "../../../../store/store";
import filterAndJoinClasses from "../../../utils/filterAndJoinClasses";

const LogIn = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enableCreateAccountButton, setEnableCreateAccountButton] = useState(false);

    const userInfo = useSelector((state: RootState) => state.auth.userInfo);
    console.log("userInfo: ", userInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "TRiBE Log In | Sign In to TRiBE Account";
    }, []);

    useEffect(() => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
        const enteredEmailIsValid = emailPattern.test(enteredEmail);
        const enteredPasswordIsValid = enteredPassword.trim().length > 5;

        if (enteredEmailIsValid && enteredPasswordIsValid) {
            setEnableCreateAccountButton(true);
        } else {
            setEnableCreateAccountButton(false);
        }
    }, [enteredEmail, enteredPassword]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPassword(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submit button pressed!");
        dispatch(logInUser({email: enteredEmail, password: enteredPassword}));

        setEnteredEmail("");
        setEnteredPassword("");
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center mb-12 py-5 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Log in to your account
                    </h2>
                </div>

                <div className="mt-8 px-4 sm:mx-auto w-full sm:max-w-[480px]">
                    <div className="bg-black border-2 border-[#24292F] px-6 py-8 shadow rounded-lg sm:px-12">
                        <form className="space-y-5" onSubmit={handleSubmit} method="POST" autoComplete="off">
                            <div>
                                <label htmlFor="user_email"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Your school email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_email"
                                        name="user_email"
                                        type="email"
                                        autoComplete="new-email"
                                        required
                                        onChange={handleEmailChange}
                                        value={enteredEmail}
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="user_password"
                                       className="block text-sm font-medium leading-6 text-left text-white">
                                    Account password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="user_password"
                                        name="user_password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        onChange={handlePasswordChange}
                                        value={enteredPassword}
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm leading-6">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={filterAndJoinClasses(
                                        enableCreateAccountButton ? " bg-indigo-700 hover:bg-indigo-600" : " bg-gray-500 hover:bg-gray-500",
                                        "flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")}
                                >
                                    Log in
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
                            Don't have an account?{' '}
                            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Sign up
                            </a>
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
}

export default LogIn;