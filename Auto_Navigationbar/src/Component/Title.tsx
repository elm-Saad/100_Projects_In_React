

type TitleType = {
    text: string
}
const Title = ({text}: TitleType)=>{
    return <header className="select-none md:py-4">
        <h2 className="font-bold text-2xl text-purple-600">{text}</h2>
    </header>
}

export default Title