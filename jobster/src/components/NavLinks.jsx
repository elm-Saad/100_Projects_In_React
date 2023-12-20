import links from "../utils/links"
import { NavLink } from "react-router-dom"

const NavLinks = (toggle)=>{
    return  <>
    {links.map(link=>{
        const {text,path,id,icon} = link
        return <NavLink 
        to={path}
        className={({isActive})=>{
            return isActive?'nav-link active':'nav-link'
        }}
        // close the side bar when clicking on a link
        onClick={toggle}
        
        >
            <span className='icon'>{icon}</span>
            {text}
        </NavLink>
    })}
    </>
}

export default NavLinks