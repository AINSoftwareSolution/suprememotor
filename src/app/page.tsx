"use client"
import Image from "next/image";
import Banner from "./component/banner";
import ServiceCard from "./component/servicecard";
import { services } from "./utilis/services";
import { ServiceType } from "./utilis/type";
import AboutUs from '../app/images/about.png'
import Link from "next/link";
import RecentWork from "./component/recentWork";

const Home = () => {
  return (
    <main className=" min-h-screen">
      <Banner />

      {/* insurance */}
      <div className="insurance px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="md:col-span-1 ">
              <Image
                src={AboutUs}
                width={300} height={300}
                alt='car services'
                className="w-full h-full rounded border py-4" />

            </div>
            {/* Right column */}
            <div className="md:col-span-1">
              <h2 className="sub-title">KNOW ABOUT US</h2>
              <h1 className="title">Where Expertise Meets <br /> Every Engine</h1>
              <p className="my-4">Welcome to Supreme Motor Company!
                A one-stop destination for all your car restoration and custom paint jobs at a
                very affordable price range in INDIA.</p>

              <p className="my-4">
                We offer cashless insurance claims with almost all available companies in the market, which means,
                you can easily drop off your car at our body-shop and let us take care of the rest.
                We handle insurance claims with just as much attention and honesty as we handle our custom paint jobs.
                We promise Grade-A material application and the best possible finish on your car.
              </p>
              <ul className="list-disc leading-9 list-inside">
                <li>Cashless Insurance Claim</li>
                <li>Hassle-Free Process</li>
                <li>Quality Assurance</li>
                <li>Quick and Efficient Car Repairs</li>
              </ul>

              <Link href='/contact' className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4">
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="sub-title sub-title-after style1">
                Our Services
              </h2>
              <h1 className="title">
                Professional Car Repair The Best Services
              </h1>
            </div>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-12">
            {services.map((service: ServiceType) => (
              <ServiceCard service={service} key={service?.title} />
            ))}
          </div>
        </div>
      </div>

      {/* book apointment */}

      <div className="px-6 ">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="bg-cover  CTA px-4 py-8 text-white rounded-xl">
            <h6 className="text-3xl font-bold  uppercase mb-2">Explore Our YouTube Channel</h6>
            <h4 className="text font-bold mb-4">Check out our latest videos to learn more about our services.</h4>
            <a href="https://www.youtube.com/channel/UC03CDmnGrz3zpqPieKloz8Q" target="_blank"
              className="inline-block border-none rounded-xl text-center bg-red text-white 
              font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4"> Watch Videos</a>
          </div>
        </div>
      </div>


      {/* recent work */}

      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="sub-title sub-title-after style1">
                Recent Work
              </h2>
              <h1 className="title">
                Where Expertise Meets Every Project
              </h1>
            </div>
          </div>
          <div className="mt-12">
            <RecentWork />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home
