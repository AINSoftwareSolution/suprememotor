"use client"
import Link from "next/link"
import Image from "next/image"
import { useDispatch } from "react-redux"

import { services } from "../utilis/services"
import { Logo } from "../images"
import { AppDispatch } from "../state/store"
import { toggleModal } from "../state/slice"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    const disaptch = useDispatch<AppDispatch>()

    return (
        <footer className="bg-dark text-white px-6">
            <div className="container mx-auto max-w-screen-xl  py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={Logo}
                                className="me-3"
                                alt="car washing center near me"
                                width={150}
                                height={150} />
                        </Link>

                    </div>
                    <div>
                        <h2 className="mb-6 mt-6 md:mt-0 text-sm font-semibold uppercase sub-title">Services</h2>
                        <ul className="text-gray-500 font-medium">
                            {
                                services.map((service) => (
                                    <li className="mb-4" key={service?.title}>
                                        <Link href={service?.path} className="hover:underline">{service?.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 mt-6 md:mt-0 text-sm font-semibold uppercase sub-title">contact us</h2>
                        <div className="text-gray-500 font-medium">
                            <address className="mb-4">Mohammed Wadi, NIBM Annexe, Opposite Star Bazaar</address>
                            <Link href="tel:+91 9923380103" >+91 9923380103</Link>
                        </div>
                        <div className="flex gap-4 mt-6 flex-wrap w-full">
                            <button
                                className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto"
                                onClick={() => disaptch(toggleModal())}><h6>Book Apointment</h6></button>
                            <Link href="/contact"
                                className="inline-block border border-white rounded-xl text-center text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto">Ask Queries</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2024 <Link href="/" className="hover:underline">Supreme Motor Company</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4  gap-4 sm:justify-center sm:mt-0">
                        <Link href="https://www.facebook.com/suprememotorco/" className="text-gray-500 hover:text-red " target="_blank">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.youtube.com/@suprememotorcompany" className="text-gray-500 hover:text-red " target="_blank">
                            <FaYoutube />
                        </Link>
                        <Link href="https://www.instagram.com/suprememotorcompany?igsh=MW9hOWNnbmU3NndnNg==" className="text-gray-500 hover:text-red " target="_blank">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer