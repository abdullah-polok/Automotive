import { useLoaderData } from "react-router-dom";
import Productcard from "../../Components/EachBrandProducts/productcard";

const AllProducts = () => {
    const cars = useLoaderData();
    return (
        <div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 ">
                {
                    cars.map(car => <Productcard key={car._id} car={car}></Productcard>)
                }
            </div>
        </div>

    );
};

export default AllProducts;