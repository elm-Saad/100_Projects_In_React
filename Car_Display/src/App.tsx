
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
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
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

//action 
import { action as newsletterAction } from './pages/Newsletter';

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
        action: newsletterAction,

      },
      {
        path:'about',
        element: <About />,
        errorElement: <SinglePageError />

      }
    ]
  }
 ])


const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      //how long the query is going to be valid
      staleTime: 1000 * 60 * 5, //5 min
    },
  },
})


const App =()=>{
  return <main className="min-h-screen w-full flex justify-center">
    <section className="w-full max-w-[2200px] flex flex-col items-center">
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </section>
  </main>
}

export default App