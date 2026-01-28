import { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
    Stack,
    Paper,
    Snackbar,
    Alert,
} from '@mui/material';
import {
    LocationOn,
    Phone,
    Instagram,
    Facebook,
    Twitter,
} from '@mui/icons-material';
import AOS from 'aos';
import {
    ADDRESS,
    PHONE,
    SOCIAL_HANDLE,
    BUSINESS_HOURS,
    FORMSPREE_FORM_ID,
} from '@/constants';
import { SectionTitle, ContactInfoItem } from '@/components';
import { useBooking } from '@/context/BookingContext';
import { Chip } from '@mui/material';

// TikTok icon as SVG since MUI doesn't have it
const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const CONTACT_INFO = [
    { label: 'Address', value: ADDRESS, icon: <LocationOn /> },
    { label: 'Phone', value: PHONE, icon: <Phone /> },
    { label: 'Instagram', value: SOCIAL_HANDLE, icon: <Instagram /> },
    { label: 'TikTok', value: SOCIAL_HANDLE, icon: <TikTokIcon /> },
    { label: 'Facebook', value: SOCIAL_HANDLE, icon: <Facebook /> },
    { label: 'Twitter', value: SOCIAL_HANDLE, icon: <Twitter /> },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { selectedServices, clearServices, removeService } = useBooking();

    useEffect(() => {
        if (selectedServices.length > 0) {
            const servicesList = selectedServices.map(s => s.name).join(', ');
            setFormData(prev => ({
                ...prev,
                service: servicesList,
                message: prev.message || `I would like to book an appointment for: ${servicesList}.`
            }));
        }
    }, [selectedServices]);

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(
                `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setSnackbar({
                    open: true,
                    message: 'Thank you! We will get back to you soon.',
                    severity: 'success',
                });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                clearServices();
            } else {
                throw new Error('Form submission failed');
            }
        } catch {
            setSnackbar({
                open: true,
                message: 'Something went wrong. Please try again or call us directly.',
                severity: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            {/* Hero */}
            <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle="GET IN TOUCH"
                            title="Contact Us"
                            description="Ready to book your appointment or have questions about our services? We'd love to hear from you."
                            light
                        />
                    </Box>
                </Container>
            </Box>

            {/* Contact Content */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8}>
                        {/* Contact Form */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Paper
                                data-aos="fade-right"
                                elevation={0}
                                sx={{ p: { xs: 3, md: 5 }, border: '1px solid', borderColor: 'divider' }}
                            >
                                <Typography variant="h3" sx={{ mb: 4 }}>
                                    Book Your Appointment
                                </Typography>

                                {selectedServices.length > 0 && (
                                    <Box sx={{ mb: 4, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
                                        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                            Selected Services:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {selectedServices.map((service) => (
                                                <Chip
                                                    key={service.name}
                                                    label={service.name}
                                                    onDelete={() => removeService(service.name)}
                                                    color="secondary"
                                                    size="small"
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                )}

                                <Box component="form" onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Service Interested In"
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                variant="outlined"
                                                placeholder="e.g., Acrylic Nails, Lash Extensions"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                fullWidth
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Contact Info */}
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box data-aos="fade-left">
                                <Typography variant="h3" sx={{ mb: 4 }}>
                                    Contact Information
                                </Typography>

                                <Stack spacing={3} sx={{ mb: 6 }}>
                                    {CONTACT_INFO.map((info) => (
                                        <ContactInfoItem key={info.label} {...info} />
                                    ))}
                                </Stack>

                                <Typography variant="h3" sx={{ mb: 3 }}>
                                    Business Hours
                                </Typography>

                                <Stack spacing={2}>
                                    {BUSINESS_HOURS.map((schedule) => (
                                        <Box
                                            key={schedule.day}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                borderBottom: '1px solid',
                                                borderColor: 'divider',
                                                pb: 1.5,
                                            }}
                                        >
                                            <Typography variant="body1" fontWeight={500}>
                                                {schedule.day}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {schedule.hours}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Map Placeholder */}
            <Box
                sx={{
                    height: 400,
                    bgcolor: '#1a1a1a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: 'rgba(250,249,246,0.5)',
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.5rem',
                    }}
                >
                    Map Integration Coming Soon
                </Typography>
            </Box>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
