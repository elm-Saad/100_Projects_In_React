import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'
import { useContextAPI } from '../GlobalContextApi'

const ThemeToggle = ()=>{
    const { ToggleDarkTheme , DarkTheme }  = useContextAPI()
    return <section className='w-full flex justify-center'>
        <nav className='max-w-[1500px] w-full flex justify-end p-6 px-8'>
            <button
                className='rounded-full p-2 border'
                onClick={ToggleDarkTheme}
            >
                {DarkTheme?<BsFillMoonFill/>:<BsFillSunFill />}
            </button>
        </nav>
        
    </section>
}

export default ThemeToggle