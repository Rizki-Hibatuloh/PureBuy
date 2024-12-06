import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../utils/axiosInstance';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
      const response = await axiosInstance.get('/products/categories');
      return response.data;
    }
  );

const initialState = {
    categories: [],
    loading: false, 
    error: null,
}

const categoriesSlice = createSlice({
    name : 'categories',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => action.payload,
        clearSelectedCategory: () => null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true; 
                state.error = null;   
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload; 
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message; 
            });
    },
})


export const selectCategories = (state) => state.categories.categories;
export const selectLoading = (state) => state.categories.loading;
export const selectError = (state) => state.categories.error;
export const { setSelectedCategory, clearSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;