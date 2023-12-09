import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    let { state } = useLocation();

    const { _id, name, brand_name, type, image, price, details, ratings } = state.car

    const notify = () => {
        toast("Added into cart Successfully")
    }
    const cartCar = state.car

    ///send add cart data to the database
    fetch(`https://automotive-server-aooglz8zc-abdullah-al-rahmans-projects.vercel.app/carts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cartCar)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

        })

    return (
        <div className=" bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3 text-lg">{brand_name}</p>
                    <p className="py-1 text-sm">{type}</p>
                    <p className="py-1 text-sm">{ratings}</p>
                    <p className="py-1 text-sm">{details}</p>
                    <p className="py-4 text-sm">${price}</p>
                    <button onClick={notify} className="btn btn-secondary mt-10">Add to cart</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;