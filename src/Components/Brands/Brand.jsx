import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Brand = ({ brand }) => {
    const nameContext = useContext(AuthContext);

    let { brandName, setBrandName } = nameContext;
    const { _id, name, image } = brand;


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="cars" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to="/eachbrand" state={{ name: name }}><button className="btn btn-secondary">learn more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Brand;