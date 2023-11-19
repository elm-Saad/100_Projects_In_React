import CartContainer from "./Component/CartContainer"
import Navbar from "./Component/Navbar"
import { useContextAPI } from "./GlobalContext"
import { Triangle } from  'react-loader-spinner'

const App =()=>{

  const {loading} = useContextAPI()
  console.log(loading)
  if(loading){
    return <main className="bg-white h-screen w-full flex items-center justify-center">
      <Triangle
          height="80"
          width="80"
          color="#520288"
          ariaLabel="triangle-loading"
          visible={true}
      />
    </main>
  }
  return <main className="bg-white flex items-center justify-center">
    <section className="max-w-[1500px] w-full min-h-screen">
      <Navbar />
      <CartContainer />
    </section>
  </main>
}

export default App