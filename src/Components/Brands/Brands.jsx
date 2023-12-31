import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://automotive-server-aooglz8zc-abdullah-al-rahmans-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Brands;