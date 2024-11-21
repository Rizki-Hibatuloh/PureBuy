import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-PastelBlue text-sky-500 font-mono">
            <a href="#" className="hover:text-white text-xl font-bold">PureBuy</a>
            <SearchBar/>
            <ul className="flex space-x-3">
                <li className="hover:text-white cursor-pointer">Home</li>
                <span>|</span>
                <li className="hover:text-white cursor-pointer">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;