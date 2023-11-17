import { useContextAPI } from "../Globalcontext"
import sublinks from "../data"


const NavLG = () =>{
    const {setCurrentPage} = useContextAPI()
    
        return  <ul className="items-stretch gap-0 hidden md:flex  w-full justify-center">
        {sublinks.map(link=>{
            return <li 
                key={link.pageId}
                className="NLINK flex  pl-6 pr-6 items-center font-semibold text-gray-700 hover:text-gray-800 transition cursor-pointer"
                onMouseEnter={()=>setCurrentPage(link.pageId)}
            >
                {link.page}
            </li>
        })}
    </ul>

}

export default NavLG
