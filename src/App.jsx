import { BrowserRouter , Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage"
import CartPage from "./Pages/CartPage"
import ProductPage from "./Pages/ProductPage"
import Navbar from './Components/Navbar';



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
