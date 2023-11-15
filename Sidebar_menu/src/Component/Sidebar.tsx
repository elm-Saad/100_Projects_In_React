import { IoClose } from "react-icons/io5";
import logo  from '/icon.svg'
import { links, social } from "../data";
import { useContextAPI } from "../GlobalContext";


const Sidebar = ()=>{
    const {Navbar, closeNav} = useContextAPI()

    return <aside className={`${Navbar?'translate-x-0 visible transition duration-500 opacity-100':'-translate-x-full invisible opacity-1'} grid grid-rows-[auto,1fr,auto] h-screen w-full md:w-1/3 absolute top-0 left-0 bg-white shadow-md p-4 px-8`}>
        <div className="flex items-center justify-between">
            <img src={logo} alt="react logo" />
            <IoClose 
                className="text-2xl cursor-pointer text-red-400 hover:text-red-500 transition "
                onClick={closeNav}
            />
        </div>
        <ul className="mt-8">
            {links.map(link =>{
                return <li 
                    key={link.id}
                    className="px-1 flex items-center gap-2 font-semibold text-gray-700 bg-white hover:bg-gray-100 transition rounded-md "
                >
                    <span>{link.icon}</span>
                    <span className="h-full w-full p-2 ">
                        <a 
                            className="block h-full w-full"
                            href={link.url}>{link.text}
                        </a>
                    </span>
                </li>
            })}
        </ul>
        <ul className="flex items-center justify-center gap-4">
            {social.map(link=>{
                return <li 
                        key={link.id}
                        className="text-xl text-purple-700 pb-8"
                    >
                    <a href={link.url}>
                        {link.icon}
                    </a>
                </li>
            })}
        </ul>
    </aside>
}
export default Sidebar