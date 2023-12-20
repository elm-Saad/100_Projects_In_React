import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Landing,Error,Register, ProtectedRoute } from "./pages"
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'

//Dashboard
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from './pages/Dashboard'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<ProtectedRoute>
      <SharedLayout />
    </ProtectedRoute>,
    errorElement:<Error />,
    children: [
      {
        index:true,
        element: <Stats />,
      },
      {
        path:'all-jobs',
        element: <AllJobs />,

      },
      {
        path:'add-job',
        element: <AddJob />,
      },
      {
        path:'profile',
        element:<Profile />
      }
    ]

  },
  {
    path:'/register',
    element:<Register />,
  },
  {
    path:'landing',
    element:<Landing />
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
