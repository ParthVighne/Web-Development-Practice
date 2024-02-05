import {configureStore} from "@reduxjs/toolkit"
import itemsSilce from "./itemsSlice"
import fetchStatusSlice from "./fetchStatusSlice"


const myntraStore = configureStore({
    reducer: {
        items: itemsSilce.reducer,
        fetchStatus: fetchStatusSlice.reducer
    }
})

export default myntraStore;