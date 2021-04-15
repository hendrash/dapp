import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import toastsReducer from './toasts';
const store= configureStore({
    devTools: process.env.NODE_ENV!=='production',
    // enhancers: composeWithDevTools(applyMiddleware(logger)),
    reducer:{
        toasts: toastsReducer
    },
    // middleware: logger
    
// import { createLogger } from 'redux-logger'
    
})
export type AppDispatch =typeof store.dispatch
export const useAppDispatch=()=>useDispatch<AppDispatch>()
export default store