import { IoClose } from "react-icons/io5"
import sublinks from "../data"
import { useContextAPI } from "../Globalcontext"


const Sidebar = ()=>{
    const {isNavOpen, closeNav} = useContextAPI()

    return <aside className={`${isNavOpen?'translate-x-0 visible transition duration-500 opacity-100':'-translate-x-full invisible opacity-1'} absolute top-0 right-0 bg-white p-4 h-screen w-full shadow-lg md:hidden`}>
        <section className="w-full flex justify-end  py-2">
            <IoClose 
                className="cursor-pointer text-2xl text-red-500 hover:text-red-600" 
                onClick={closeNav}
            />
        </section>
        <section className="my-4">
            {sublinks.map(link=>{
                return <article key={link.pageId} className="my-8">
                    <p className="text-gray-600 font-semibold">{link.page}</p>
                    <section className="grid grid-cols-2 gap-4 p-2">
                        {link.links.map(link=>{
                            return <div className="flex items-center gap-2" key={link.id}>
                                <span className="text-purple-500 text-xl">{link.icon}</span>
                                <span className="text-gray-500 font-medium">
                                    <a href={link.url}>{link.label}</a>
                                </span>
                            </div>
                        })}
                    </section>
                </article>
            })}
        </section>
    </aside>
}

export default Sidebar