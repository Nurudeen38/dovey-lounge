import { Box, Container, Typography, Stack, Grid, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { LocationOn, Phone, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { ADDRESS, PHONE, BUSINESS_HOURS, BUSINESS_TAGLINE, SOCIAL_LINKS, GOOGLE_MAPS_URL, ROUTES } from '@/constants';

// TikTok icon as SVG since MUI doesn't have it
const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 8,
                bgcolor: '#1a1a1a',
                color: '#FAF9F6',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Logo & Social */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Link to={ROUTES.HOME}>
                            <Box
                                component="img"
                                src="/logo.png"
                                alt="Dovey's Nail Lounge"
                                sx={{
                                    height: 80,
                                    width: 'auto',
                                    mb: 2,
                                    borderRadius: 1,
                                }}
                            />
                        </Link>
                        <Typography
                            variant="body2"
                            sx={{ color: 'rgba(250,249,246,0.7)', maxWidth: 280, mb: 2 }}
                        >
                            {BUSINESS_TAGLINE}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {SOCIAL_LINKS.filter((s) => ['Instagram', 'Facebook', 'Twitter', 'TikTok'].includes(s.platform)).map(
                                (social) => (
                                    <IconButton
                                        key={social.platform}
                                        component="a"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            color: 'rgba(250,249,246,0.7)',
                                            '&:hover': { color: 'secondary.main' },
                                        }}
                                        aria-label={social.platform}
                                    >
                                        {social.platform === 'Instagram' && <Instagram />}
                                        {social.platform === 'Facebook' && <Facebook />}
                                        {social.platform === 'Twitter' && <Twitter />}
                                        {social.platform === 'TikTok' && <TikTokIcon />}
                                    </IconButton>
                                )
                            )}
                        </Stack>
                    </Grid>

                    {/* Contact */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                            CONTACT
                        </Typography>
                        <Stack spacing={1.5}>
                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                <LocationOn sx={{ color: 'secondary.main', fontSize: 20, mt: 0.3 }} />
                                <Typography
                                    variant="body2"
                                    component="a"
                                    href={GOOGLE_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: 'rgba(250,249,246,0.7)',
                                        textDecoration: 'none',
                                        '&:hover': { color: 'secondary.main', textDecoration: 'underline' }
                                    }}
                                >
                                    {ADDRESS}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                <Phone sx={{ color: 'secondary.main', fontSize: 20 }} />
                                <Typography
                                    variant="body2"
                                    component="a"
                                    href={`tel:${PHONE}`}
                                    sx={{
                                        color: 'rgba(250,249,246,0.7)',
                                        textDecoration: 'none',
                                        '&:hover': { color: 'secondary.main', textDecoration: 'underline' }
                                    }}
                                >
                                    {PHONE}
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>

                    {/* Hours */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                            HOURS
                        </Typography>
                        <Stack spacing={1}>
                            {BUSINESS_HOURS.map((schedule) => (
                                <Typography
                                    key={schedule.day}
                                    variant="body2"
                                    sx={{ color: 'rgba(250,249,246,0.7)' }}
                                >
                                    {schedule.day}: {schedule.hours}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(250,249,246,0.1)' }} />

                <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', color: 'rgba(250,249,246,0.5)' }}
                >
                    © {new Date().getFullYear()} Dovey Nails Lounge. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
