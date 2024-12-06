import PropTypes from 'prop-types';


function Cards({ product }) {
  return (
    <div className="border rounded p-4 bg-white transform transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <div className='h-12 p-2 '>
         <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
      </div>
      <div className='flex justify-between mt-3 p-2'>
        <p className="text-gray-500">${product.price}</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py- 2 px-4 rounded">See More</button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cards;