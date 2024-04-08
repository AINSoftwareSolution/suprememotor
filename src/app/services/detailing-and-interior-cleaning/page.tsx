import Breadcrumb from "../../component/breadCrumb";

const DetailingAndInteriorCleaning = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "Services", url: "/services", disabled: true }]}
        title="Services"
      />

      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Detailing and Interior Cleaning
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>1</b>
                </span>

                <p>
                  <b>Exterior Detailing:</b>
                  <br></br>
                  Washing: Thorough cleaning of the exterior using soap, water,
                  and specialized cleaning products to remove dirt, grime, and
                  contaminants.Waxing:Applying wax to protect the paint and
                  provide a shiny finish while also enhancing water beading.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>2</b>
                </span>
                <p>
                  <b>Interior Cleaning:</b>
                  <br></br>
                  Vacuuming:Thoroughly vacuuming carpets, floor mats, seats, and
                  other interior surfaces to remove dust, dirt, and
                  debris.Upholstery and Carpet Cleaning: Using specialized
                  cleaners and brushes to lift stains and restore the appearance
                  of fabric and carpeted surfaces.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>3</b>
                </span>
                <p>
                  <b>Detailing Services:</b>
                  <br></br>
                  Paint Correction: Using abrasive compounds and polishes to
                  remove paint imperfections such as swirl marks, scratches, and
                  oxidation, restoring clarity and shine.Headlight Restoration:
                  Restoring clarity to foggy or yellowed headlights through
                  sanding, polishing, and sealing processes.
                </p>
              </div>

              <div className="shadow-none p-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <b>4</b>
                </span>

                <p>
                  <b>Additional Services:</b>
                  <br></br>
                  Odor Removal: Using ozone generators, air purifiers, or
                  specialized treatments to eliminate odors caused by smoke,
                  pets, food spills, or mold.Fabric Protection: Applying fabric
                  protectants to upholstery and carpeting to repel spills and
                  stains, prolonging their lifespan.
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
                correction, restoring the luster and brilliance of your vehicles
                exterior. Deep Cleaning: We do not just clean; we rejuvenate.
                Our detailing process involves thorough cleaning of every nook
                and cranny, ensuring that dirt, grime, and contaminants are
                banished from every inch of your vehicle.
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

export default DetailingAndInteriorCleaning;
