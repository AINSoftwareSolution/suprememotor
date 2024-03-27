import Banner from "./component/banner";
import ServiceCard from "./component/servicecard";
import { services } from "./utilis/services";
import { ServiceType } from "./utilis/type";

const Home = () => {
  return (
    <main className=" min-h-screen">
      <Banner />

      {/* insurance */}
      <div className="insurance px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="md:col-span-1">

            </div>
            {/* Right column */}
            <div className="md:col-span-1">
              <div className="">
                <h6 className="sub-title">KNOW ABOUT US</h6>
                <h4 className="title">Where Expertise Meets <br /> Every Engine</h4>
              </div>
              <ul className="list-disc leading-9 list-inside mt-4">
                <li>Cashless Insurance Claim</li>
                <li>Hassle-Free Process</li>
                <li>Quality Assurance</li>
                <li>Quick and Efficient Car Repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* know about us */}
      <div className="about-us px-6">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h6 className="sub-title sub-title-after style1">
                KNOW ABOUT US
              </h6>
              <h4 className="title">
                Professional Car Repair The Best Services
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {services.map((service: ServiceType) => (
              <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-4" key={service?.title}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>


    </main>
  );
}

export default Home
