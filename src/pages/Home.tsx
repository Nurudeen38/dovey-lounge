import { useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ROUTES } from '@/routes';
import { HOME_PREVIEW_SERVICES, BUSINESS_STATS } from '@/constants';
import { SectionTitle, ServiceCard, StatItem } from '@/components';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    pt: { xs: 10, md: 0 },
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box data-aos="fade-up">
                                <Typography
                                    variant="h6"
                                    sx={{ color: 'secondary.main', mb: 2, fontWeight: 400 }}
                                >
                                    LUXURY NAIL SPA
                                </Typography>
                                <Typography variant="h1" sx={{ mb: 3, color: 'text.primary' }}>
                                    Elegance at Your Fingertips
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        mb: 4,
                                        maxWidth: 450,
                                        lineHeight: 1.8,
                                    }}
                                >
                                    Experience the art of beauty at Dovey Nails Lounge. From
                                    exquisite nail designs to lash extensions and permanent
                                    makeup, we craft elegance tailored to you.
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        component={Link}
                                        to={ROUTES.SERVICES}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                    >
                                        View Services
                                    </Button>
                                    <Button
                                        component={Link}
                                        to={ROUTES.CONTACT}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderColor: 'text.primary',
                                            color: 'text.primary',
                                            '&:hover': {
                                                borderColor: 'secondary.main',
                                                color: 'secondary.main',
                                                bgcolor: 'transparent',
                                            },
                                        }}
                                    >
                                        Book Appointment
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                data-aos="fade-left"
                                data-aos-delay="200"
                                sx={{
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -20,
                                        right: -20,
                                        width: '100%',
                                        height: '100%',
                                        border: '2px solid',
                                        borderColor: 'secondary.main',
                                        zIndex: 0,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/hero-nails.png"
                                    alt="Elegant manicured hands"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Services Preview */}
            <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle="OUR SERVICES"
                            title="Curated Beauty Experiences"
                            description="From nail artistry to permanent makeup, discover our comprehensive range of beauty services designed to enhance your natural elegance."
                        />
                    </Box>

                    <Grid container spacing={3}>
                        {HOME_PREVIEW_SERVICES.map((service, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.name}>
                                <ServiceCard {...service} index={index} />
                            </Grid>
                        ))}
                    </Grid>

                    <Box textAlign="center" mt={6}>
                        <Button
                            component={Link}
                            to={ROUTES.SERVICES}
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: 'text.primary',
                                color: 'text.primary',
                                '&:hover': {
                                    borderColor: 'secondary.main',
                                    color: 'secondary.main',
                                },
                            }}
                        >
                            View All Services
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* About Preview */}
            <Box sx={{ py: 12, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box data-aos="fade-right">
                                <SectionTitle
                                    subtitle="ABOUT US"
                                    title="The Dovey Experience"
                                    description="At Dovey Nails Lounge, we believe beauty is an art form. Our skilled artisans combine traditional techniques with modern innovation to create stunning, personalized looks."
                                    light
                                    align="left"
                                />
                                <Button
                                    component={Link}
                                    to={ROUTES.ABOUT}
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'secondary.main',
                                        color: 'secondary.main',
                                        '&:hover': {
                                            bgcolor: 'secondary.main',
                                            color: '#1a1a1a',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack spacing={4} data-aos="fade-left" data-aos-delay="200">
                                {BUSINESS_STATS.map((stat) => (
                                    <StatItem key={stat.label} {...stat} />
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 10, bgcolor: 'success.main', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Box data-aos="fade-up">
                        <Typography variant="h2" sx={{ mb: 2, color: '#FAF9F6' }}>
                            Ready for Your Transformation?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                                color: 'rgba(250,249,246,0.85)',
                                maxWidth: 500,
                                mx: 'auto',
                            }}
                        >
                            Book your appointment today and discover the perfect blend of
                            artistry and relaxation at Dovey Nails Lounge.
                        </Typography>
                        <Button
                            component={Link}
                            to={ROUTES.CONTACT}
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: '#FAF9F6',
                                color: '#1a1a1a',
                                '&:hover': { bgcolor: 'secondary.main' },
                            }}
                        >
                            Book Your Appointment
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;
