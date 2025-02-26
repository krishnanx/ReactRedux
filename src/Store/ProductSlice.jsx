import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers: {
        // fetchResults(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getproduct.pending, (state, action) => {
            state.status = "loading";
        })
        builder.addCase(getproduct.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "idle";
        })
        builder.addCase(getproduct.rejected, (state, action) => {
            state.data = action.payload;
            state.status = "error";
        })

    }
})
export const { fetchResults } = ProductSlice.actions
export default ProductSlice.reducer;
export const getproduct = createAsyncThunk("product/get", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result
});