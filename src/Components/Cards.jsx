import { mockProducts } from "../assets/mockData";

function Cards (){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {mockProducts.map((product) => (
          <div key={product.id} className="border p-2 rounded bg-PastelPink">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-28 object-cover rounded"
            />
            <h3 className="text-base font-semibold mt-4">{product.title}</h3>
            {/* <p className="text-gray-500 mt-2">{product.description}</p> */}
            <p className="font-bold mt-2">${product.price}</p>
            <div className="flex justify-between items-center mt-4">
                 <button className="bg-blue-500 text-white rounded-full p-2 mt-3.5">
                    See More
                </button>
                <button className="bg-blue-500 text-white rounded-full p-2 mt-3.5">
                    +
                </button>
            </div>
           
          </div>
        ))}
      </div>
      );
      
}

export default Cards;