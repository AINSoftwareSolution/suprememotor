import Banner from "./component/banner";
import ServiceCard from "./component/servicecard";
import { services } from "./utilis/services";
import { ServiceType } from "./utilis/type";

const Home = () => {
  return (
    <main className=" min-h-screen">
      <Banner />

      {/* know about us */}
      <div className="about-us">
        <div className="container mx-auto max-w-screen-xl py-12">
          <div className="flex justify-center">
            <div className="text-center">
              <h6 className="sub-title style1">
                KNOW ABOUT US
              </h6>
              <h4 className="title">
                Professional Car Repair The Best Services
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {services.map((service: ServiceType) => (
              <div className="col-span-1 md:col-span-2 lg:col-span-1 mt-4">
                <ServiceCard service={service} key={service?.title} />
              </div>
            ))}
          </div>
        </div>
      </div>


    </main>
  );
}

export default Home
