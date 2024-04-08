import Breadcrumb from "../../component/breadCrumb";

const PaintProtectionFilms = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "Services", url: "/services", disabled: true }]}
        title="Services"
      />
      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Paint Protection Films
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>1</b>
                </span>

                <p>
                  <b> Protection Against Damage:</b>
                  <br></br>
                  PPF provides a protective layer over the vehicle's paint, shielding it from various forms of damage such as stone chips, scratches, bug splatter, bird droppings, and other environmental contaminants.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>2</b>
                </span>
                <p>
                  <b> Transparent and Invisible:</b>
                  <br></br>
                  Modern PPFs are designed to be transparent and virtually invisible, preserving the original appearance of the vehicle's paint while providing protection.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>3</b>
                </span>
                <p>
                  <b>Self-Healing Properties:</b>
                  <br></br>
                  Some high-quality PPFs come with self-healing properties, meaning that minor scratches and swirl marks on the film can disappear over time with exposure to heat.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>4</b>
                </span>

                <p>
                  <b> Easy Maintenance:</b>
                  <br></br>
                  PPFs are easy to clean and maintain, requiring only regular washing with mild soap and water to keep the vehicle looking its best.
                </p>
              </div>
            </div>

            <div>
              <p>
                Supreme Motor Company, where we redefine automotive luxury with
                our meticulous Detailing and Interior Cleaning services. Our
                commitment to excellence ensures that your vehicle not only
                performs at its best but also looks and feels extraordinary.
                Exquisite Detailing: Beyond the Surface Shine Experience the
                pinnacle of automotive detailing with our comprehensive service
                that goes beyond the surface shine. Our expert detailers are
                equipped with the latest tools and techniques to transform your
                vehicle: Paint Correction: Say goodbye to swirls, scratches, and
                imperfections. Our detailing service includes precision paint
                correction, restoring the luster and brilliance of your
                vehicles exterior. Deep Cleaning: We do not just clean; we
                rejuvenate. Our detailing process involves thorough cleaning of
                every nook and cranny, ensuring that dirt, grime, and
                contaminants are banished from every inch of your vehicle.
              </p>
              <br></br>
              <button className="bg-red px-4 py-2 hover:bg-red text-white text-md lowecase tracking-widest-  hover:text-blue font-bold rounded object">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaintProtectionFilms;
