import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/courses')
        },
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path: '/courses/:id',
            element: <PrivateRoute><Courses></Courses></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ],
  },
]);
