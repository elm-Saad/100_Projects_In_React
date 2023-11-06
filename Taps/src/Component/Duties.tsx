import { DutiesComponentProps } from "../interfaces"
import {FaAngleDoubleRight} from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'

const Duties = ({duties}: DutiesComponentProps)=>{
    return <section className="my-4 flex flex-col gap-2">
        {duties.map(item=>{
            const id = uuidv4()
            return(
                <div key={id} className="flex items-center justify-center">
                    <FaAngleDoubleRight 
                        className='text-blue-400 mr-4 FaAngleDoubleRight' 
                    />
                    <p className="">{item}</p>
                </div>
            )
        })}
    </section>
}

export default Duties