import React from "react";
import { initialState, Context as CalculatorContext } from "./store";
import CalculatorHome from "./components/CalculatorHome";

export default function CalculatorIndex() {
    const [state, setState] = React.useState(initialState);
    const store = { state, setState };

    return (
        <CalculatorContext.Provider value={store}>
            <CalculatorHome/>
        </CalculatorContext.Provider>
    );
}
