import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTypes = createAsyncThunk(
    "types/getTypes",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch("http://localhost:3000/types")
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    })

const typeSlice = createSlice({
    name: "types",
    initialState: {
        loading: false,
        error: null,
        records: []
    },
    extraReducers: (builder) => {
        builder.addCase(getTypes.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getTypes.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        });
        builder.addCase(getTypes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
})

export default typeSlice.reducer;