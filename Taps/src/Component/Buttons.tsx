
import { ButtonType } from "../interfaces"

const Buttons = ({jobs,currentItem,changeJob}: ButtonType) =>{
    return (
        <section>
            {jobs?.map((item,index)=>{
                return <button
                    key={item.id}
                    className={`p-1 m-2 rounded text-white ${(index === currentItem)?'bg-blue-600':'bg-blue-400'}`}
                    onClick={()=>changeJob(index)}
                >
                    {item.company}
                </button>
            })
        }
        </section>
    )
}

export default Buttons