import CartContainer from "./Component/CartContainer"
import Navbar from "./Component/Navbar"

const App =()=>{
  return <main className="bg-white flex items-center justify-center">
    <section className="max-w-[1500px] w-full min-h-screen">
      <Navbar />
      <CartContainer />
    </section>
  </main>
}

export default App