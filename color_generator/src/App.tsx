import { useState } from "react"
import Colors from "./Component/AllColors"
import Form from "./Component/Form"
import Values from "values.js"
import { ToastContainer, toast } from 'react-toastify'
const App = () => {

  const [AllColors,setAllColors] = useState(new Values('#FFF').all(20))

  const changeColor = (color: any)=>{
    try {
      const Colors = new Values(color).all(20)
      setAllColors(Colors)
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return(
    <main>
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
      <Form changeColor={changeColor} />
      <Colors AllColors={AllColors}/>
    </main>
  )
}
export default App