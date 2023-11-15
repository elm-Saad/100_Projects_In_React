import Home from "./Component/Home"
import Modal from "./Component/Modal"
import Sidebar from "./Component/Sidebar"


const App = ()=>{
  return <main className="min-h-screen grid place-items-center">
    <section className="max-w-[1500px] w-full ">
      <Home/>
      <Modal/>
      <Sidebar/>
    </section>
  </main>
}

export default App