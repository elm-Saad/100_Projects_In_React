import { useState } from "react"
import { SingleItemType } from "../interfaces"


const SingleItem = ({removeItem,editItem, singleItem}: SingleItemType)=>{
    const {id, name , completed} = singleItem
    // const [isChecked,setIsChecked] = useState<boolean>(completed)

    // const handleChange = ()=>{
    //     setIsChecked(!isChecked)
    // }


    return <div id={id} className=" select-none p-1 px-2 flex items-center gap-4 justify-between mt-4 bg-gray-200 rounded-md">
        <input 
            type="checkbox" 
            checked={completed}
            onChange={()=>  editItem(id)}
        />
        <p className={`${completed?'line-through':''} capitalize decoration-sky-500 select-text font-semibold`}>{name}</p>
        <button
            className="capitalize bg-blue-600 text-white px-2 py-1 rounded-md"
            onClick={()=>removeItem(id)}
        >
            remove
        </button>
    </div>
}

export default SingleItem