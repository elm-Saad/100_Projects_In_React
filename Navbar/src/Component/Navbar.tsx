import {useRef, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from './Logo'
import { links, social } from '../data'

const addNum: 15 = 15
const Navbar = ()=>{

    const [ShowNav,setShowNav] = useState<boolean>(false)
    //set a Ref  on the links
    const LinksRef = useRef<null>(null)


    const toggleNavbarVisibility = ()=>{
        setShowNav(!ShowNav)
    }

    return <section className='select-none bg-white shadow-md p-4  px-2 sm:px-8 grid place-items-center'>
        <nav className='max-w-[1100px] w-full'>
            <div className='flex items-center justify-between'>
                <Logo text='Navbar' />
                <FaBars 
                    className='cursor-pointer hover:text-blue-500 md:hidden'
                    onClick={toggleNavbarVisibility}
                />
                <div className='hidden md:flex items-center gap-2 mr-2'>
                    {social.map(icon=>{
                        return <li  
                            key={icon.id}
                            className='list-none'
                        >
                            <a href={icon.url} className='text-blue-400 text-xl'>
                                {icon.icon}
                            </a>
                        </li>
                    })}
                </div>
            </div>
            <div 
                style={
                    {height: ShowNav
                        ? `${(LinksRef.current?.getBoundingClientRect().height + addNum)}px`
                        : '0px',
                    }
                }
                className='overflow-hidden transition-all duration-500 custom-Height'
            >
                <ul ref={LinksRef} className='md:mx-24 transition duration-300 p-0 md:flex'>
                    {links.map(link=>{
                        return <li 
                            key={link.id}
                            className="list-none w-full bg-white border md:border-none my-2 p-2 hover:scale-105 md:hover:scale-100 hover:bg-blue-300 md:hover:bg-white  transition duration-300 rounded-md md:rounded-none"
                        >
                            <a className='block md:text-center' href={link.url}>
                                {link.text}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    </section>
    
}

export default Navbar