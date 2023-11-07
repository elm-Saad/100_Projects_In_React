import {useEffect, useRef, useState} from 'react'
import { longList, shortList, list } from "./data"
import { DataType } from './interfaces'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const Carousel = () => {
  const [ListData,setListData] = useState<DataType[]>(longList)
  const [currentItem,setCurrentItem] = useState<number>(2)

  const nextSide = () =>{
    setCurrentItem( (prev) =>{
      return (prev + 1) % (ListData.length)
    })

  }
  const prevSlide = () => {
    setCurrentItem( (prev) =>{
      return (prev - 1 + ListData.length) % (ListData.length)
    })
  }

  useEffect(()=>{
    let intervalId = setInterval(()=>{
      nextSide()
    },2500)

    return ()=>{
      clearInterval(intervalId)
    }
  },[currentItem])
  return(
    <div className='select-none w-full h-96 bg-white flex items-center justify-center '>
      <section className='w-full h-96 max-w-[1000px] min-w-[300px] relative overflow-hidden'>
        {ListData.map((item,index) =>{
          return <div 
            key={item.id}
            className='absolute top-0 left-0 border bg-white shadow-md rounded-lg m-8 p-8 transition duration-1000'
            style={{
              transform:`translateX(${100*(index - currentItem)}%)`,
              opacity:(index === currentItem)?'1':'0'
            }}
          >
            <div className='relative flex items-center flex-col'>
                <img src={item.image} alt={item.name} className=' rounded-full w-32 h-32' />
                <h3 className='font-bold text-blue-600'>{item.name}</h3>
                <p className='text-gray-600 font-semibold'>{item.title}</p>
                <p className='select-text text-gray-500 font-semibold'>{item.quote}</p>
                <FaQuoteRight className='text-blue-600 text-2xl'/>
                <button 
                  className='p-1 absolute left-4 top-1/3 rounded-md transition hover:bg-blue-400 hover:text-white'
                  onClick={()=>prevSlide()}
                >
                <FiChevronLeft className='w-6 h-6' />
                </button>
                <button 
                  className='p-1 absolute right-4 top-1/3 rounded-md transition hover:bg-blue-400 hover:text-white'
                  onClick={()=>nextSide()}

                >
                <FiChevronRight className='w-6 h-6'/>
                </button>
            </div>
          </div>
        })}
      </section>
    </div>
  )
}
export default Carousel