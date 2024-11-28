import Navbar from '../Components/Navbar';
import Category from '../Components/Category';
import Cards from '../Components/Cards';
import banner from '../assets/banner.jpg';



function HomePage(){
    return(
            <>
            <header className='sticky top-0 z-50'>
            <Navbar />
            </header>
            <section >
                    <Category />  
            </section>  
            <section>
                <div className="flex justify-center items-center mx-auto  w-full  m-2 p-2">
                    <img src={banner} alt="banner.jpg" className='rounded-md h-52 w-full'/>
                </div>
            </section>
            <Cards />
            </>
       
    )
}

export default HomePage;