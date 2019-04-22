import Header from '../component/header'

const Index = props => {
    return (
        <>
            <Header title={props.title}/>
            <div>
                <h1>おこんにちわ</h1>
            </div>
        </>
    )
}

Index.getInitialProps = async args => {
    const title = 'ダッシュボード'
    return {title}
}
export default Index
