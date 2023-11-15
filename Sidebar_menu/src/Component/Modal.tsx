import { IoClose } from "react-icons/io5";
import { useContextAPI } from "../GlobalContext"



const Modal = ()=>{
    const {Modal,closeModal} = useContextAPI()
    return (
        <section className={`cursor-pointer absolute top-0 left-0 min-h-screen bg-gray-300 w-full opacity-1 items-center justify-center ${Modal?'flex transition duration-500 ease-in-out visible':'-z-10  invisible opacity-0'}`}>
            <div className="select-none grid place-items-center relative bg-white p-16 rounded-md text-center">
                <p className="text-lg text-gray-900"> this is the modal text</p>
                <IoClose 
                    className="text-xl cursor-pointer absolute top-1 right-1 text-red-400 hover:text-red-500 transition "
                    onClick={closeModal}
                />
            </div>
        </section>
    )
}
export default Modal