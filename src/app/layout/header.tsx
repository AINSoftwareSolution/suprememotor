"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../images/logo.png'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { toggleModal } from "../state/slice";
import { services } from "../utilis/services";

const Header: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [collapse, setCollapse] = useState<boolean>(false)
    const [isDropDown, setIsDropDown] = useState<boolean>(false)
    const disaptch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
            const handleScroll = () => {
                window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <header>
                <nav className={`border-gray-200  lg:px-6 py-2.5 fixed w-full z-10 transition-all text-white
                 ${isActive ? "bg-dark py-4 shadow-md" : "bg-none py-6"} `}>
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <Image src={Logo}
                                className="mr-3"
                                alt="supereme motor"
                                width={100}
                                height={100} />

                        </Link>
                        <div className="flex items-center lg:order-2">
                            <button
                                onClick={() => disaptch(toggleModal())}
                                className="text-white bg-red  font-medium rounded-lg text-sm px-4 
                            lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Book Apointment</button>
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                onClick={handleCollapse}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
                                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className={`${!collapse ? 'hidden' : 'block bg-dark'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                {
                                    [['/', 'Home'], ['/about-us', 'About'], ['/contact', 'Contact'],]
                                        .map(([url, title]) => (
                                            <li key={title}>
                                                <Link
                                                    href={url}
                                                    className="block py-2 pr-4 pl-3 t  border-b border-gray
                                                            lg:hover:bg-transparent lg:border-0 lg:hover:text-red lg:p-0">
                                                    {title}
                                                </Link>
                                            </li>
                                        ))
                                }

                                <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                        onClick={() => setIsDropDown(!isDropDown)}
                                        className="flex items-center justify-between block py-2 pr-4 pl-3 t  border-b border-gray
                                        lg:hover:bg-transparent lg:border-0 lg:hover:text-red lg:p-0 relative">
                                        Services
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownNavbar"
                                        className={`${!isDropDown ? 'hidden' : 'block'} absolute 
                                        z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-44`}>
                                        <ul className="py-2 text-sm text-dark" aria-labelledby="dropdownLargeButton">
                                            {
                                                services.map((service) => (
                                                    <li key={service.title}>
                                                        <Link href={service?.path} className="block px-4 py-2 hover:text-red font-medium">{service.title}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;