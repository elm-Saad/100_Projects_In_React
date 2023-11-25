import { TitleType } from "../interfaces"




const Title =({text}: TitleType)=>{
    return <header
            className="m-2 ml-0 mb-6"
        >
        <h1
            className="capitalize font-bold text-purple-700 text-4xl md:text-5xl transition"
        >
            {text}
        </h1>
    </header>
}

export default Title