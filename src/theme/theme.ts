import {createTheme, Theme} from '@mui/material';

const themeBlue = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2196f3', // blue 600
            light: '#bbdefb', // blue 100
            dark: '#1976d2', // blue 700
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

type PageDictionaryClient = {
    [theme: string]: Theme
};

const themeDictClient: PageDictionaryClient = {
    'themeBlue': themeBlue,
    'themeRed': themeRed,
}

export default themeDictClient
export { themeBlue, themeRed};