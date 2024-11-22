
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from '../assets/12.png';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2 bg-PastelBlue text-sky-500 font-mono">
            <a href="#">
                <img src={logo} alt="Logo" className="w-12 h-12" />
            </a>
            <h1 className="text-2xl font-bold  text-sky-900">PureBuy</h1>
            <ul className="flex space-x-6">
                <li className=" p-1 "><a href="#" className="hover:text-white text-lg"><MdOutlineShoppingCart /></a></li>
                <li className="hover:text-white cursor-pointer">Home</li>
                <span>|</span>
                <li className="hover:text-white cursor-pointer">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;