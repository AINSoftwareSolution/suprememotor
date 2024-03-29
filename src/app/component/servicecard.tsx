import Image from "next/image"
import Link from "next/link"
import { ServiceType } from "../utilis/type"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../state/store"
import { toggleModal } from "../state/slice"

const ServiceCard: React.FC<{ service: ServiceType }> = ({ service }) => {
    const { image, title, logo } = service
    const disaptch = useDispatch<AppDispatch>()

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-24 lg:w-24">
                <Image src={logo} width={200} height={200} alt={title} />
            </div>
            <h3 className="mb-2 text-xl font-bold ">{title}</h3>
            {/* <p >Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p> */}
        </div>
    )
}

export default ServiceCard