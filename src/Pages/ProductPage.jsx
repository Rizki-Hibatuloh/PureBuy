import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice'; // Import action addToCart

function ProductPage() {
  const { id } = useParams(); // Ambil ID dari URL
  const products = useSelector((state) => state.product.products); // Ambil semua produk
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === parseInt(id)); // Cari produk berdasarkan ID

  const [quantity, setQuantity] = useState(1); // State untuk mengelola quantity

  if (!product) {
    return <div>Produk tidak ditemukan!</div>;
  }

  // Fungsi untuk menambah jumlah
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  // Fungsi untuk mengurangi jumlah
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Tidak bisa kurang dari 1
  };

  // Fungsi untuk menambahkan produk ke keranjang
  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      quantity,
    };
    dispatch(addToCart(productToAdd));
    alert(`${product.title} berhasil ditambahkan ke keranjang!`);
  };

  // Fungsi untuk checkout
  const handleCheckout = () => {
    alert('Checkout berhasil! Anda akan diarahkan ke halaman pembayaran.');
    // Anda dapat menambahkan navigasi ke halaman pembayaran di sini
  };

  return (
    <section className="flex justify-between mt-10 border border-red-600 mx-9">
      <div className="border border-green-400 flex justify-center items-center p-4 mx-5">
        <img src={product.image} alt={product.title} className="w-3/6 object-contain" />
      </div>
      <div className="border border-blue-700 p-4">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div>
          <p className="text-2xl font-bold text-red-600">${product.price}</p>
          <div className="flex items-center gap-4 my-4">
            <button
              onClick={handleDecrease}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              -
            </button>
            <p className="text-xl font-bold">{quantity}</p>
            <button
              onClick={handleIncrease}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              +
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-700"
            >
              Checkout
            </button>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-2 mt-6">Description :</p>
          <p className="text-lg mb-4">{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;