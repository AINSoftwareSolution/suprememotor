"use client";
import Image from "next/image";
import Banner from "./component/banner";
import ServiceCard from "./component/servicecard";
import { services } from "./utilis/services";
import { ServiceType } from "./utilis/type";
import AboutUs from "../app/images/about.png";
import Link from "next/link";
import RecentWork from "./component/recentWork";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import { toggleModal } from "./state/slice";
import Support from "../app/images/supportImg.png";
import Solution from "../app/images/solutionImg.png";
import CMS from "../app/images/cmsImg.png";
import WhyChoose from "../app/images/rightsideImg.png";
const Home = () => {
  const disaptch = useDispatch<AppDispatch>();

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
                width={300}
                height={300}
                alt="car services in pune"
                className="w-full h-full rounded border py-4"
              />
            </div>
            {/* Right column */}
            <div className="md:col-span-1">
              <h2 className="sub-title">KNOW ABOUT US</h2>
              <h1 className="title">
                Where Expertise Meets <br /> Every Engine
              </h1>
              <p className="my-4 text-[#596277] ">
                Welcome to Supreme Motor Company! A one-stop destination for all
                your car restoration and custom paint jobs at a very affordable
                price range in INDIA.
              </p>

              <p className="my-4 text-[#596277] ">
                We offer cashless insurance claims with almost all available
                companies in the market, which means, you can easily drop off
                your car at our body-shop and let us take care of the rest. We
                handle insurance claims with just as much attention and honesty
                as we handle our custom paint jobs. We promise Grade-A material
                application and the best possible finish on your car.
              </p>
              <ul className="list-disc leading-9 list-inside text-[#596277] font-[600]">
                <li>Cashless Insurance Claim</li>
                <li>Hassle-Free Process</li>
                <li>Quality Assurance</li>
                <li>Quick and Efficient Car Repairs</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4"
              >
                Contact Us Now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance */}
      <section className="bg-[#dc354514]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="container mx-auto max-w-screen-xl text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 text-black">
              Cashless Insurance Claim
            </h2>
            <p className="mb-6  text-[#596277] md:text-lg">
              Getting your brand new car painted just because of a small
              accident could be a hassle. Claiming insurance and getting the
              right quality paint job is what worries most of the people. We
              offer cashless insurance claims with almost all available
              companies in the market, which means, you can easily drop off your
              car at our body-shop and let us take care of the rest. We handle
              insurance claims with just as much attention and honesty as we
              handle our custom paint jobs. We promise Grade-A material
              application and the best possible finish on your car.
            </p>
            <button
              onClick={() => disaptch(toggleModal())}
              type="submit"
              className="inline-block border-none rounded-xl text-center bg-red text-white 
              font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4"
            >
              Book Apointement
            </button>
          </div>
        </div>
      </section>

      {/* services */}
      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="sub-title sub-title-after style1">Our Services</h2>
              <h1 className="title">
                Professional Car Repair The Best Services
              </h1>
            </div>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-12">
            {services?.map((service: ServiceType) => (
              <ServiceCard service={service} key={service?.title} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}

      <div className="container mx-auto max-w-screen-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            {/* Left column */}
            <h2 className="sub-title">car mechanic</h2>
            <h1 className="title">Make your car feel like a brand new one</h1>
            <p className="text-[#596277]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, a.
              Inventore iure ad mollitia fugit neque itaque adipisci repellat
              dicta cumque tempore? Veniam incidunt nisi optio eaque mollitia!
              Sunt, reiciendis?
            </p>

            <div className="flex mt-3">
              <div className="w-1/3 px-2">
                <div className="bg-red rounded-lg mt-4 p-4">
                  <span className="l-img">
                    <Image src={Support} width={80} height={80} alt="" />
                  </span>

                  <h3 className="text-lg font-bold mt-4">Best Support</h3>
                  <p className="mt-0">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
              </div>

              <div className="w-1/3 px-2">
                <div className="bg-red rounded-md mt-4 p-4">
                  <span className="2-img">
                    <Image src={CMS} width={80} height={80} alt="" />
                  </span>

                  <h3 className="text-lg font-bold mt-4">Best CSM</h3>
                  <p className="mt-0">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="bg-red  rounded-lg mt-4 p-4">
                  <span className="3-img">
                    <Image src={Solution} width={80} height={80} alt="" />
                  </span>
                  <h3 className="text-lg font-bold mt-4">Best Solution</h3>
                  <p className="mt-0">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-1 flex items-center justify-center">
            <Image
              src={WhyChoose}
              alt="car services in pune"
              className="w-full h-auto rounded border"
            />
          </div>
        </div>
      </div>

      {/* book apointment */}

      <div className="px-6 ">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="bg-cover  CTA px-4 py-8 text-white rounded-xl">
            <h6 className="text-3xl font-bold  uppercase mb-2">
              Explore Our YouTube Channel
            </h6>
            <h4 className="text font-bold mb-4">
              Check out our latest videos to learn more about our services.
            </h4>
            <Link
              href="https://www.youtube.com/channel/UC03CDmnGrz3zpqPieKloz8Q"
              target="_blank"
              className="inline-block border-none rounded-xl text-center bg-red text-white 
              font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4"
            >
              {" "}
              Watch Videos
            </Link>
          </div>
        </div>
      </div>

      {/* recent work */}

      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="sub-title sub-title-after style1">Recent Work</h2>
              <h1 className="title">Where Expertise Meets Every Project</h1>
            </div>
          </div>
          <div className="mt-12">
            <RecentWork />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
