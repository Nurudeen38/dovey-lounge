import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

const Layout = () => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header />
            <Box component="main">
                <Outlet />
                <Analytics />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
