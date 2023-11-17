import { FaBars } from "react-icons/fa"
import Title from "./Title"
import { useContextAPI } from "../Globalcontext"
import NavLG from "./NavLG"


const Navbar = ()=>{
    const {openNav,setCurrentPage} = useContextAPI()

    const handleRemoveNavLinks = (e:any)=>{
        // if the nav and only the nav contains NLINK then do
        if (!e.target.classList.contains('NLINK')) {
            setCurrentPage(null)
        }
    }
    return <nav 
            className="bg-white flex  justify-between md:justify-normal py-4  md:py-0 px-12"
            onMouseOver={handleRemoveNavLinks}
        >
            <Title text="Navbar"/>
            <FaBars 
                className="cursor-pointer text-2xl md:hidden"
                onClick={openNav}
            />
            {/**the links on the big screen */}
            <NavLG />
        </nav>
}

export default Navbar