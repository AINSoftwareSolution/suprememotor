
import Image from 'next/image';
import bannerImg from '../images/banner.png'
import bannerShape from '../images/banner_shape.png'
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="hero-wrapper bg-cover bg-center pt-28 text-white px-4 lg:px-6">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:flex lg:flex-row-reverse items-center">
                    <div className="hero-style1">
                        <h1 className="hero-title text-white font-extrabold text-6xl relative leading-[1.3] z-[1]">
                            One Stop For All Your <br /> Car Solutions {" "}
                            <span className="inline-block absolute top-24 left-1/3 transform -translate-x-1/2 z-[-1] bg-animate">
                                <Image
                                    width={200}
                                    height={200}
                                    src={bannerShape}
                                    alt="supereme motor"
                                />
                            </span>
                        </h1>

                        <div className="flex gap-4 mt-6 flex-wrap w-full">
                            <Link href="/about"
                                className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto">Learn About Us</Link>
                            <Link href="/services"
                                className="inline-block border border-white rounded-xl text-center text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto">Our Services</Link>
                        </div>
                    </div>

                    <div className="hero-thumb text-center">
                        <Image
                            className='w-full'
                            src={bannerImg}
                            alt="car services"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner