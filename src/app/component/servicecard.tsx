import Image from "next/image"
import Link from "next/link"
import { ServiceType } from "../utilis/type"

const ServiceCard: React.FC<{ service: ServiceType }> = ({ service }) => {
    const { image, title } = service

    return (
        <div className="service-card bg-white rounded-lg shadow-md overflow-hidden h-full relative grid grid-cols-12 gap-4">
            <div className="service-card_img col-span-4">
                <Image className=" h-full w-full transition-transform duration-300 transform hover:scale-110"
                    src={image} alt={title}
                    width={100} height={10}
                />
            </div>
            <div className="col-span-8">
                <h4 className="font-bold text-md md:text-xl">
                    <Link href="">{title}</Link>
                </h4>

                <button className="inline-flex items-center text-sm  text-red font-bold absolute bottom-4">
                    Book Apointment
                    <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                    </svg>
                </button>

            </div>
        </div>

    )
}

export default ServiceCard