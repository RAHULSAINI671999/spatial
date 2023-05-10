
import React from 'react'
import Header from './components/Header'
import Home from "../src/pages/Home"
import Footer from './components/Footer'
import Cart from './pages/Cart'
import CreatorToolkit from "../src/components/CreatorToolkit"
import Blog from "../src/components/Blog"
import Support from "../src/components/Support"
import Login from "../src/components/Login"
 
import { gameData } from './api/Api'
import {
  createBrowserRouter,
 Outlet,

  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';


const Layout = ()=> {
 return ( 
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
 )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader: gameData,


      },
      {
        path:"/toolkit",
        element:<CreatorToolkit />,

      },
      {
        path:"/blog",
        element:<Blog />,

      },
      {
        path:"/support",
        element:<Support />,

      },
      {
        path:"/login",
        element:<Login />,

      },
    ]
  }
])

const App = () => {
  return (
    <div>
     <RouterProvider  router={router}/>
    </div>
  )
}

export default App

