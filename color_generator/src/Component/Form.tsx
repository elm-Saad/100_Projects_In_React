import {useState} from 'react'

const DefaultColor: string = '#3F18C9'

const Form = ({changeColor}: any) =>{
    const [Color, setColor] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setColor(inputValue)
    }

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        changeColor(Color)
    }

    return <section className='p-2 bg-white shadow rounded-md'>
        <form 
            onSubmit={handleSubmit}
            className='flex items-center flex-col sm:flex-row gap-2'
        >
            <input
                type="color"
                value={Color?Color:DefaultColor}
                onChange={handleChange}
             />
            <input 
                type="text" 
                placeholder={DefaultColor}
                value={Color}
                onChange={handleChange}
                className='border rounded-md px-2 p-1'
            />
            <button
                className={`select-none bg-[#3F18C9] px-2 p-1 rounded-md text-gray-100 drop-shadow `}
                style={{
                    background: Color,
                    textShadow: '#000 1px 0 2px'
                }}

            >
                Generate
            </button>
        </form>
    </section>
}

export default Form