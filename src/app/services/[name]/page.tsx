'use client'
import Breadcrumb from "@/app/component/breadCrumb"
import { toggleModal } from "@/app/state/slice";
import { services } from "@/app/utilis/services"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";


const ServiceDetails = ({ params }: { params: { name: string } }) => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const matchedService = services.find(service => service.path.split('/').pop() === params.name);

    if (!matchedService) {
        if (typeof window !== 'undefined') {
            router.push('/404');
        }
        return null;
    }

    return (
        <>
            <Breadcrumb
                paths={[{ title: "Services", url: "/services", disabled: false },
                { title: matchedService.title, url: matchedService.path, disabled: true }]}
                title={matchedService.title}
            />
            <div className="container mx-auto max-w-screen-xl py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {
                            matchedService?.keyPoint?.map((points, index) => (
                                <div key={index}>
                                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-red lg:h-12 lg:w-12">
                                        <span className="text-white font-semibold text-xl">{index + 1}</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-red mb-2">{points?.title}</h4>
                                    <p className="text-gray">{points?.description}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <p className="text-gray">{matchedService?.description}</p>
                        <button
                            onClick={() => dispatch(toggleModal())}
                            className="inline-block border-none rounded-xl text-center bg-red text-white 
                font-bold text-md uppercase px-8 py-4 overflow-hidden w-full md:w-auto my-4">Book Appointment</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;


