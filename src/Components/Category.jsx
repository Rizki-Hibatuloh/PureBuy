import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

function Category({ categories }) {
    return (
        <div className="flex justify-center items-center p-4 ">
            <div className="flex space-x-4 ">
                <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">
                    <span>Categories</span>
                    <i className="fas fa-chevron-down"></i>
                </button>
                
                <SearchBar />
            </div>
            <div className="flex space-x-4 ml-4 ">
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <button key={index} className="border border-gray-300 rounded-full px-4 py-2 hover:bg-PastelBlue">
                            {category}
                        </button>
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </div>
        </div>
    );
}

Category.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired, 
};
export default Category;