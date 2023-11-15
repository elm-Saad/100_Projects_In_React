import { IoClose } from "react-icons/io5"
import sublinks from "../data"


const Sidebar = ()=>{
    return <aside>
        <section>
            <IoClose />
        </section>
        <section>
            {sublinks.map(link=>{
                return <article key={link.pageId}>
                    {link.page}
                    <section>
                        {link.links.map(link=>{
                            return <div className="bg-blue-300" key={link.id}>
                                <span>{link.icon}</span>
                                <span className="text-red-500">
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