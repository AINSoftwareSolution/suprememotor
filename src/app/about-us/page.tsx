import Breadcrumb from "../component/breadCrumb"


const About = () => {
    return (
        <>
            <Breadcrumb paths={[{ title: 'About', url: '/about-us', disabled: true }]} title="About Us" />
            <div>About</div>
        </>
    )
}

export default About