
const dummyButtons = [
    {
        title: '新規作成',
        type: 'primary'
    }
]

export default ({title, buttons=[]}) => {

    return <>
        <header>
            <h1>{title}</h1>
            <div className='button-container'>
                {
                    buttons.map((btn, i) => 
                        <button key={i} className={btn.type} onClick={btn.onClick}>{btn.title}</button>
                    )
                }
            </div>
        </header>
        <p>↑ここまでへっだー</p>
        <hr/>
    </>
}
