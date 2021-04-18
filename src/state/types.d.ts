import { ToastsState } from "./toasts/types";

export interface BlockState{
    currentBlock: number;
    initalBlock: number;
}

export interface State{
    toasts: ToastsState;
    block: BlockState;
}