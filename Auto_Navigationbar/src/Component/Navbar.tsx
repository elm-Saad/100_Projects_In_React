import { FaBars } from "react-icons/fa"
import Title from "./Title"


const Navbar = ()=>{
    return <nav className="flex items-center justify-between py-4 px-12">
        <Title text="Navbar"/>
        <FaBars 
            className="cursor-pointer text-2xl"
        />
    </nav>
}

export default Navbar