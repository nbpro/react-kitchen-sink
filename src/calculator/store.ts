import { createContext } from "react";

export interface IState {
    result: any[];
}

export const initialState: IState = { result: [] }; // intial state

export const Context = createContext<{
    state: IState;
    setState: React.Dispatch<React.SetStateAction<IState>>;
}>(undefined as any);
