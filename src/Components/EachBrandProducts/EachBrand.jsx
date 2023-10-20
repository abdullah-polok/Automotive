import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Productcard from "./productcard";


const EachBrand = () => {
    const [cars, setCars] = useState([]);

    let { state } = useLocation();
    console.log(state)
    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    console.log(cars);

    const carsFilter = (cars.filter(car => car.brand_name === state.name))

    // console.log(state.name)
    return (
        <div>
            <div className="mt-10">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={carsFilter[1]?.image} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={carsFilter[2]?.image} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={carsFilter[3]?.image} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={carsFilter[4]?.image} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-2 ">
                {
                    carsFilter.map(car => <Productcard key={car._id} car={car}></Productcard>)
                }
            </div>
        </div>
    );
};

export default EachBrand;