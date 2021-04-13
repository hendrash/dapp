import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Toast, ToastsState, toastTypes } from './types'
const initialState: ToastsState={
    data:[]
}
export const toastsSlice= createSlice({
name: 'toasts',
initialState,
reducers:{
    push: (state: ToastsState, action: PayloadAction<Toast>)=>{
        const {payload}=action
        const toastIndex=state.data.findIndex((toast)=>toast.id===action.payload.id)
        // If id alread matches remove it before adding it to the top of the stack
        if(toastIndex >=0){
            state.data.splice(toastIndex,1);
        }
        state.data.unshift(payload)

    },
    remove: (state: ToastsState, action: PayloadAction<string>)=>{
        const toastIndex= state.data.findIndex(toast=>toast.id===action.payload)
        if(toastIndex >=0){
            state.data.splice(toastIndex,1)
        }
    },
    clear:(state: ToastsState)=>{
        state.data=[]
    }
}
})
export const {clear, remove, push}= toastsSlice.actions;
export default toastsSlice.reducer;
export type { Toast  }
export {toastTypes}
