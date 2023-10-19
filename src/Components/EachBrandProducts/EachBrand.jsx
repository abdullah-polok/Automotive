import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Productcard from "./productcard";


const EachBrand = () => {
    const [cars, setCars] = useState([]);
    const [brands, setBrands] = useState([])

    let { state } = useLocation();

    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    console.log(cars);

    const carsFilter = (cars.filter(car => car.brand_name === state.name))

    // console.log(state.name)
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 ">
            {
                carsFilter.map(car => <Productcard key={car._id} car={car}></Productcard>)
            }
        </div>
    );
};

export default EachBrand;