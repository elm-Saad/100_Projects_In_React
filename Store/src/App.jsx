import { HomeLayout,Landing,Error,Products,SingleProduct,Cart,About,Register,Login,Checkout,Orders,} from './pages'
// react-router-dom
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ErrorElement } from './component'

//loaders 
import { loader as landingLoader } from './pages/Landing'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import {loader as ProductLoader } from './pages/Products'
//actions



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<Landing />,
        errorElement:<ErrorElement />,
        loader:landingLoader
      },
      {
        path: 'products',
        element: <Products />,
        errorElement:<ErrorElement />,
        loader:ProductLoader
      },
      {
        path:'products/:id',
        element:<SingleProduct />,
        errorElement:<ErrorElement />,
        loader:SingleProductLoader
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },

    ]
  },
  {
    path:'/login',
    element:<Login />,
    errorElement:<Error />
  },
  {
    path:'/register',
    element:<Register />,
    errorElement:<Error />
  },
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
