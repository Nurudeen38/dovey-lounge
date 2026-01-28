import { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab } from '@mui/material';
import AOS from 'aos';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, SOCIAL_HANDLE } from '@/constants';
import { SectionTitle, GalleryCard, SEO } from '@/components';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    const filteredImages =
        activeTab === 'all'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter((img) => img.category === activeTab);

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title="Gallery"
                description="View our portfolio of stunning nail designs and beauty transformations. See why Dovey's Nail Lounge is the top choice for nail art in Abuja."
            />
            {/* Hero */}
            <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle="OUR WORK"
                            title="Gallery"
                            description="Browse our portfolio of nail designs, beauty transformations, and body art. Each piece showcases our commitment to artistry and client satisfaction."
                            light
                        />
                    </Box>
                </Container>
            </Box>

            {/* Gallery */}
            <Box sx={{ py: 8, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    {/* Tabs */}
                    <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
                        <Tabs
                            value={activeTab}
                            onChange={(_, newValue) => setActiveTab(newValue)}
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
                            {GALLERY_CATEGORIES.map((cat) => (
                                <Tab key={cat.value} value={cat.value} label={cat.label} />
                            ))}
                        </Tabs>
                    </Box>

                    {/* Grid */}
                    <Grid container spacing={3}>
                        {filteredImages.map((image, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={image.id}>
                                <GalleryCard {...image} index={index} />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Note */}
                    <Box textAlign="center" mt={8} data-aos="fade-up">
                        <Typography variant="body1" color="text.secondary">
                            Want to see more? Follow us on Instagram{' '}
                            <Typography
                                component="span"
                                sx={{ color: 'secondary.main', fontWeight: 600 }}
                            >
                                {SOCIAL_HANDLE}
                            </Typography>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Gallery;
