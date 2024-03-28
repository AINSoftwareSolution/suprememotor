"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormData } from "../utilis/type";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { toggleModal } from "../state/slice";

const BookAppointment: React.FC = () => {

    const isModalOpen = useSelector((state: RootState) => state.modalReducer.isModalOpen);

    console.log(isModalOpen)
    const dispatch = useDispatch<AppDispatch>()

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: '',
        phone: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        dispatch(toggleModal())
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <>
            {isModalOpen && (
                <div id="crud-modal" className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-dark bg-opacity-70">
                    <div className="relative p-2 w-full max-w-md bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Book Apointement
                            </h3>
                            <button
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={() => dispatch(toggleModal())}
                            >
                                <svg className="w-3 h-3" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Please enter your name..."
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Id</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Please enter your email Id..."
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Contact</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Please enter your contact..."
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-red focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Book Apointement
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookAppointment;
