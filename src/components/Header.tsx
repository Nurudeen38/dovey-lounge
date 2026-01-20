import { useState } from 'react';
import {
    Box,
    Container,
    Button,
    AppBar,
    Toolbar,
    Stack,
    Link as MuiLink,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, ROUTES } from '@/routes';

const Header = () => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: 'rgba(250, 249, 246, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(26, 26, 26, 0.08)',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
                        <Link to={ROUTES.HOME}>
                            <Box
                                component="img"
                                src="/logo.png"
                                alt="Dovey's Nail Lounge"
                                sx={{
                                    height: { xs: 50, md: 60 },
                                    width: 'auto',
                                }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {NAV_LINKS.slice(1).map((link) => (
                                <MuiLink
                                    key={link.path}
                                    component={Link}
                                    to={link.path}
                                    sx={{
                                        color: location.pathname === link.path ? 'secondary.main' : 'text.primary',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            width: location.pathname === link.path ? '100%' : 0,
                                            height: '1px',
                                            bgcolor: 'secondary.main',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {link.label}
                                </MuiLink>
                            ))}
                        </Stack>

                        {/* Desktop Book Now Button */}
                        <Button
                            component={Link}
                            to={ROUTES.CONTACT}
                            variant="contained"
                            color="secondary"
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            Book Now
                        </Button>

                        {/* Mobile Menu Button */}
                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                color: 'text.primary',
                            }}
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer - Right Side */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        bgcolor: '#FAF9F6',
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                    {/* Drawer Header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Link to={ROUTES.HOME} onClick={toggleDrawer(false)}>
                            <Box
                                component="img"
                                src="/logo.png"
                                alt="Dovey's Nail Lounge"
                                sx={{ height: 50, width: 'auto' }}
                            />
                        </Link>
                        <IconButton onClick={toggleDrawer(false)} aria-label="Close menu">
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    {/* Navigation Links */}
                    <List>
                        {NAV_LINKS.map((link) => (
                            <ListItem key={link.path} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={link.path}
                                    onClick={toggleDrawer(false)}
                                    sx={{
                                        py: 1.5,
                                        borderLeft: '3px solid',
                                        borderColor: location.pathname === link.path ? 'secondary.main' : 'transparent',
                                        bgcolor: location.pathname === link.path ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                                        '&:hover': {
                                            bgcolor: 'rgba(201, 169, 98, 0.1)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontWeight: location.pathname === link.path ? 600 : 400,
                                                color: location.pathname === link.path ? 'secondary.main' : 'text.primary',
                                                letterSpacing: '0.05em',
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    {/* Book Now Button */}
                    <Button
                        component={Link}
                        to={ROUTES.CONTACT}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={toggleDrawer(false)}
                        sx={{ py: 1.5 }}
                    >
                        Book Now
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
