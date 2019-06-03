import Layout from '../components/my_layout'
import Link from 'next/link'


const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?hoge=${props.hoge}`} >
            <a>{props.hoge}</a>
        </Link>
    </li>
)

const Index = (props) => (
    <>
        <Layout title={props.title}>
            <PostLink id="hello-nextjs" hoge="Hello Next.js" />
            <PostLink id="learn-nextjs" hoge="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs" hoge="Deploy apps with Zeit" />
        </Layout>
    </>
)

Index.getInitialProps = async args => {
    const title = 'top page'
    return {title}
}

export default Index


// -----
// index.getInitialProps = async args => {
//     const title = 'top page'
//     return {title}
// }
// export default index
