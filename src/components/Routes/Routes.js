import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Media from "../Media/Media";
import MediaCardDetails from "../Media/MediaCardDetails";

import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoute/PrivateRoute";





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
    path:'/',
    element:  <PrivateRoutes><Home></Home></PrivateRoutes>

},
{
    path:'/home',
    element: <PrivateRoutes><Home></Home></PrivateRoutes>

},
{
    path:'/media',
    element: <PrivateRoutes><Media></Media></PrivateRoutes>,
    loader: ()=> fetch("http://localhost:5000/allpost")

},
{
    path:'/about',
    element:<PrivateRoutes> <AboutPage></AboutPage></PrivateRoutes>,
   

},
{
    path:'/mediadetails/:id',
    element: <PrivateRoutes><MediaCardDetails></MediaCardDetails></PrivateRoutes>,
    loader: ({params})=> fetch(`http://localhost:5000/mediadetails/${params.id}`)

},

]},
])