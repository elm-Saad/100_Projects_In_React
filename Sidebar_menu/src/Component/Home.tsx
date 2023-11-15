import { FaBars } from "react-icons/fa"
import { useContextAPI } from "../GlobalContext"

const Home = ()=>{

    const { openModal, openNav } = useContextAPI()

    return <section className="min-h-screen relative flex items-center justify-center">
        <section>
            <div className="absolute top-8 left-8">
                <FaBars 
                    className="text-2xl cursor-pointer" 
                    onClick={openNav}
                />
            </div>
            <button
                className="p-2 rounded-md bg-purple-700 text-white font-semibold hover:bg-purple-800 transition duration-300 "
                onClick={openModal}
            >
                Show Modal
            </button>
        </section>
    </section>
}
export default Home