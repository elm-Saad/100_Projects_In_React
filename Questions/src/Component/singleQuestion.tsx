import {useState} from 'react'
import { DataType } from "../interfaces"
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title,info}: DataType) =>{

    const [show,setShow] = useState<boolean>(false)
    return (
        <div className="m-4 p-2 shadow-lg bg-white rounded-lg">
            <header className='flex items-center justify-between'>
                <h4 className="font-bold select-none">{title}</h4>
                <button
                    className='rounded-full bg-blue-500 p-1 text-white ml-2'
                    onClick={()=>setShow(!show)}
                >
                    {show?<AiOutlineMinus />:<AiOutlinePlus/>}
                </button>
            </header>
            {
                show && <p>{info}</p>
            }
        </div>
    )
}
export default SingleQuestion