import Link from "next/link";
import Breadcrumb from "../component/breadCrumb";
import { benifits } from "../utilis/benifits";
import about1 from "../images/about.png";
import about2 from "../images/6-1.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "About", url: "/about-us", disabled: true }]}
        title="About Us"
      />
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={about1}
            width={200}
            height={200}
            alt="car repair services"
          />
          <Image
            className="w-full rounded-lg"
            src={about2}
            width={200}
            height={200}
            alt="paint on car"
          />
        </div>
        <div>
          <h2 className="title ">One Stop For All Your Car Solutions</h2>
          <p className="my-4 text-gray">
            Welcome to Supreme Motor Company,50 years of expertise, we are the
            go-to destination for all your car needs, providing exceptional car
            repairing services in Pune. Our skilled technicians are dedicated to
            delivering quality workmanship, ensuring your vehicle runs smoothly
            and efficiently.
          </p>

          <p className="text-gray">
            At Supreme Motor Company, Our extensive range of services includes
            professional denting and painting of cars in Pune. We use advanced
            techniques and high-quality materials to restore your car
            appearance, making it look as good as new. Whether it's minor dents
            or major bodywork, our team has you covered.
          </p>

          <Link
            href="/contact"
            className="inline-block border-none rounded-xl text-center bg-red text-white 
                             font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4"
          >
            Contact Us Now!
          </Link>
        </div>
      </div>

      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="sub-title sub-title-after style1">Benifits</h2>
              <h1 className="title">Why choose Supreme Motor Company?</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-8 ">
            {benifits.map((benifit, index) => (
              <div className="p-6" key={index}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red lg:h-12 lg:w-12">
                  <span className="text-white font-semibold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-red mb-2">
                  {benifit?.title}
                </h3>
                <p className="text-gray">{benifit?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
