import { TitleType } from "../interfaces"




const Title =({text}: TitleType)=>{
    return <header
            className="m-2"
        >
        <h1
            className="capitalize font-bold text-purple-700 text-3xl text-center"
        >
            {text}
        </h1>
    </header>
}

export default Title