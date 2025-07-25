import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from '../reducers/reducers'
 const store= configureStore({
    reducer:{
        track:trackerReducer
    },
})
export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=ReturnType<typeof store.dispatch>