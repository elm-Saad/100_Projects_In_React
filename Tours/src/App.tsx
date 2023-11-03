import React from "react"
import Loading from "./Component/Loading"
import Tours from "./Component/Tours"
import { DataType } from './interfaces'
const url: string = 'https://course-api.com/react-tours-project'



const App = () => {
  const [isLoading,setLoading] = React.useState<boolean>(true)
  const [items,setItems] = React.useState<DataType|null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setItems(data)
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
  return (
    <section>
      <Tours data={items} />
    </section>
  )
}


export default App