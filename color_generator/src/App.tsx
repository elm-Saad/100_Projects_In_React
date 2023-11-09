import { useState } from "react"
import Colors from "./Component/AllColors"
import Form from "./Component/Form"
import Values from "values.js"
import { ToastContainer, toast } from 'react-toastify'
import Title from "./Component/Title"
const App = () => {

  const [AllColors,setAllColors] = useState(new Values('#FFF').all(20))
  
  const changeColor = (color: string): void =>{
    try {
      const Colors = new Values(color).all(20)
      setAllColors(Colors)
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return(
    <main className="min-h-screen w-full bg-white flex items-center justify-center">
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
      <section className="min-h-screen max-w-[1100px]  gap-4 flex items-center justify-center flex-col">
        <Title text='Color Generator' />
        <Form changeColor={changeColor} />
        <Colors AllColors={AllColors}/>
      </section>
    </main>
  )
}
export default App