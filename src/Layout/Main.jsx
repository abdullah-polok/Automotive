import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer';
import Navber from '../Components/Navber/Navber';
const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;