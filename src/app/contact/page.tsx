'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import Breadcrumb from "../component/breadCrumb"
import { contactData } from "../utilis/type";


const Contact = () => {
    const initalData = {
        email: '',
        subject: '',
        message: ''
    }
    const [formData, setFormData] = useState<contactData>(initalData);
    const [message, setmessage] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) }).then((res) => {
            console.log(message)
            if (res.status == 201) {
                setmessage('Thank you for contacting us!')
                setFormData(initalData)
            } else {
                setmessage('Something Went wrong! Try Again!')
            }
        })
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
            <Breadcrumb paths={[{ title: 'Contact', url: '/contact', disabled: true }]} title="Contact" />

            <div className="container mx-auto max-w-screen-xl py-12 px-12">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30275.508605171406!2d73.906759!3d18.463783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea66077e08db%3A0x3a7494cf01339d3c!2sSupreme%20Motor%20Company!5e0!3m2!1sen!2sin!4v1711633794639!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <p className="sub-title">Contact Us for Expert Car Services</p>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                            <input type="email" id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="shadow-sm  border border-gray text-gray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@supreme.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                            <input type="text" id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="block p-3 w-full text-sm text-gray  rounded-lg border border-gray shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                            <textarea id="message" rows={6} name="message"
                                onChange={handleInputChange}
                                value={formData.message}
                                className="block p-2.5 w-full text-sm text-gray  rounded-lg shadow-sm border border-gray focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                        </div>
                        <p className="text-gray">{message}</p>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red sm:w-fit focus:outline-none">Send message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact