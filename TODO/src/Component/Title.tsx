import { TextType } from "../interfaces"

const Title =({text}: TextType)=>{
    return <header className="text-blue-600 w-full text-center my-2">
        <h2 className="font-semibold">{text}</h2>
    </header>
}

export default Title