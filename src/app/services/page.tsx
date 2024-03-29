import Breadcrumb from "../component/breadCrumb"


const Services = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'Services', url: '/services', disabled: true }]} title="Services" />
            <div>Services</div>
        </>
    )
}

export default Services