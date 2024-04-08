import Breadcrumb from "../../component/breadCrumb"


const InteriorModifications = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'Services', url: '/services', disabled: true }]} title="Services" />
            <div>
            <div>
        <div>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
             Some Key Points Of Interior Modification
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="shadow-none p-4 text-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <b>1</b>
                  </span>

                  <p>
                    <b>Customization:</b>
                    <br></br>
 Interior modifications allow vehicle owners to personalize their vehicles according to their preferences, lifestyle, and needs. This includes changes to the upholstery, trim, lighting, dashboard, and other interior components.
                  </p>
                </div>

                <div className="shadow-none p-4 text-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <b>2</b>
                  </span>
                  <p>
                    <b> Enhanced Comfort:</b>
                    <br></br>
                     Upgrading the interior of a vehicle can improve comfort levels for passengers and drivers alike. This may include installing ergonomic seats, adding additional padding, or upgrading the climate control system for better temperature regulation.
                  </p>
                </div>

                <div className="shadow-none p-4 text-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <b>3</b>
                  </span>
                  <p>
                    <b>Technology Integration:</b>
                    <br></br>
 Integrating modern technology into the vehicle's interior can enhance connectivity and entertainment options. This may include installing touchscreen displays, smartphone integration, wireless charging pads, or smart home integration.
                  </p>
                </div>

                <div className="shadow-none p-4 text-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-left font-semibold text-gray-700 mr-2 mb-2 ">
                    <b>4</b>
                  </span>

                  <p>
                    <b>Safety Enhancements:</b>
                    <br></br>
                    Interior modifications can also focus on improving safety features within the vehicle. This may involve installing aftermarket safety devices such as dash cams, backup cameras, parking sensors, or advanced airbag systems.
                  </p>
                </div>
              </div>

              <div>
                <p>
                Supreme Motor Company, where luxury meets innovation! Transform the interior of your vehicle into a haven of sophistication and comfort with our unparalleled Interior Modifications services. Our expert team is dedicated to enhancing every detail of your driving experience, ensuring that your car's interior reflects your style and exceeds your expectations. Luxury Reimagined: Interior Modifications at Supreme Motor Company Custom Upholstery: Immerse yourself in luxury with our bespoke upholstery services. Choose from a range of premium materials, including fine leather, Alcantara, and exotic fabrics, to craft a custom interior that speaks to your unique taste. Our skilled craftsmen meticulously tailor every detail to ensure a perfect fit and finish. State-of-the-Art Entertainment Systems: Elevate your driving experience with cutting-edge entertainment technology. From high-end audio systems and advanced infotainment units to custom-designed multimedia installations, our Interior Modifications will turn your vehicle into a mobile entertainment sanctuary.
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
    )
}

export default InteriorModifications