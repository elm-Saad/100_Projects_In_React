
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
// import loader from ech page 

/**
 * #### Loader
 * Each route can define a "loader" function to provide data to the route element before it renders.
 * 
 * // create on each page a loader Exported function that have return then 
 * // in the loader of the page as route call the loader created 
 * // to access it use new instance from useLoaderData() 
 */
import {loader as landingLoader} from './Pages/Landing'
import {loader as singleCocktailLoader} from './Pages/Cocktail'
import SinglePageError from './Pages/SinglePageError'
 const routes = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children: [
      {
        index:true,
        loader: landingLoader,
        element: <Landing />,
        errorElement: <SinglePageError />
      },
      {
        path:'cocktail/:id',
        loader:singleCocktailLoader,
        element: <Cocktail />,
        errorElement: <SinglePageError />

      },
      {
        path:'newsletter',
        element: <Newsletter />,
        errorElement: <SinglePageError />

      },
      {
        path:'about',
        element: <About />,
        errorElement: <SinglePageError />

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