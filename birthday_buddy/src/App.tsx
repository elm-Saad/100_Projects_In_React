import React from "react"
import Data from "./data"

function App() {
  const [users,setUsers] = React.useState(Data)

  const userData = users?.map(user =>{
    return <article className='grid grid-cols-4 gap-4 mb-8 items-center'>
      <img src={user.image} alt={user.name} className='w-24 h-24 rounded-full shadow' />
      <div>
        <h4>{user.name}</h4>
        <p>{user.age} years</p>
      </div>
    </article>
  })

  return (
    <section className="min-h-screen bg-white flex items-center justify-center flex-col">
        <div className="w-[90vw] max-w-[600px] px-2 py-4 bg-white shadow-xl m-4 rounded-lg	">
          <h3 className="mb-4 font-bold ">{users.length} birthdays today</h3>
          <div className="flex flex-col items-center w-full justify-center">
            {userData}
          </div>
          <button className="w-full px-4 py-2 bg-blue-400 text-white rounded-lg" onClick={()=>setUsers([])}>
            clear all
          </button>
        </div>
    </section>
  )
}

export default App
