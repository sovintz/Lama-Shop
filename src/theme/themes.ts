import {createTheme, Theme} from '@mui/material';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["300", "400"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const themeBlue = createTheme({
    typography: {
      fontFamily: poppins.style.fontFamily,
        button: {
          textTransform: "none"
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#0D6EFD', // blue 600
            light: '#DAE2ff', // blue 100
            dark: '#0057CE', // blue 700
        },
        secondary: {
            main: '#00ffff',
        },
        background: {
            default: '#F7F7F9',
        },
        text: {
            primary: '#000000',
            secondary: '#757575', // gray text
        }


    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            }
        },
        MuiAccordion:{
            defaultProps: {
                elevation: 0,
            }
        },
    }
    // Add other theme customization here
});

const themeRed = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e53935',    // red 600
            light: '#ffcdd2', // red 100
            dark: '#d32f2f', // red 700
        },
        secondary: {
            main: '#00ffff',
        },
        background: {
            default: '#F7F7F9',
        },
        text: {
            primary: '#000000',
            secondary: '#757575', // gray text
        }


    },
    components: {
        MuiAccordion:{
            defaultProps: {
                elevation: 0,
            }
        },
    }
    // Add other theme customization here
});

type ThemeDictionaryClient = {
    [theme: string]: Theme
};

const themeDictClient: ThemeDictionaryClient = {
    'themeBlue': themeBlue,
    'themeRed': themeRed,
}

export default themeDictClient
export { themeBlue, themeRed};