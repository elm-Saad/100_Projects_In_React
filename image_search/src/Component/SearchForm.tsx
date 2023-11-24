import { FormEvent } from 'react'
import Title from './Title'
import { useContextAPI } from '../GlobalContextApi'


const SearchForm = ()=>{

    //using controlled inputs
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange  = (e: React.ChangeEvent<HTMLInputElement>) =>{
    //     setInputValue(e.target.value)
    // }

    const {setSearchValue} = useContextAPI()

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()
        const formElements = (e.target as HTMLFormElement).elements
        // Check if the form element with name 'text' exists
        if ('text' in formElements) {
            const searchValue = (formElements['text'] as HTMLInputElement).value
            setSearchValue(searchValue)

        }
    }
    return <section className='p-2 w-full flex flex-col items-center'>
        <Title text='image searcher'/>
        <form 
            className='flex items-center justify-center gap-2 w-full'
            onSubmit={handleSubmit}
        >
            <label className='w-full max-w-[600px]'>
                <input 
                    className='p-1 px-2 rounded text-gray-700 w-full border outline-0'
                    type='text'
                    name='text'
                    placeholder='Search for Image'
                    // value={inputValue}
                    // onChange={handleInputChange}
                />
            </label>
            <button
                className='bg-purple-700 hover:bg-purple-800 transition duration-300 p-1 px-2 rounded text-white'
                type='submit'
            >
                search
            </button>
        </form>
    </section>
}

export default SearchForm