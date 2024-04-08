import Breadcrumb from "@/app/component/breadCrumb";

const CeramicandGrapheneCoating = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "Services", url: "/services", disabled: true }]}
        title="Services"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ceramic and Graphene Coating
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>1</b>
              </span>
              <p>
                <b>Durability:</b> <br></br>
                Exceptional resistance against scratches, abrasion, and
                chemicals.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>2</b>
              </span>
              <p>
                <b>Heat Resistance:</b> <br></br>
                Suitable for high-temperature applications, such as automotive
                components.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>3</b>
              </span>

              <p>
                <b>High Thermal Conductivity:</b> <br></br>
                Efficient heat dissipation for enhanced thermal management.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>4</b>
              </span>
              <p>
                <b>Chemical Resistance:</b> <br></br>
                Guards against corrosion and degradation caused by harsh
                substances.
              </p>
            </div>
          </div>

          <div>
            <p>
              Ceramic Coatings: Unrivaled Protection, Lasting Brilliance Our
              Ceramic Coatings service offers a revolutionary way to shield your
              vehicles exterior from the harsh elements of the road. The
              nano-ceramic technology forms a durable and transparent layer over
              your cars paint, providing: 1. Ultimate Protection: Resist
              scratches, stone chips, bird droppings, tree sap, and harsh
              weather conditions. Our Ceramic Coating creates a robust barrier
              against external contaminants, ensuring your vehicles paint
              remains in pristine condition 2. Enhanced Gloss: Enjoy a
              showroom-quality shine that lasts. The Ceramic Coating enhances
              the depth and richness of your vehicles. 3.Easy Maintenance: Say
              goodbye to frequent waxing. and our coating offers: 1. Heat
              Resistance: Graphenes exceptional thermal conductivity ensures
              superior heat resistance. Shield your vehicles surface from the
              suns intense rays, preventing paint fade and damage over time.
            </p>

            <br></br>
            <button className="bg-red px-4 py-2 hover:bg-red text-white text-md lowecase tracking-widest-  hover:text-blue font-bold rounded object">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CeramicandGrapheneCoating;
