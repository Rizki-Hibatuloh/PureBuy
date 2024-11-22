import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <form className="w-62 relative">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                <input 
                type="search"
                placeholder="Cari produk"
                className=" outline-none"
                 />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-PastelBlue bg-sky-800 hover:bg-sky-600">
                <CiSearch />
                </button>
            </div>
            
        </form>
    );
}

export default SearchBar;