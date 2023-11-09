import {toast} from 'react-toastify'
import { useState } from 'react'
import { FormItemType } from '../interfaces'

const Form = ({addItem}:FormItemType)=>{

    const [inputValue,setInputValue] = useState<string|''>('')

    const HandleChangeEvent=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const inputValue = e.target.value
        setInputValue(inputValue)
    }

    const HandleSubmitEvent =(e: React.FormEvent)=>{
        e.preventDefault()
        if(!inputValue) {
            toast.error('can not add empty value')
            return 
        }
        
        addItem(inputValue)
        setInputValue('')
    }

    return (
        <section>
            <form 
                onSubmit={HandleSubmitEvent}
                className='flex items-center justify-center gap-4 bg-white rounded-md'
            >
                <input 
                    type="text" 
                    value={inputValue}
                    className='bg-white outline-none border border-2 px-2 py-1 rounded-md text-gray-700'
                    placeholder='add an item'
                    onChange={HandleChangeEvent}
                />
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 font-semibold rounded-md transition duration-200 "
                >
                    Add
                </button>
            </form>
        </section>
    )
}

export default Form