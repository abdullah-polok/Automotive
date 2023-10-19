import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-10 mt-24">
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Brands;