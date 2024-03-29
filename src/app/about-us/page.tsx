import Link from "next/link"
import Breadcrumb from "../component/breadCrumb"
import { benifits } from "../utilis/benifits"


const About = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'About', url: '/about-us', disabled: true }]} title="About Us" />
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {/* <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2" />
                    <img
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1" /> */}
                </div>
                <div className="font-light sm:text-lg">
                    <h2 className="title ">One Stop For All Your Car Solutions</h2>
                    <p className="my-4">
                        Welcome to Supreme Motor Company, your ultimate destination for car restoration and custom paint jobs in
                        India! Located in Pune, our workshop is equipped to provide top-notch services tailored to your cars needs.
                        Whether its a vintage restoration project or a modern custom paint job, we have got you covered.
                    </p>

                    <p>
                        At Supreme Motor Company, we take pride in delivering top-notch services that exceed your expectations.
                        Trust us for all your car service needs, and lets elevate your driving experience together
                    </p>

                    <Link href='/contact' className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4">
                        Contact Us Now!
                    </Link>
                </div>
            </div>

            <div className="about-us px-6">
                <div className="container mx-auto max-w-screen-xl py-12">
                    <div className="flex justify-center">
                        <div className="text-center">
                            <h6 className="sub-title sub-title-after style1">
                                Benifits
                            </h6>
                            <h4 className="title">
                                Why choose Supreme Motor Company?
                            </h4>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-8 ">
                        {
                            benifits.map((benifit, index) => (
                                <div className="p-6" key={index}>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red lg:h-12 lg:w-12">
                                        <span className="text-white font-semibold text-xl">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-red mb-2">{benifit?.title}</h3>
                                    <p>{benifit?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About