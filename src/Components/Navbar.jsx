
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from '../assets/12.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2 bg-PastelBlue text-sky-500 font-mono">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                </Link>
            </div>
            <h1 className="text-2xl font-bold  text-sky-900">PureBuy</h1>
            <div className="flex justify-between items-center p-2 ">
                <Link to="/cart" className=" hover:text-white text-lg px-4">
                    <MdOutlineShoppingCart />
                </Link>
                <Link to="/Home" className=" hover:text-white px-4">Home</Link>
                <span>|</span>
                <Link to="/login" className=" hover:text-white px-4">Login</Link>
            </div>
           
        </nav>
    );
}

export default Navbar;