import Layout from '../component/my_layout'
const About = (props) => {
    return (
        <>
            <Layout title={props.title}/>
            <dev>
            </dev>
        </>
    )
}

About.getInitialProps = async args => {
    const title = 'About'
    return {title}
}
export default About
