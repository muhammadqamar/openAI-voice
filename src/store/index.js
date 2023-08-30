import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/test";

export const store = configureStore({
    reducer: {
        counterSlice,
    }

})



// export RootState = ReturnType<store.getState>
// export AppDispatch = store.dispatch;
