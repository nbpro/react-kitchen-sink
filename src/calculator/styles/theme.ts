const themes = {
    "data" : {
        "light" : {
            "id": "T_001",
            "name": "Light",
            "colors": {
                "body": "#FFFFFF",
                "text": "#000000",
                "button": {
                    "text": "#FFFFFF",
                    "background": "#000000"
                },
                "link": {
                    "text": "teal",
                    "opacity": 1
                }
            },
            "font": "Tinos"
        },
        "dark" : {
            "id": "T_007",
            "name": "Sea Wave",
            "colors": {
                "body": "#9be7ff",
                "text": "#0d47a1",
                "button": {
                    "text": "#ffffff",
                    "background": "#0d47a1"
                },
                "link": {
                    "text": "#0d47a1",
                    "opacity": 0.8
                }
            },
            "font": "Ubuntu"
        }
    }
};



import { useState } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(themes.data.light);

    const setMode = (mode: any) => {
        setTheme(mode);
    };
    return { theme, setMode };
};