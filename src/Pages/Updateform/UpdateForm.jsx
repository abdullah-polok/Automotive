
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UpdateForm = () => {
    const car = useLoaderData();
    const { _id, name, brand_name, type, image, price, details, ratings } = car
    console.log(car)
    const handleUpdate = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratings = form.rating.value
        const image = form.photo.value;

        const newCar = { name, brand_name, type, price, ratings, image }
        console.log(newCar)

        ////update a specific data and store into database
        fetch(`https://automotive-server-o7fdubp9l-abdullah-al-rahmans-projects.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Car data updated successfully")
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-bold text-center">Update Cars</h2>
            <form onSubmit={handleUpdate}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder={brand_name} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder={type} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder={ratings} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-full ml-4">
                        <label className="label">
                            <span className="label-text">image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder={image} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn mt-4 mx-auto " type="submit">Submit update</button>
                    <ToastContainer></ToastContainer>
                </div>
            </form>

        </div>
    );
};

export default UpdateForm;