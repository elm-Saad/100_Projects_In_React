
import { Outlet } from "react-router-dom"
import { Header } from "../component"
import { Navbar } from "../component"

const HomeLayout = ()=>{
    return <>
    <Header />
    <Navbar />
    <section className="align-elm py-10">
        <Outlet/>
    </section>
    </>
}


export default HomeLayout