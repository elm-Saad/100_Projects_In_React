import { FaBars } from "react-icons/fa"
import Title from "./Title"
import { useContextAPI } from "../Globalcontext"


const Navbar = ()=>{
    const {openNav} = useContextAPI()
    return <nav className="flex items-center justify-between py-4 px-12">
        <Title text="Navbar"/>
        <FaBars 
            className="cursor-pointer text-2xl md:hidden"
            onClick={openNav}
        />
    </nav>
}

export default Navbar