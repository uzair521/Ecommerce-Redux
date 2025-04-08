import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories');
  return response.json();
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: { items: [], status: null },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchCategories.rejected, (state) => { state.status = 'failed'; });
  },
});

export default categorySlice.reducer;