import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import Cards from '../Components/Cards';
import banner from '../assets/banner.jpg';
import Footer from '../Components/Footer';
import { fetchProducts } from '../redux/productSlice';
import { fetchCategories } from '../redux/categoriesSlice';
import { setSelectedCategory } from '../redux/categoriesSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';


function HomePage(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)
    const categories = useSelector(state => state.categories.categories);
    const selectedCategory = useSelector(state => state.selectedCategory);

    //Handle Categories
    const handleCategoryClick = (category) => {
        dispatch(setSelectedCategory(category));
    };
    const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory) 
    : products;

    useEffect(()=> {
        dispatch(fetchProducts())
        dispatch(fetchCategories());
        
    },[dispatch])
    return(
        <>
            <header className='sticky top-0 z-50'>
            <Navbar />
            </header>
            <section >
                    <Category categories={categories} onCategoryClick={handleCategoryClick}/>  
            </section>  
            <section>
                <div className="flex justify-center items-center mx-auto  w-full  m-2 p-2">
                    <img src={banner} alt="banner.jpg" className='rounded-md h-52 w-full'/>
                </div>
            </section>
            <section className='container px-auto py-12'>
                <h2 className='text-2xl font-bold mb-6 text-center bg-red-600 text-white'> Top Products</h2>
                <div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {filteredProducts.products.map(product => (
                    <Cards key={product.id} product={product} /> 
                    ))}
                </div>
            </section>
            <Footer />
       </>
    )
}

export default HomePage;