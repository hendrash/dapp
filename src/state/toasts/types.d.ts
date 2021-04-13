export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: string;
    action?: ToastAction;
}
export interface ToastsState {
  data: Toast[]
}
export declare const toastTypes: {
    SUCCESS: string;
    DANGER: string;
    WARNING: string;
    INFO: string;
};