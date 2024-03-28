import Breadcrumb from "../component/breadCrumb"


const Contact = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'Contact', url: '/contact', disabled: true }]} title="Contact" />
            <div>Contact</div>
        </>
    )
}

export default Contact