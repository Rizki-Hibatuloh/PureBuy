
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from '../assets/12.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2 bg-red-600 text-white text-xl font-bold font-mono shadow-lg sticky top-0 z-10">
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-white">PureBuy</h1>
            <div className="flex justify-between items-center p-2 ">
                <Link to="/cart" className=" hover:text-white text-lg px-4">
                    <MdOutlineShoppingCart />
                </Link>
                <Link to="/" className=" hover:text-white px-4">Home</Link>
                <span>|</span>
                <Link to="/login" className=" hover:text-white px-4">Login</Link>
            </div>
           
        </nav>
    );
}

export default Navbar;