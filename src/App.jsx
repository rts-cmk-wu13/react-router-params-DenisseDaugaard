import { createBrowserRouter, RouterProvider } from 'react-router'

import '/src/style/style.scss'

import Home from './pages/Home'




function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: < Home />
    },
    {
       path:"my-pets",
      //  element: <MyPets/>
    },
    {
       path:"pet-info",
      //  element: <Pet-info/>
    }
    
  ])
 
  return (
    
    <>

    < RouterProvider router={router} />
     
    </>
  )
}

export default App
