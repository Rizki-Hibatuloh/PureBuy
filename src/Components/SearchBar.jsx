import { CiSearch } from "react-icons/ci";

function SearchBar() {
    return (
        <form className="w-64 relative">
            <div className="relative">
                <input 
                type="search"
                placeholder="Cari produk"
                className="w-full rounded-full p-1 pr-12 pl-4"
                 />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-sky-800">
                <CiSearch />
                </button>
            </div>
            
        </form>
    );
}

export default SearchBar;