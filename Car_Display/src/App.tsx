
/**new way
 *import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>,
  },
  {
    path: '/about',
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App
 * 
 */ 


/**old way
 * import { BrowserRouter, Routes, Route } from "react-router-dom"

 * return (
    <div className={`App ${isLoaded ? 'fade-in active' : 'fade-in'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectsDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
 * 
 */

import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './Pages'

 const routes = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    children: [
      {
        index:true,
        element: <Landing />
      },
      {
        path:'cocktail',
        element: <Cocktail />
      },
      {
        path:'newsletter',
        element: <Newsletter />
      },
      {
        path:'about',
        element: <About />
      }
    ]
  }
 ])
const App =()=>{
  return <main className="min-h-screen w-full flex justify-center">
    <section className="w-full max-w-[2200px] flex flex-col items-center">
      <RouterProvider router={routes} />
    </section>
  </main>
}

export default App