const localStorageMiddleware = (storeAPI) => (next) => (action) => {
    const result = next(action);
  
    // Menyimpan state ke localStorage
    const state = storeAPI.getState();
    localStorage.setItem('cart', JSON.stringify(state.cart.products));
    localStorage.setItem('products', JSON.stringify(state.product.products));
    localStorage.setItem('login', JSON.stringify(state.login));
  
    return result;
  };
  
  export default localStorageMiddleware;
  