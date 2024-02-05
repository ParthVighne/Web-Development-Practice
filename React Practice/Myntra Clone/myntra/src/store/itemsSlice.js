import { createSlice } from "@reduxjs/toolkit";

const itemsSilce = createSlice({
    name: 'items',
    initialState: [],
    reducers:{
        addInitialItems: (store, action) => {
            return action.payload;
        }
    }
});

export const itemsActions = itemsSilce.actions;
export default itemsSilce;
