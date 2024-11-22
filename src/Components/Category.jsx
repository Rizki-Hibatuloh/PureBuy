import SearchBar from "./SearchBar"


function Category(){
    return (
        <div className="flex justify-center items-center p-4 ">
            <div className="flex space-x-4 ">
                <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">
                    <span>Categories</span>
                    <i className="fas fa-chevron-down"></i>
                </button>
                
                <SearchBar/>
            </div>
            <div className="flex space-x-4 ml-4 ">
                <button className="border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">Men</button>
                <button className="border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">Women</button>
                <button className="border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">Children</button>
                <button className="border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">Brands</button>
            </div>
        </div>
    )
}
export default Category