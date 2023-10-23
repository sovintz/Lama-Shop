import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffff00',
        },
        secondary: {
            main: '#00ffff',
        },
        background: {
            default: '#F7F7F9',
        },

    },
    // Add other theme customization here
});

export default theme;