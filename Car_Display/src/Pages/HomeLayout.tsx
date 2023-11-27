import {Outlet} from 'react-router-dom'
import Navbar from '../Component/Navbar'

const HomeLayout = () =>{
    return <section>
        <Navbar/>
        <article className='page'>
            <Outlet />
        </article>
        
    </section>
}

export default HomeLayout