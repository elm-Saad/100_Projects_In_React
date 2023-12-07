import { HomeLayout,Landing,Error,Products,SingleProduct,Cart,About,Register,Login,Checkout,Orders,} from './pages'
// react-router-dom
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<Landing />
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path:'products/:id',
        element:<SingleProduct />
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
