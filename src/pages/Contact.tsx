import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

} from '@/constants';
import { SectionTitle, ContactInfoItem, SEO } from '@/components';
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

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    service: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        },
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
    });

    const { selectedServices, clearServices, removeService } = useBooking();

    useEffect(() => {
        if (selectedServices.length > 0) {
            const servicesList = selectedServices.map((s) => s.name).join(', ');
            setValue('service', servicesList);
            setValue('message', `I would like to book an appointment for: ${servicesList}.`);
        }
    }, [selectedServices, setValue]);

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (formData: ContactFormData) => {
        try {

            // Format the message for WhatsApp
            const messageText = `Hello, I would like to make an enquiry/booking.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || 'Not specified'}
Message: ${formData.message || 'No additional message'}`;

            const encodedMessage = encodeURIComponent(messageText);
            const whatsappUrl = `https://wa.me/2348152543551?text=${encodedMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setSnackbar({
                open: true,
                message: 'Redirecting to WhatsApp to complete your booking...',
                severity: 'success',
            });

            reset();
            clearServices();
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Something went wrong. Please try again or call us directly.',
                severity: 'error',
            });
        } finally {
        }
    };

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title="Contact Us"
                description="Book your appointment at Dovey's Nail Lounge via WhatsApp. Locate us in Dawaki, Abuja for premium nail and beauty services."
            />
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
                                sx={{
                                    p: { xs: 3, md: 5 },
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 4 }}>
                                    Book Your Appointment
                                </Typography>

                                {selectedServices.length > 0 && (
                                    <Box
                                        sx={{
                                            mb: 4,
                                            p: 2,
                                            bgcolor: 'background.default',
                                            borderRadius: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ mb: 1, fontWeight: 600 }}
                                        >
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

                                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container spacing={3}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Name"
                                                {...register('name')}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}

                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                type="email"
                                                {...register('email')}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}

                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                {...register('phone')}
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}

                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Service Interested In"
                                                {...register('service')}
                                                error={!!errors.service}
                                                helperText={errors.service?.message}
                                                variant="outlined"
                                                placeholder="e.g., Acrylic Nails, Lash Extensions"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                multiline
                                                rows={4}
                                                {...register('message')}
                                                error={!!errors.message}
                                                helperText={errors.message?.message}
                                                variant="outlined"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                    },
                                                }}
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
