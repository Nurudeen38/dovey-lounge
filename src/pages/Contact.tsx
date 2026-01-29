import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    BUSINESS_HOURS,
    GOOGLE_MAPS_URL,
    PHONE,
    SOCIAL_HANDLE,
    SOCIAL_LINKS,
    CONTACT_CONTENT,
    PAGE_META,
} from '@/constants';
import { SectionTitle, ContactInfoItem, SEO } from '@/components';
import { useBooking } from '@/context/BookingContext';
import { Chip } from '@mui/material';
import { TikTokIcon } from '@/components/icons/TikTokIcon';
import { contactSchema, type ContactFormData } from '@/lib/validation';

const getSocialUrl = (platform: string) => SOCIAL_LINKS.find(s => s.platform === platform)?.url;

const CONTACT_INFO = [
    { label: 'Address', value: ADDRESS, icon: <LocationOn />, href: GOOGLE_MAPS_URL },
    { label: 'Phone', value: PHONE, icon: <Phone />, href: `tel:${PHONE}` },
    { label: 'Instagram', value: SOCIAL_HANDLE, icon: <Instagram />, href: getSocialUrl('Instagram') },
    { label: 'TikTok', value: SOCIAL_HANDLE, icon: <TikTokIcon />, href: getSocialUrl('TikTok') },
    { label: 'Facebook', value: SOCIAL_HANDLE, icon: <Facebook />, href: getSocialUrl('Facebook') },
    { label: 'Twitter', value: SOCIAL_HANDLE, icon: <Twitter />, href: getSocialUrl('Twitter') },
];

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
            const messageText = `${CONTACT_CONTENT.FORM.WHATSAPP_MESSAGE.INTRO}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || CONTACT_CONTENT.FORM.WHATSAPP_MESSAGE.DEFAULT_SERVICE}
Message: ${formData.message || CONTACT_CONTENT.FORM.WHATSAPP_MESSAGE.DEFAULT_MESSAGE}`;

            const encodedMessage = encodeURIComponent(messageText);
            const whatsappUrl = `https://wa.me/2348152543551?text=${encodedMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            setSnackbar({
                open: true,
                message: CONTACT_CONTENT.FORM.SUCCESS,
                severity: 'success',
            });

            reset();
            clearServices();
        } catch (error) {
            setSnackbar({
                open: true,
                message: CONTACT_CONTENT.FORM.ERROR,
                severity: 'error',
            });
        } finally {
        }
    };

    return (
        <Box sx={{ pt: { xs: 12, md: 14 } }}>
            <SEO
                title={PAGE_META.CONTACT.title}
                description={PAGE_META.CONTACT.description}
            />
            {/* Hero */}
            <Box sx={{ py: 8, bgcolor: '#1a1a1a', color: '#FAF9F6' }}>
                <Container maxWidth="lg">
                    <Box data-aos="fade-up">
                        <SectionTitle
                            subtitle={CONTACT_CONTENT.HERO.SUBTITLE}
                            title={CONTACT_CONTENT.HERO.TITLE}
                            description={CONTACT_CONTENT.HERO.DESCRIPTION}
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
                                    {CONTACT_CONTENT.FORM.TITLE}
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
                                            {CONTACT_CONTENT.FORM.SELECTED_SERVICES}
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
                                                label={CONTACT_CONTENT.FORM.FIELDS.NAME_LABEL}
                                                {...register('name')}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}

                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label={CONTACT_CONTENT.FORM.FIELDS.EMAIL_LABEL}
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
                                                label={CONTACT_CONTENT.FORM.FIELDS.PHONE_LABEL}
                                                {...register('phone')}
                                                error={!!errors.phone}
                                                helperText={errors.phone?.message}

                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label={CONTACT_CONTENT.FORM.FIELDS.SERVICE_LABEL}
                                                {...register('service')}
                                                error={!!errors.service}
                                                helperText={errors.service?.message}
                                                variant="outlined"
                                                placeholder={CONTACT_CONTENT.FORM.FIELDS.SERVICE_PLACEHOLDER}
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
                                                label={CONTACT_CONTENT.FORM.FIELDS.MESSAGE_LABEL}
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
                                                {isSubmitting ? CONTACT_CONTENT.FORM.FIELDS.SUBMITTING : CONTACT_CONTENT.FORM.FIELDS.SUBMIT_BUTTON}
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
                                    {CONTACT_CONTENT.INFO.TITLE}
                                </Typography>

                                <Stack spacing={3} sx={{ mb: 6 }}>
                                    {CONTACT_INFO.map((info) => (
                                        <ContactInfoItem key={info.label} {...info} />
                                    ))}
                                </Stack>

                                <Typography variant="h3" sx={{ mb: 3 }}>
                                    {CONTACT_CONTENT.INFO.HOURS_TITLE}
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
