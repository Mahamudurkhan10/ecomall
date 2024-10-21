import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Pages/MainLayout/Home";
import Error from "../Components/Error/Error";
import About from "../Pages/MainLayout/about";
import Products from "../Pages/MainLayout/products";
import Contact from "../Pages/MainLayout/contact";
import Blogs from "../Pages/MainLayout/blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>

      }, 
      {
        path:'/products',
        element: <Products></Products>

      },
      {
        path: '/contact',
        element: <Contact></Contact>

      },
      {
        path:'/blogs',
        element: <Blogs></Blogs>
      }

    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);
export default router;