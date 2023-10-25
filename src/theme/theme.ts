import { createTheme } from '@mui/material';

const theme1 = createTheme({
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

const theme2 = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF0000',
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

const themes = [theme1, theme2];

export default themes;