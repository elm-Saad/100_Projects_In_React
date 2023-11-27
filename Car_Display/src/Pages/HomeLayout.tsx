import {Outlet} from 'react-router-dom'
import Navbar from '../Component/Navbar'

const HomeLayout = () =>{
    return <section>
        <Navbar/>
        <Outlet />
    </section>
}

export default HomeLayout