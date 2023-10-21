import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Carts = () => {
    const loadedCart = useLoaderData()
    const [carts, setCarts] = useState(loadedCart);
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://automotive-server-o7fdubp9l-abdullah-al-rahmans-projects.vercel.app/carts/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                console.log(data)
                // if (data.deletedCount > 0) {
                console.log("Deleted successfully")
                ///remove the user from the user interface and set the remain user after delete
                const remainningCarts = carts.filter(carts._id !== id)
                setCarts(remainningCarts)
                console.log(remainningCarts)
                // }

            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>type</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carts?.map(cart => <tr key={cart._id}>
                            <td>
                                <img src={cart.image} alt="cars" className='w-[100px]' />
                            </td>
                            <td>{cart.name}</td>
                            <td>{cart.type}</td>
                            <td>{cart.price}</td>
                            <th>
                                <button onClick={() => handleDelete(cart._id)} className="btn  btn-secondary btn-base">X</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Carts;