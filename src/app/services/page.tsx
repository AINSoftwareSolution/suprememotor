"use client"
import Breadcrumb from "../component/breadCrumb"
import ServiceCard from "../component/servicecard"

import { services } from "../utilis/services"
import { ServiceType } from "../utilis/type"

const Services = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'Services', url: '/services', disabled: true }]} title="Services" />
            <div className="about-us px-6">
                <div className="container mx-auto max-w-screen-xl py-12">
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-12">
                        {services.map((service: ServiceType) => (
                            <ServiceCard service={service} key={service?.title} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services