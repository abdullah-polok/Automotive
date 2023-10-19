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
                element: <AddProduct></AddProduct>
            },
            {
                path: '/allproduct',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/activities',
                element: <Activities></Activities>
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
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/carts',
                element: <Carts></Carts>
            }

            , {
                path: '*',
                element: <Error></Error>
            }


        ]
    }
])


export default router;