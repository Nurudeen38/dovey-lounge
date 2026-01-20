import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header />
            <Box component="main">
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
