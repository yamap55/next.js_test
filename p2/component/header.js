import Link from 'next/link'

const dummyButtons = [
    {
        title: '新規作成',
        type: 'primary'
    }
]
const linkStyle = {
    marginRight: 15
}

const links = [
    {name:'Home', path:'/'},
    {name:'About', path:'/about'},
    {name:'cowsay', path:'/cowsay'}
]

export default ({title, buttons=[]}) => {
    return <>
        <header>
            {/* <div className='button-container'>
                {
                    buttons.map((btn, i) => 
                        <button key={i} className={btn.type} onClick={btn.onClick}>{btn.title}</button>
                    )
                }
            </div> */}
            <div>
                {
                    links.map((obj, i) => 
                        <Link href={obj.path}><a style={linkStyle}>{obj.name}</a></Link>
                    )
                }
            </div>
            <h1>{title}</h1>
        </header>
        <hr/>
    </>
}
