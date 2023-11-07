import { useState } from "react"

const App = () => {
  const [number,setNumber] = useState<number | ''>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value
    const parsedValue = parseInt(InputValue, 10)

    if (InputValue === '' || !isNaN(parsedValue)) {
      setNumber((InputValue === '')? '' : parsedValue)
    }
  }

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    
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
            placeholder="number of paragraph"
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
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo accusantium inventore corporis atque quam culpa ratione. Repellat temporibus minima earum neque architecto, ut obcaecati necessitatibus porro asperiores. Aliquid, possimus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo accusantium inventore corporis atque quam culpa ratione. Repellat temporibus minima earum neque architecto, ut obcaecati necessitatibus porro asperiores. Aliquid, possimus.
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illo accusantium inventore corporis atque quam culpa ratione. Repellat temporibus minima earum neque architecto, ut obcaecati necessitatibus porro asperiores. Aliquid, possimus.
          </p>
        </div>
      </section>
    </main>
  )
}
export default App