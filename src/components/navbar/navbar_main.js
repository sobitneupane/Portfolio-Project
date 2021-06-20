import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Home from "../home/home_main"
import Blogs from "../blogs/blogs_main"
import Projects from "../projects/projecs_main"
// import NavbarUI from "./navbar_tailwind"

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '/project', current: false },
    { name: 'Blogs', href: '/blog', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {


    const [navClick, setnavClick] = useState(0)

    function handleNavClick(index) {
        setnavClick(index)
    }
    return (
        <Router>
            <nav className="sticky top-0 z-50">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                                <div className="relative flex items-center justify-between h-16">
                                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                        {/* Mobile menu button*/}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                        <div className="flex-shrink-0 flex items-center">
                                            <h2 className={"text-white"}>Sobit Neupane</h2>
                                        </div>
                                        <div className="hidden sm:block sm:ml-6">
                                            <div className="flex space-x-4">
                                                {navigation.map((item, index) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        onClick={() => handleNavClick(index)}
                                                        className={classNames(
                                                            index === navClick ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={index === navClick ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item, index) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => handleNavClick(index)}
                                            className={classNames(
                                                index === navClick ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={index === navClick ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </nav>
            <main className="relative">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/blog" component={Blogs} />
                    <Route path="/project" component={Projects} />
                    <Route render={() => <h1>404: page not found</h1>} />
                </Switch>
            </main>
        </Router>
    )
}


export default Navbar;