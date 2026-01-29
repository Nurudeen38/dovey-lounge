import { useState, useEffect } from 'react';
import { Box, Container, Button, Grid, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ROUTES } from '@/constants';
import { SERVICE_CATEGORIES, PAGE_META, SERVICES_CONTENT } from '@/constants';
import { SectionTitle, ServiceCard, SEO } from '@/components';
import { useBooking } from '@/context/BookingContext';
import { Fab, Fade } from '@mui/material';
import { BookmarkAdd } from '@mui/icons-material';

const Services = () => {
    const { toggleService, isServiceSelected, selectedServices } = useBooking();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredCategories = activeCategory === 'all'
        ? SERVICE_CATEGORIES
        : SERVICE_CATEGORIES.filter(cat => cat.title === activeCategory);

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title={PAGE_META.SERVICES.title}
                description={PAGE_META.SERVICES.description}
            />
            {/* Hero */}
            <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle={SERVICES_CONTENT.HERO.SUBTITLE}
                            title={SERVICES_CONTENT.HERO.TITLE}
                            description={SERVICES_CONTENT.HERO.DESCRIPTION}
                            light
                        />
                    </Box>
                </Container>
            </Box>

            {/* Filter Tabs */}
            <Box sx={{ mb: 4, bgcolor: 'background.default', pt: 4 }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Tabs
                            value={activeCategory}
                            onChange={(_, newValue) => setActiveCategory(newValue)}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            sx={{
                                '& .MuiTab-root': {
                                    textTransform: 'uppercase',
                                    fontWeight: 500,
                                    letterSpacing: '0.1em',
                                    fontSize: '0.875rem',
                                },
                                '& .Mui-selected': { color: 'secondary.main' },
                                '& .MuiTabs-indicator': { bgcolor: 'secondary.main' },
                            }}
                        >
                            <Tab value="all" label="All Services" />
                            {SERVICE_CATEGORIES.map((cat) => (
                                <Tab key={cat.title} value={cat.title} label={cat.title} />
                            ))}
                        </Tabs>
                    </Box>
                </Container>
            </Box>

            {/* Service Categories */}
            {filteredCategories.map((category, catIndex) => (
                <Box
                    key={category.title}
                    sx={{
                        py: 4,
                        bgcolor: catIndex % 2 === 0 ? 'background.default' : 'background.paper',
                    }}
                >
                    <Container maxWidth="lg">
                        <Box data-aos="fade-up">
                            <SectionTitle title={category.title} description={category.description} />
                        </Box>

                        <Grid container spacing={3}>
                            {category.services.map((service, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.name}>
                                    <Box data-aos="fade-up" data-aos-delay={index * 50} sx={{ height: '100%' }}>
                                        <ServiceCard
                                            {...service}
                                            index={index}
                                            showPrice
                                            isSelected={isServiceSelected(service.name)}
                                            onToggle={() => toggleService(service)}
                                        />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            ))}

            {/* CTA */}
            <Box sx={{ py: 10, bgcolor: 'success.main', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <SectionTitle
                        title={SERVICES_CONTENT.CTA.TITLE}
                        description={SERVICES_CONTENT.CTA.DESCRIPTION}
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
                        {SERVICES_CONTENT.CTA.BUTTON}
                    </Button>
                </Container>
            </Box>

            {/* Floating Booking Button */}
            <Fade in={selectedServices.length > 0}>
                <Fab
                    variant="extended"
                    color="secondary"
                    component={Link}
                    to={ROUTES.CONTACT}
                    sx={{
                        position: 'fixed',
                        bottom: 32,
                        right: 32,
                        zIndex: 1000,
                        fontWeight: 600,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    }}
                >
                    <BookmarkAdd sx={{ mr: 1 }} />
                    Book Selected ({selectedServices.length})
                </Fab>
            </Fade>
        </Box >
    );
};

export default Services;
