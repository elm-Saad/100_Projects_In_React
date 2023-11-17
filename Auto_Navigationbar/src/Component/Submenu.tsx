import { useRef } from "react"
import { useContextAPI } from "../Globalcontext"
import sublinks from "../data"



const Submenu =()=>{
    const NavLinkContainer = useRef<HTMLDivElement | null>(null)


    const {currentPage, setCurrentPage} = useContextAPI()
    const page = sublinks.find( link=>{
        return link.pageId === currentPage
    } )
  
    const handleMenuLeaving = (e: React.MouseEvent)=>{
        const {left , right , bottom}: any = NavLinkContainer?.current?.getBoundingClientRect()
        // console.log('left: ' + left,
        // 'right: ' + right,
        // 'bottom: ' + bottom)
        // console.log('////////////////')
        // console.log('ClientX: ' + e.clientX ,
        // 'ClientY: ' + e.clientY )
        if(left > e.clientX || right - 1 < e.clientX || bottom - 1 < e.clientY){
            setCurrentPage(null)
        }
    }
    return <section 
        className={`${page?'show origin-top visible opacity-100 transition duration-300 ease-in-out':'submenu invisible opacity-0 '} absolute top-24 left-1/2 bg-white p-8 rounded-md`}
        onMouseLeave={handleMenuLeaving}
        ref={NavLinkContainer}
    >    
        <p className="text-gray-600 font-semibold">{page?.page}</p>
        <article className="grid gap-2 grid-cols-2 mt-2">
            {page?.links.map(link=>{
                return <span className="text-gray-500 font-medium" key={link.id}>
                            <a href={link.url} className="flex items-center gap-2">
                                <span className="text-purple-500 text-xl">{link.icon}</span>
                                <span>{link.label}</span>
                            </a>
                    </span>     
            })}
        </article>
    </section>
}

export default Submenu

/**
 * using the e.ClientX e.ClientY getBoundingClientRect() 
 * to control the show/hide of the Submenu => hide on left right button when out from the submenu 
 * // 1) set a function to handle the logic onMouseLeave
 * // 2) get the hole section by Ref 
 * // 3) get the left right bottom position relative to the viewport. using the Ref and the getBoundingClientRect() 
 * // 4) get the e.ClientX and e.ClientY 
 * // 5) if left > e.ClientX or right < e.clientX or bottom < clientY set the nav to null
 */