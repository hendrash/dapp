

export enum respErr{
    PROVIDER="No ethereum provider was found", 
    AUTHORIZATION="Authorization error", 
    CANT_FIND_CONNECTOR="Can't find connector",
    UNKNOWN_ERROR="Unknown error",
    REQUEST_PENDING = "The request is pending"
}
export enum respWrn{
}
export enum respMsg{
    INJECTED = 'Injected'
}

export const resp ={...respErr, ...respMsg, ...respWrn} ;
export type respBody={
    response: typeof resp[keyof typeof resp],
    message?: string,
    callBack?:(header: string, description:string)=>any;
}