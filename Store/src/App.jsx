import { HomeLayout,Landing,Error,Products,SingleProduct,Cart,About,Register,Login,Checkout,Orders,} from './pages'
// react-router-dom
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<p>hi</p>
  },
  {
    path:'/hi',
    element:<p>hi hi</p>
  },
  //...
])


function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
