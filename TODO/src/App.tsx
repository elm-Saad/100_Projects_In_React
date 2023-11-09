import {useState} from 'react'
import { nanoid } from 'nanoid'
import Form from './Component/Form'
import Title from './Component/Title'
import { ItemsType } from './interfaces'
import Items from './Component/Items'
import { ToastContainer, toast } from 'react-toastify';

const handleSetLocalStorage = (items:ItemsType[])=>{
  localStorage.setItem('items',JSON.stringify(items))
}
const handleGetLocalStorage = () => {
  let items: ItemsType[] = localStorage.getItem('items')
  if (items) {
    items = JSON.parse(localStorage.getItem('items')!)
  } else {
    items = []
  }
  return items
}
const App = () => {
  const newItems = handleGetLocalStorage()
  const [allItems,setAllItems] = useState<ItemsType[] >(newItems)

  const addItem =(inputValue: string): void=>{
    const newItem = {
      id:nanoid(),
      name: inputValue,
      completed: false
    }
    const newItems = [newItem,...allItems]
    setAllItems(newItems)
    handleSetLocalStorage(newItems)
    toast.success('item added successfully')
    
  }
  const removeItem = (itemId: string)=>{
    const updatedItems = allItems.filter(item => item.id !== itemId)
    setAllItems(updatedItems)
    handleSetLocalStorage(updatedItems)
    toast.success('item removed successfully')

  }

  const editItem = (itemId: string) => {
    const EditedItems = allItems.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setAllItems(EditedItems)
    handleSetLocalStorage(EditedItems)
    
  }
  return(
    <main className='min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500'>
      <ToastContainer 
          position='top-center' 
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
      <section className='max-w-[1100px] bg-white p-8 rounded-md shadow-lg border  '>
        <Title text={'ToDo'}/>
        <Form addItem={addItem}/>
        <Items removeItem={removeItem} allItems={allItems} editItem={editItem}/>
      </section>
    </main>
  )
}
export default App