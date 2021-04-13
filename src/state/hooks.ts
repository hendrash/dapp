import { kebabCase } from 'lodash';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { push as pushToast, Toast, toastTypes } from './toasts';

export const useToast =() =>{
    const dispatch= useDispatch();
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

function removeToast(id: string): any {
    throw new Error('Function not implemented.');
}

function clearToast(): any {
    throw new Error('Function not implemented.');
}

