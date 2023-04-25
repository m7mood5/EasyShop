import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeItem } from "./cartSlice";
export const filterItems = createAsyncThunk(
    "items/filterItems",
    async (prefix, ThunkAPI) => {
        const { rejectWithValue } = ThunkAPI;
        try {
            const res = await fetch(`http://localhost:3000/categories?cat_prefix=${prefix}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const shoppingCartitems = createAsyncThunk(
    "items/shoppingCartitems",
    async (_, ThunkAPI) => {
        const { getState, rejectWithValue } = ThunkAPI;
        const {
            cart: { items },
        } = getState()

        if (!Object.keys(items).length) {
            return []
        }
        const ids = Object.keys(items).map((el) => `id=${el}`).join("&")
        try {
            const res = await fetch(`http://localhost:3000/categories?${ids}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }

)

const initialState = { loading: false, error: null, records: [] }

const itemSlice = createSlice({
    name: "items",
    initialState,
    //لل الاساس وينضف الداتا  state عشان يرجع ال 
    reducers: {
        cleanRecords(state) {
            state.records = [];
        }
    },
    extraReducers: (builder) => {
        // filter
        builder.addCase(filterItems.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(filterItems.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        });
        builder.addCase(filterItems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // get cart item
        builder.addCase(shoppingCartitems.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(shoppingCartitems.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        });
        builder.addCase(shoppingCartitems.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // remove 
        builder.addCase(removeItem, (state, action) => {
            const id = action.payload;
            state.records=state.records.filter(el=> el.id !== id)
        })
    },
})

export default itemSlice.reducer;