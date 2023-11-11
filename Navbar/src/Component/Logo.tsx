
import { NavbarTextType } from "../interfaces"


const Logo =({text}: NavbarTextType)=>{
    return <header className="w-fit">
        <h2 className="font-bold text-2xl text-blue-500">{text}</h2>
    </header>
}

export default Logo