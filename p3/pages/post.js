import {withRouter} from 'next/router'
import Layout from '../components/my_layout'

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.hoge}</h1>
        <p>this is the blog post content.</p>
    </div>
))

const Page = (props) => (
    <Layout title={props.title}>
        <Content />
    </Layout>
)

Page.getInitialProps = async args => {
    const title = 'post page'
    return {title}
}

export default Page