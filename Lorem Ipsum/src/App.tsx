import { useState } from "react"
import { nanoid } from "nanoid"
import text from "./data"

const id = nanoid()
const App = () => {
  const [number,setNumber] = useState<number>(1)
  const [LoremText, setLoremText] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value
    const parsedValue = parseInt(InputValue, 10)

    if (!isNaN(parsedValue)) {
      setNumber(parsedValue)
    }
  }

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const newText = text.slice(0, number)
    setLoremText(newText)


    
    
  }
  return(
    <main className='min-h-screen grid place-items-center bg-white'>
      <section className="flex flex-col items-center gap-2">
        <h2 className="select-none font-bold text-blue-500 text-2xl m-2">Lorem Ipsum</h2>
        <form 
          action="" 
          className="flex items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <input 
            type="number"
            name="number"
            id="number" 
            min='1'
            max='8'
            step='1'
            placeholder="1"
            className="p-2 px-4 bg-white border rounded-md outline-none "
            value={number}
            onChange={handleChange}
          />
          <button
            className="select-none p-2 px-4 bg-blue-500 hover:bg-blue-600 text-white transition duration-300 rounded-md border-none font-semibold"
          >
            Generate
          </button>
        </form>
        <div className="max-w-[800px] m-2 p-4">
          {
            LoremText.map((item)=>{
              return <p 
                className="my-4"
                key={id}
              >
                {item}
            </p>
            })
          }
        </div>
      </section>
    </main>
  )
}
export default App