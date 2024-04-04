import Image from 'next/image';
import bannerShape from '../images/banner_shape.png';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="hero-wrapper bg-cover bg-top pt-28 text-white px-4 lg:px-6 relative">
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex justify-center text-center">
                    <div className="hero-style1 py-24 relative">
                        <h1 className="hero-title text-white font-extrabold text-6xl leading-[1.3] ">
                            One Stop For All Your <br />
                            <span className='relative z-[1]'>Car Solutions
                                <span className="inline-block absolute top-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-animate z-[-1]">
                                    <Image
                                        width={200}
                                        height={200}
                                        src={bannerShape}
                                        alt=" a car body shop"
                                    />
                                </span>
                            </span> {" "}
                        </h1>

                        <div className="flex gap-4 mt-6 flex-wrap w-full justify-center">
                            <Link href="/about-us"
                                className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto">Learn About Us</Link>
                            <Link href="/services"
                                className="inline-block border border-white rounded-xl text-center text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
