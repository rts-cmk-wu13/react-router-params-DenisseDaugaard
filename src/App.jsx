import { createBrowserRouter, RouterProvider } from 'react-router'

import '/src/style/style.scss'

import Home from './pages/Home'
import MyPets from './pages/My_pets'
import Details from './pages/Deatails'




function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: < Home />
    },
    {
       path:"my-pets",
       element: <MyPets/>
    },
    {
       path:"my-pets/:id",
       element: <Details/>
    }
    
  ])
 
  return (
    
    <>

    < RouterProvider router={router} />
     
    </>
  )
}

export default App
