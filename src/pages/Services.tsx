import { useEffect } from 'react';
import { Box, Container, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { ROUTES } from '@/routes';
import { SERVICE_CATEGORIES } from '@/constants';
import { SectionTitle, ServiceCard, SEO } from '@/components';
import { useBooking } from '@/context/BookingContext';
import { Fab, Fade } from '@mui/material';
import { BookmarkAdd } from '@mui/icons-material';

const Services = () => {
    const { toggleService, isServiceSelected, selectedServices } = useBooking();

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title="Services"
                description="Explore our wide range of beauty services at Dovey's Nail Lounge: Acrylic Nails, Gel Polish, Pedicures, Manicures, Lash Extensions, and Permanent Makeup."
            />
            {/* Hero */}
            <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle="OUR SERVICES"
                            title="Beauty Services"
                            description="Discover our comprehensive menu of beauty services, from nail artistry to permanent makeup. Each service is delivered with precision, care, and attention to detail."
                            light
                        />
                    </Box>
                </Container>
            </Box>

            {/* Service Categories */}
            {SERVICE_CATEGORIES.map((category, catIndex) => (
                <Box
                    key={category.title}
                    sx={{
                        py: 10,
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
                        title="Ready to Book?"
                        description="Contact us to schedule your appointment and experience the Dovey difference."
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
                        Book Appointment
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
