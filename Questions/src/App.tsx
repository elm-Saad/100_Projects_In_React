import data from "./data"
import { DataType } from "./interfaces"
import SingleQuestion from "./Component/singleQuestion" 
import {useState} from 'react'

const App = () => {
  const [questions,setQuestions] = useState<DataType[]>(data)

  return (
    <main>
      <section>
        <h1>Questions</h1>
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