import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ChevronDownIcon, ChevronRightIcon} from "@heroicons/react/20/solid"
import filterAndJoinClasses from "../utils/filterAndJoinClasses";
import {AppDispatch, RootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/slices/authSlice";
import EventBus from "../../common/EventBus";
import TribeLogo from "../../assets/tribe-logo/tribe-logo-v4.png"
import "../../../App.css"

const routesToShowTabButtonsFor = [
    "/",
    "/products/feeder",
    "/products/cruiser",
    "/products/marketplace",
    "/products/talent-plus",
    "/campuses",
    "/resources/support-center",
    "/resources/guide",
    "/resources/testimonials",
    "/fireside"
];


const productsNavigation = [
    {name: "Feeder", href: "/products/feeder"},
    {name: "Cruiser", href: "/products/cruiser"},
    {name: "Marketplace", href: "/products/marketplace"},
    {name: "Talent+", href: "/products/talent-plus"},
]

const resourcesNavigation = [
    {name: "Support center", href: "/resources/support-center"},
    {name: "Guide", href: "/resources/guide"},
    {name: "Testimonials", href: "/resources/testimonials"},
]

const loginOrSignupNavigation = [
    {name: "Log in", href: "/login"},
    {name: "Sign up", href: "/register"},
]

const Navbar = () => {

    const {user: currentUser} = useSelector((state: RootState) => state.auth);
    // console.log("currentUser: ", currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [currentExpandedTab, setCurrentExpandedTab] = useState("");

    const location = useLocation();
    const navigation = [
        {name: "Products", href: "/products", current: location.pathname === "/products", children: productsNavigation},
        {name: "Campuses", href: "/campuses", current: location.pathname === "/campuses"},
        {name: "Resources", href: "/resources", current: location.pathname === "/resources", children: resourcesNavigation},
        {name: "Fireside", href: "/fireside", current: location.pathname === "/fireside"},
    ];
    const helpAndAuthNavigation = [
        {name: "Log in", href: "/login", current: location.pathname === "/login"},
    ]

    const handleLogout = useCallback(() => {
        dispatch(logout());
        navigate("/");
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
        <Disclosure as="nav" className="bg-black border-b border-white/10">
            {({open}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                {/*Nav LHS - Logo & Buttons (Feeder, Cruiser, Projects, About)*/}
                                <div className="flex flex-shrink-0 items-center ml-0.5 mr-3 ">
                                    <img
                                        className="h-7 w-auto invert animate-heartbeat"
                                        src={TribeLogo}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to={"/"}>
                                        <p className="text-white text-2xl font-bold">
                                            TRiBE
                                        </p>
                                    </Link>
                                </div>
                                {routesToShowTabButtonsFor.includes(location.pathname) &&
                                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
                                        {navigation.map((item) => (
                                            <div key={item.name}>
                                                {!item.children ?
                                                    (<Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                        aria-current={item.current ? "page" : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>)
                                                    :
                                                    (<Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <Menu.Button
                                                                className="text-gray-300 hover:bg-gray-700 hover:text-white inline-flex w-full justify-center gap-x-1 rounded-md px-3 py-2 mr-2 text-sm font-medium">
                                                                {item.name}
                                                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400"
                                                                                 aria-hidden="true"/>
                                                            </Menu.Button>
                                                        </div>

                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items
                                                                className="absolute right-0 left-0 z-10 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    {item.children.map((item) => (
                                                                        <Menu.Item key={item.name}>
                                                                            {({active}) => (
                                                                                <Link
                                                                                    to={item.href}
                                                                                    className={filterAndJoinClasses(
                                                                                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                                                        "flex flex-row justify-between px-4 py-2 text-sm"
                                                                                    )}
                                                                                >
                                                                                    <div><p>{item.name}</p></div>
                                                                                    <div><ChevronRightIcon
                                                                                        className={filterAndJoinClasses(
                                                                                            active ? "bg-gray-100 text-gray-900" : "text-gray-400",
                                                                                            "-mr-1 h-5 w-5")}
                                                                                        aria-hidden="true"/></div>
                                                                                </Link>
                                                                            )}
                                                                        </Menu.Item>))}
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>)}
                                            </div>
                                        ))}
                                    </div>}
                            </div>

                            {/*Nav RHS - Help, Log in, Sign up*/}
                            <div className="flex items-center">
                                <div>
                                    {currentUser ?
                                        (<div className="hidden md:flex flex-shrink-0">
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            >
                                                Log out
                                            </button>
                                        </div>)
                                        :
                                        (<div className="flex items-center">
                                            <div className="hidden mr-3 md:ml-6 md:flex md:items-center md:space-x-4">
                                                {helpAndAuthNavigation.map((item) => {
                                                    return (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className={"text-gray-300 px-3 py-2 text-sm font-medium"}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )
                                                })}
                                            </div>

                                            <div className="hidden md:flex flex-shrink-0">
                                                <Link to={"/register"}>
                                                    <button
                                                        type="button"
                                                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                                    >
                                                        Sign up
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>)
                                    }
                                </div>

                                {/* Mobile menu button */}
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    <Disclosure.Button
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5"/>
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Mobile menu, show/hide based on menu state.*/}
                    <Disclosure.Panel className="md:hidden border-t border-white/10">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <div key={item.name} className={currentExpandedTab === item.name ? "mb-2" : ""}>
                                    <button
                                        onClick={() => setCurrentExpandedTab(currentExpandedTab !== item.name ? item.name : "")}
                                        className="text-gray-300 hover:text-white hover:font-semibold w-full flex flex-row justify-between rounded-md px-3 py-2 text-base font-medium"
                                        aria-current={item.current ? "page" : undefined}
                                    >
                                        <div><p>{item.name}</p></div>

                                    </button>

                                    <div className="bg-gray-700 rounded-md mt-1">
                                        {currentExpandedTab === item.name && item.children && item.children.map((child, index) => (
                                            <Link
                                                key={child.name}
                                                to={child.href}
                                                className={filterAndJoinClasses((index !== (item.children.length - 1)) ? " border-b-[0.5px] border-gray-800" : "mb-3",
                                                    "text-gray-300 hover:bg-gray-600 hover:text-white pl-6 flex flex-row justify-between px-3 py-2 text-base font-medium",
                                                    (index === 0) ? "hover:rounded-t-md" : ((index === (item.children.length - 1)) ? "hover:rounded-b-md" : ""))}
                                            >
                                                <div><p>{child.name}</p></div>
                                                <div><ChevronRightIcon
                                                    className="text-gray-400 -mr-1 h-5 w-5"
                                                    aria-hidden="true"/>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-2 mb-3 -mt-3">
                            {currentUser ?
                                <div className=" space-y-1 px-2 sm:px-3">
                                    <button
                                        onClick={handleLogout}
                                        className="text-gray-300 hover:text-white hover:font-semibold w-full flex flex-row justify-between rounded-md px-3 py-2 text-base font-medium"
                                    >
                                        <div><p>Log out</p></div>

                                    </button>
                                </div>
                                :
                                <div className=" space-y-1 px-2 sm:px-3">
                                    <button
                                        onClick={() => setCurrentExpandedTab(currentExpandedTab !== "login/signup" ? "login/signup" : "")}
                                        className="text-gray-300 hover:text-white hover:font-semibold w-full flex flex-row justify-between rounded-md px-3 py-2 text-base font-medium"
                                    >
                                        <div><p>Log in/ Sign up</p></div>

                                    </button>

                                    <div className="bg-gray-900 rounded-md mt-1">
                                        {currentExpandedTab === "login/signup" && loginOrSignupNavigation.map((child, index) => (
                                            <Link
                                                key={child.name}
                                                to={child.href}
                                                className={filterAndJoinClasses((index !== (loginOrSignupNavigation.length - 1)) ? " border-b-[0.5px] border-gray-800" : "mb-3",
                                                    "text-gray-300 hover:bg-gray-600 hover:text-white pl-6 flex flex-row justify-between px-3 py-2 text-base font-medium",
                                                    (index === 0) ? "hover:rounded-t-md" : ((index === (loginOrSignupNavigation.length - 1)) ? "hover:rounded-b-md" : ""))}
                                            >
                                                <div><p>{child.name}</p></div>
                                                <div><ChevronRightIcon
                                                    className="text-gray-400 -mr-1 h-5 w-5"
                                                    aria-hidden="true"/>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;