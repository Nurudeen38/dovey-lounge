import { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ROUTES } from '@/constants';
import { BUSINESS_STATS, COMPANY_VALUES, ABOUT_CONTENT, PAGE_META } from '@/constants';
import { SectionTitle, StatItem, SEO } from '@/components';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title={PAGE_META.ABOUT.title}
                description={PAGE_META.ABOUT.description}
            />
            {/* Hero */}
            <Box sx={{ py: 10, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box data-aos="fade-right">
                                <SectionTitle
                                    subtitle={ABOUT_CONTENT.HERO.SUBTITLE}
                                    title={ABOUT_CONTENT.HERO.TITLE}
                                    description={ABOUT_CONTENT.HERO.DESCRIPTION}
                                    light
                                    align="left"
                                />
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

            {/* Mission */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box data-aos="fade-right">
                                <SectionTitle
                                    subtitle={ABOUT_CONTENT.MISSION.SUBTITLE}
                                    title={ABOUT_CONTENT.MISSION.TITLE}
                                    description={ABOUT_CONTENT.MISSION.DESCRIPTION}
                                    align="left"
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                data-aos="fade-left"
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
                                    alt="Nail artistry"
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

            {/* Values */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle subtitle={ABOUT_CONTENT.VALUES.SUBTITLE} title={ABOUT_CONTENT.VALUES.TITLE} />
                    </Box>

                    <Grid container spacing={4}>
                        {COMPANY_VALUES.map((value, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={value.title}>
                                <Box
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    sx={{ textAlign: 'center', p: 3, height: '100%' }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: '"Cormorant Garamond", serif',
                                            fontSize: '3rem',
                                            fontWeight: 300,
                                            color: 'secondary.main',
                                            mb: 2,
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </Typography>
                                    <Typography variant="h5" sx={{ mb: 2 }}>
                                        {value.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {value.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{ py: 10, bgcolor: 'success.main', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <SectionTitle
                        title={ABOUT_CONTENT.CTA.TITLE}
                        description={ABOUT_CONTENT.CTA.DESCRIPTION}
                        light
                    />
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
                        {ABOUT_CONTENT.CTA.BUTTON}
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default About;
