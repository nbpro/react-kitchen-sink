import { createContext } from "react";

export interface IState {}

export const initialState: IState = {};

export const Context = createContext<{
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}>(undefined as any);
