import React, {useState} from "react";
import { initialState, Context as CalculatorContext } from "./store";
import CalculatorHome from "./components/CalculatorHome";
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";
import {Switch} from "antd";

const backgroundColor = theme('mode', {
    light: '#fafafa',
    dark: '#222'
});
const textColor = theme('mode', {
    light: '#000',
    dark: '#fff'
});
const AppContainer = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;

export default function CalculatorIndex() {
    const [selectedTheme, setTheme] = useState('light');
    const [state, setState] = React.useState(initialState);
    const store = { state, setState };

    const toggleTheme = () => {
        if (selectedTheme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <ThemeProvider theme={{ mode: selectedTheme }}>
            <AppContainer>
                <Switch onChange={toggleTheme} />
                <CalculatorContext.Provider value={store}>
                    <CalculatorHome/>
                </CalculatorContext.Provider>
            </AppContainer>
        </ThemeProvider>
    );
}
