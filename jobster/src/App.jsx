import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing,Error,Register,Dashboard } from "./pages"
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'


const routes = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error />,
    children: [
      {
        index:true,
        element: <Landing />,
      },
      {
        path:'register',
        element: <Register />,

      },
      {
        path:'dashboard',
        element: <Dashboard />,
      },
    ]
  }
 ])

function App() {

  return (
   <>
    <RouterProvider router={routes} />
    <ToastContainer position='top-center' />
   </>
  )
}

export default App
