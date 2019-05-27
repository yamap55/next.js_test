import Header from '../component/header'
// import {value} from '../modules/hogehoge'
import Link from 'next/link'

const Index = props => {
    return (
        <>
                <Header title={props.title}/>
                {/* <div>
                    <h1>{value}</h1>
                </div> */}
                <Link href='/'><button>Go home</button></Link>
        </>
    )
}

Index.getInitialProps = async args => {
    const title = 'ダッシュボード'
    return {title}
}
export default Index
