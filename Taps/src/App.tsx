import {useState, useEffect} from 'react'
import { ThreeDots } from 'react-loader-spinner'
import SingleJob from './Component/SingleJob'
import { DataType } from './interfaces'
const url: string = 'https://course-api.com/react-tabs-project'



const App = () => {
  const [isLoading,setIsLoading] = useState<boolean>(true)
  const [data,setData] = useState<DataType[]|null>([])

  const fetchData = async():Promise<void> =>{
    try {
      setIsLoading(true)
      const res = await fetch(url)
      if(!res.ok){
        return
      }
      const Data = await res.json()
      setData(Data)
      setIsLoading(false)      
    } catch (error) {
      setIsLoading(false)
      console.log('there was an error: ' + error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading){
    return <main className='min-h-screen w-full flex items-center justify-center'>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="blue" 
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </main>
  }
  
  return (
    <main
      className='flex items-center justify-center flex-cols '
    >
      <SingleJob jobs={data} />
    </main>
  )
}
export default App