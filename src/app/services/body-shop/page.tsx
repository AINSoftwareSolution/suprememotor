import Breadcrumb from "../../component/breadCrumb";

const BodyShop = () => {
  return (
    <>
      <Breadcrumb
        paths={[{ title: "Services", url: "/services", disabled: true }]}
        title="Services"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Key Points for Body Shop Denting and Painting
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>1</b>
              </span>
              <p>
                <b>Quality Materials:</b>
                <br></br>
                Ensure that the body shop uses high-quality paint and materials
                that are durable and long-lasting.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>2</b>
              </span>
              <p>
                <b>Skilled Technicians:</b>
                <br></br>
                Look for a body shop with experienced and skilled technicians
                who are trained in dent repair and painting techniques.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>3</b>
              </span>
              <p>
                <b>Advanced Equipment:</b> <br></br>
                Check if the body shop has modern equipment and tools for dent
                repair, such as paint booths, spray guns, and dent removal
                tools.
              </p>
            </div>

            <div className="shadow-none p-4 text-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <b>4</b>
              </span>
              <p>
                <b>Color Matching:</b> <br></br>
                The body shop should be capable of accurately matching the paint
                color of your vehicle to ensure a seamless finish.
              </p>
            </div>
          </div>

          <div>
            <p>
              Supreme Motor Company, where precision meets perfection in our
              state-of-the-art Body Shop. Our expert team of technicians is
              dedicated to restoring your vehicles beauty and structural
              integrity with our top-notch Denting and Painting services. Trust
              us to bring your vehicle back to its original glory and beyond.
              Denting Services: Precision and Expertise At Supreme Motor
              Company, we understand that even the smallest dents can be a
              source of frustration. Our skilled technicians utilize the latest
              techniques and tools to ensure flawless dent repair: Precision
              Dent Removal: Whether its a minor door ding or a more significant
              dent, our technicians employ advanced dent removal methods to
              restore your vehicles body panels to their original condition with
              precision and care. Paintless Dent Repair (PDR): In cases where
              the paint is undamaged, we offer Paintless Dent Repair. This
              technique preserves your vehicles factory finish.
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

export default BodyShop;
