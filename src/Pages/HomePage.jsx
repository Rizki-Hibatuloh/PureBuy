
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
            <section >
                    <Category categories={categories} onCategoryClick={handleCategoryClick}/>  
            </section>  
            <section className='container  py-12 px-5'>
                <div className="flex justify-center items-center mx-auto  w-full  m-2 p-2">
                    <img src={banner} alt="banner.jpg" className='rounded-md h-80 w-full'/>
                </div>
            </section>
            <section className='container px-auto py-12 px-5'>
                <div className='flex justify-center items-center p-3 mb-5  '>
                    <h2 className='text-2xl font-bold mb-6 bg-red-700 rounded-lg text-center w-60 text-white px-4 p-4 m-4 '> Shopping</h2>
                </div>
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