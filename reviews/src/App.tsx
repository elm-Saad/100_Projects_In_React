import {useState} from 'react'
import {FaChevronLeft,FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import reviews from "./data"

type ValidIds = 0 | 1 | 2 | 3

const App = () => {

  const [id,setId] = useState<ValidIds>(3)
  const {name, job , image, text} = reviews[id]
  
  function randomIndex (){
    let randIndex: ValidIds = Math.floor(Math.random()* reviews.length) as ValidIds
    if(randIndex === id ){
      randIndex = (id + 1) as ValidIds
    }

    setId(checkIndex(randIndex))
  }
  function checkIndex (index: number): ValidIds {
    if(index > (reviews.length - 1)){
      return 0
    }
    if(index < 0){
      return (reviews.length - 1) as ValidIds
    }
    return index as ValidIds

  }
  const nextUser = () =>{
    setId((prev): ValidIds =>{
      return checkIndex( prev + 1 )
    })
  }
  const prevUser = () => {
    setId((prev): ValidIds => {
      return checkIndex( prev - 1 )
    })
  }
  return (
    <main className='min-h-screen w-full flex items-center justify-center bg-white'>
      <section className='bg-white shadow-lg p-8 m-16 rounded-lg flex flex-col items-center max-w-[600px]'>
        <div className='relative m-4'>
          <img src={image} alt={name} className='w-28 h-28 rounded-full'/>
          <span className='absolute top-0 left-0'>
            <FaQuoteRight color="blue" />
          </span>
        </div>
        <h2 className='text-blue-600 font-bold tracking-wide'>{name}</h2>
        <span className=''>{job}</span>
        <p className='my-2 select-none'>{text}</p>
        <div className='flex items-center gap-4 text-blue-600 select-none'>
          <span 
            onClick={nextUser}
            className='cursor-pointer'
          >
            <FaChevronLeft 
              color='blue'
            />
          </span>
          -
          <span 
            onClick={prevUser}
            className='cursor-pointer'
          >
            <FaChevronRight
              color='blue'
            />
          </span>
        </div>
        <button
          className='mt-4 px-4 py-1 bg-blue-500 text-white rounded-lg select-none'
          onClick={()=>randomIndex()}
        >
          random
        </button>
    </section>
    </main>
  )

}


export default App