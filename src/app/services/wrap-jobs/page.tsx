import Breadcrumb from "../../component/breadCrumb";

const WrapJobs = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "Services", url: "/services", disabled: true }]}
        title="Services"
      />
      <div>
        <div>
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-8">
                Some Key Points Of Wrap Jobs
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="shadow-none p-4 text-center">
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">
                      <b>1</b>
                    </span>

                    <p>
                      <b> Color Change:</b>
                      <br></br>
                      Vehicle wraps offer the ability to change the color of a
                      vehicle without the need for paint. This allows for
                      customization and personalization according to the owner
                      preferences.
                    </p>
                  </div>

                  <div className="shadow-none p-4 text-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <b>2</b>
                    </span>
                    <p>
                      <b> Protection:</b>
                      <br></br>
                      Wraps provide a protective layer over the vehicle
                      original paint, shielding it from minor scratches, stone
                      chips, and other surface damage. They can also protect
                      against UV rays, which can cause paint fading and
                      deterioration over time.{" "}
                    </p>
                  </div>

                  <div className="shadow-none p-4 text-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <b>3</b>
                    </span>
                    <p>
                      <b> Temporary or Permanent:</b>
                      <br></br>
                      Vehicle wraps can be applied as a temporary solution for
                      promotions, events, or personal preferences. They can also
                      be applied as a more permanent solution for long-term
                      color changes or branding purposes{" "}
                    </p>
                  </div>

                  <div className="shadow-none p-4 text-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <b>4</b>
                    </span>

                    <p>
                      <b> Customization:</b>
                      <br></br>
                      Wraps offer endless customization options, including
                      custom graphics, patterns, textures, and finishes such as
                      matte, gloss, satin, or metallic. This allows for unique
                      and eye-catching designs tailored to individual tastes.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    Supreme Motor Company, where we transform your vehicle into
                    a work of art with our exceptional Wrap Jobs service. Our
                    expert team of designers and installers are dedicated to
                    providing top-notch craftsmanship and attention to detail,
                    ensuring that your vehicle stands out on the road in the
                    most stylish and personalized way possible. Customized
                    Vehicle Wraps: Make a Statement on the Road At Supreme Motor
                    Company, we understand that your vehicle is an extension of
                    your personality. Our Wrap Jobs service allows you to
                    express your individuality and make a bold statement with a
                    customized vehicle wrap. Whether you are looking for a sleek
                    matte finish, a vibrant color change, or a custom graphic
                    design, we have the expertise to bring your vision to life.
                  </p>
                  <br></br>
                  <button className="bg-red px-4 py-2 hover:bg-red text-white text-md lowecase tracking-widest-  hover:text-blue font-bold rounded object">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapJobs;
