import { FaUpload } from 'react-icons/fa';
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
const Productcard = ({ car }) => {

    const { _id, name, brand_name, type, image, price, details, ratings } = car
    return (
        <div className="card w-96 glass">
            <figure><img className='w-full' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{brand_name}</h2>
                <p className='text-sm mb-0 mt-0'>{name}</p>
                <p className='text-sm mb-0 mt-0'>{type}</p>
                <p className='text-sm mb-0 mt-0'>{details}</p>
                <p className='text-sm mb-0 mt-0'>{ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn"><FaUpload></FaUpload></button>
                    <Link to='/productdetails' state={{ car: car }}><button className="btn"><CgDetailsMore></CgDetailsMore></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Productcard;