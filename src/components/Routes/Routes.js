import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Media from "../Media/Media";

import Register from "../Register/Register";





export const routes = createBrowserRouter([
{
path: '/',
element: <Main></Main>,
errorElement: <ErrorPage></ErrorPage>,
children:[

{
    path:'/register',
    element: <Register></Register>,
},

{
    path:'/login',
    element: <Login></Login>

},
{
    path:'/home',
    element: <Home></Home>

},
{
    path:'/media',
    element: <Media></Media>,
    loader: ()=> fetch("http://localhost:5000/allpost")

},

]},
])