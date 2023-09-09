import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Feeder', href: '/feeder', current: false },
    { name: 'Cruiser', href: '/cruiser', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'About', href: '/about', current: false },
]
const userNavigation = [
    { name: 'Help', href: '/help' },
    { name: 'Log in', href: '/login' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <Disclosure as="nav" className="bg-black pb-1 border-b border-white/10">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                {/* Mobile menu button */}
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                {/*Nav LHS - Logo & Buttons (Feeder, Cruiser, Projects, About)*/}
                                <div className="flex flex-shrink-0 items-center">
                                    <a href={"/"}>
                                        <p className="text-white text-2xl font-bold">
                                            TRiBE
                                        </p>
                                    </a>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/*Nav RHS - Help, Log in, Sign up*/}
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="hidden mr-3 md:ml-6 md:flex md:items-center md:space-x-4">
                                        {userNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={'text-gray-300 px-3 py-2 text-sm font-medium'}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="flex-shrink-0">
                                        <a href={"/signup"}>
                                            <button
                                                type="button"
                                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            >
                                                Sign up
                                            </button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Mobile menu, show/hide based on menu state.*/}
                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-white/10 py-3">
                            <div className=" space-y-1 px-2 sm:px-3">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar;