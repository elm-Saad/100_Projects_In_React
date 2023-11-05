import data from "./data"
import { DataType } from "./interfaces"
import SingleQuestion from "./Component/singleQuestion" 
import {useState} from 'react'

const App = () => {
  const [questions,setQuestions] = useState<DataType[]>(data)

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <section className="max-w-[600px] p-4 shadow-lg rounded-lg bg-white">
        <h1 className="text-center font-bold select-none">Questions</h1>
        {questions.map(Qrs => {
          return <div key={Qrs.id}>
            <SingleQuestion {...Qrs} />
          </div>
        })}
      </section>
    </main>
  )
}
export default App