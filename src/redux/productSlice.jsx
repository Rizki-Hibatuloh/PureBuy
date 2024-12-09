import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axiosInstance.get('/products');
      return response.data.map((product) => ({
        ...product,
        quantity: 20, //nilai default quantity 
      }));
    }
  );

  

const initialState = {
    products: [],
    loading: false, 
    error: null,
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
    
})

export const { setProducts} = productSlice.actions;
export default productSlice.reducer;