import Hero from "./Component/Hero"
import Navbar from "./Component/Navbar"
import Sidebar from "./Component/Sidebar"
import { useContextAPI } from "./Globalcontext"


const App =()=>{
  const {isNavOpen} = useContextAPI()
  return <main className="min-h-screen w-full bg-white grid place-items-center">
    <section className="w-full max-w-[2200px]">
      <Navbar />
      <Hero />
      <Sidebar />
    </section>
  </main>
}

export default App