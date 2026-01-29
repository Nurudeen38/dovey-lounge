import { useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ROUTES } from '@/constants';
import { HOME_PREVIEW_SERVICES, BUSINESS_STATS, HOME_CONTENT, PAGE_META } from '@/constants';
import { SectionTitle, ServiceCard, StatItem, SEO, HeroBackground } from '@/components';
import { HERO_SLIDES } from '@/constants/home';


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
            <SEO
                title={PAGE_META.HOME.title}
                description={PAGE_META.HOME.description}
            />
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    pt: { xs: 10, md: 0 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <HeroBackground items={HERO_SLIDES} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Box data-aos="fade-up">
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'secondary.main',
                                        mb: 2,
                                        fontWeight: 700,
                                        letterSpacing: 2,
                                        textTransform: 'uppercase',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    {HOME_CONTENT.HERO.SUBTITLE}
                                </Typography>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        mb: 3,
                                        color: 'common.white',
                                        fontSize: { xs: '2.5rem', md: '4.5rem' },
                                        fontWeight: 800,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    {HOME_CONTENT.HERO.TITLE}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'grey.300',
                                        mb: 4,
                                        maxWidth: 600,
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                                        display: { xs: 'none', md: 'block' },
                                    }}
                                >
                                    {HOME_CONTENT.HERO.DESCRIPTION_DESKTOP}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'grey.300',
                                        mb: 4,
                                        maxWidth: 600,
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                                        display: { xs: 'none', md: 'block' },
                                    }}
                                >
                                    {HOME_CONTENT.HERO.ADDITIONAL_TEXT}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'grey.300',
                                        mb: 4,
                                        maxWidth: 600,
                                        lineHeight: 1.8,
                                        fontSize: '1.1rem',
                                        textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {HOME_CONTENT.HERO.DESCRIPTION_MOBILE}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        component={Link}
                                        to={ROUTES.SERVICES}
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                    >
                                        {HOME_CONTENT.HERO.CTA_PRIMARY}
                                    </Button>
                                    <Button
                                        component={Link}
                                        to={ROUTES.CONTACT}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderColor: 'common.white',
                                            color: 'common.white',
                                            '&:hover': {
                                                borderColor: 'secondary.main',
                                                color: 'secondary.main',
                                                bgcolor: 'transparent',
                                            },
                                        }}
                                    >
                                        {HOME_CONTENT.HERO.CTA_SECONDARY}
                                    </Button>
                                </Stack>
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
                            subtitle={HOME_CONTENT.SERVICES_PREVIEW.SUBTITLE}
                            title={HOME_CONTENT.SERVICES_PREVIEW.TITLE}
                            description={HOME_CONTENT.SERVICES_PREVIEW.DESCRIPTION}
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
                            {HOME_CONTENT.SERVICES_PREVIEW.CTA}
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
                                    subtitle={HOME_CONTENT.ABOUT_PREVIEW.SUBTITLE}
                                    title={HOME_CONTENT.ABOUT_PREVIEW.TITLE}
                                    description={HOME_CONTENT.ABOUT_PREVIEW.DESCRIPTION}
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
                                    {HOME_CONTENT.ABOUT_PREVIEW.CTA}
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
                            {HOME_CONTENT.CTA_SECTION.TITLE}
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
                            {HOME_CONTENT.CTA_SECTION.DESCRIPTION}
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
                            {HOME_CONTENT.CTA_SECTION.BUTTON}
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;
