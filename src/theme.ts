import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1a1a1a', // Black
            light: '#333333',
            dark: '#000000',
            contrastText: '#FAF9F6',
        },
        secondary: {
            main: '#C9A962', // Gold
            light: '#D4BC82',
            dark: '#A88A4A',
            contrastText: '#1a1a1a',
        },
        background: {
            default: '#FAF9F6', // Off-white
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#555555',
        },
        success: {
            main: '#2D5A4A', // Forest Green
            light: '#3D7A64',
            dark: '#1D3A30',
        },
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 400,
            fontSize: '4rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 400,
            fontSize: '2.75rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 500,
            fontSize: '2rem',
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: '"Cormorant Garamond", "Georgia", serif',
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        h5: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h6: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            letterSpacing: '0.05em',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    padding: '12px 32px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                containedSecondary: {
                    color: '#1a1a1a',
                    '&:hover': {
                        backgroundColor: '#D4BC82',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;
