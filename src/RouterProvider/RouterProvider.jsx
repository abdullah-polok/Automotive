import { createBrowserRouter } from "react-router-dom";
import EachBrand from "../Components/EachBrandProducts/EachBrand";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Main from "../Layout/Main";
import Activities from "../Pages/Activities/Activities";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Carts from "../Pages/Carts/Carts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateForm from "../Pages/Updateform/UpdateForm";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/allproduct',
                element: <AllProducts></AllProducts>,
                loader: () => fetch('https://automotive-server-aooglz8zc-abdullah-al-rahmans-projects.vercel.app/cars')
            },
            {
                path: '/updateform/:id',
                element: <PrivateRouter><UpdateForm></UpdateForm></PrivateRouter>,
                loader: ({ params }) => fetch(`https://automotive-server-aooglz8zc-abdullah-al-rahmans-projects.vercel.app/cars/${params.id}`)
            },
            {
                path: '/activities',
                element: <PrivateRouter><Activities></Activities></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/eachbrand',
                element: <EachBrand></EachBrand>
            },
            {
                path: '/productdetails',
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>
            },
            {
                path: '/carts',
                element: <PrivateRouter><Carts></Carts></PrivateRouter>,
                loader: () => fetch(`https://automotive-server-aooglz8zc-abdullah-al-rahmans-projects.vercel.app/carts`)
            }

            , {
                path: '*',
                element: <Error></Error>
            }


        ]
    }
])


export default router;