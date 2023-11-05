import menu from './data'
import { DataType } from './interfaces'
import {useState} from 'react'
import Menu from './Component/Menu'
import Navigation from './Component/Navigation'

  const RepeatedCategory = menu.map(item => item.category)
  const unrepeatedCategory = new Set(RepeatedCategory)
  const allCategories = ['all',...unrepeatedCategory]
  /**function that mimics the behavior of Set 
  * function customSet(arr) {
    const uniqueArr = [];

    for (const item of arr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }

    return uniqueArr;
  }
 */

const App = () =>{
  const [data,setData] = useState<DataType[]>(menu)
  const [category,setCategory] = useState<string[]>(allCategories)

  function FilterCategory (category: string){
    console.log(category)
    if(category === 'all'){
      setData(menu)
      return
    }
    setData(menu.filter((item)=>{
      return item.category === category
    }
    ))
  }
  return <main className="flex flex-col items-center min-h-screen w-full max-w-[1000px] mx-auto">
    <section className="m-4 p-4">
      <h1 className="font-bold text-blue-600/100 text-3xl select-none">Menu</h1>
    </section>
    <section className='flex flex-col items-center'>
      <Navigation categories={category} FilterCategory={FilterCategory}/>
      <Menu data={data}/>
    </section>
  </main>
}

export default App