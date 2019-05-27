import Layout from '../component/my_layout'
const index = (props) => (
        <>
            <Layout title={props.title}/>
            <dev>
            </dev>
        </>
)

index.getInitialProps = async args => {
    const title = 'top page'
    return {title}
}
export default index
