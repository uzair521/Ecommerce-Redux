import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  return response.json();
  const data = await response.json();
  console.log(data); // Log the API response
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], status: null },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProducts.rejected, (state) => { state.status = 'failed'; });
  },
});

export default productSlice.reducer;