import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Link } from 'react-router-dom'
const Register = () => {

    const userInfo = useContext(AuthContext)
    const { createUser } = userInfo


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="p-5">Have a account?<Link to={'/login'} className="text-blue-500">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;