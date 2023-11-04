import React from "react"
import Loading from "./Component/Loading"
import Tours from "./Component/Tours"
import { DataType } from './interfaces'
const url: string = 'https://course-api.com/react-tours-project'

const App = () => {
  const [isLoading,setLoading] = React.useState<boolean>(true)
  const [data,setData] = React.useState<DataType[]|null>(null)

  const removeTour = (id: string): void =>{
    const filteredTours = data?.filter((item): boolean =>{
      return item.id !== id
    })
    setData(filteredTours!)
  }
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setData(data)
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  if(isLoading){
    return <Loading />
  }

  if(data?.length === 0){
    return <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <h2 className="font-bold">no Tours left</h2>
      <button
        className="m-8 py-2 px-6 bg-blue-500 text-white font-bold rounded"
        onClick={()=>fetchData()}
      >
        reFetch
      </button>
    </section>

  }
  return (
    <section className="flex items-center justify-center">
      <Tours data={data} removeTour={removeTour}/>
    </section>
  )
}


export default App