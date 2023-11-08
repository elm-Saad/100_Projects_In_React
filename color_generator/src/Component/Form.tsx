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

    return <section>
        <form onSubmit={handleSubmit}>
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
            />
            <button
                className={`bg-[#3F18C9]`}
                style={{
                    background: Color
                }}

            >
                Generate
            </button>
        </form>
    </section>
}

export default Form