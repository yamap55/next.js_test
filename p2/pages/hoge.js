import Header from '../component/header'
// import {value} from '../modules/hogehoge'

const Index = props => {
    return (
        <>
            <Header title={props.title}/>
            {/* <div>
                <h1>{value}</h1>
            </div> */}
        </>
    )
}

Index.getInitialProps = async args => {
    const title = 'ダッシュボード'
    return {title}
}
export default Index
