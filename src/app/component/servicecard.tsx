import Image from "next/image"
import Link from "next/link"
import { ServiceType } from "../utilis/type"
import { useState } from "react"

const ServiceCard:React.FC<{ service: ServiceType }> = ({ service}) => {
    const {  title, logo , path} = service

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center text-center service-card" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            <div className={`flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary-100 lg:h-24 lg:w-24 
                            transition-transform duration-300 ease-in-out transform ${isHovered ? 'scale-125' : 'scale-90'}`}>
                <Image src={logo} width={200} height={200} alt={title} />
            </div>
            <Link href={path} className={`mb-2 text-xl font-bold hover:text-red ${isHovered ? 'text-red' : ''}`}>{title}</Link>
        </div>
    );
}

export default ServiceCard;
