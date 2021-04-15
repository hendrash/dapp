import { kebabCase } from 'lodash';
import { useMemo } from 'react';
import { useAppDispatch } from '.';
import { push as pushToast,remove as removeToast, clear as clearToast } from './toasts';
import { Toast, toastTypes } from '@pancakeswap-libs/uikit';

export const useToast =() =>{
    console.log("test")
    const dispatch= useAppDispatch();
    const helper= useMemo(()=>{
    const push=(toast: Toast)=>dispatch(pushToast(toast));
        return {
        toastError:(title:string, description: string)=>{
            return push({id: kebabCase(title), type: toastTypes.DANGER, title, description})
        },
        toastInfo:(title:string,description?: string)=>{
            return push({id: kebabCase(title), type: toastTypes.INFO, title, description})
        },
        toastSuccess: (title: string, description?:string)=>{
            return push({id: kebabCase(title),type: toastTypes.SUCCESS,title,description})
        },
        toastWarning:(title: string, description: string)=>{
            return push({id: kebabCase(title), type: toastTypes.WARNING, title, description})
        },push, remove: (id: string)=>dispatch(removeToast(id)),
        clear: ()=>dispatch(clearToast())
    }
    },[dispatch])
    return helper;
}


