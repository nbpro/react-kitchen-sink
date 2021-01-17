
  export type Investor = {
    id: string;
    imageUrl: string;
    name?: string;
    createdAt?:string;
    companies?: Array<string>;
  };
  export type IStore<TState> = {
    state: TState;
    setState: React.Dispatch<React.SetStateAction<TState>>;
  };