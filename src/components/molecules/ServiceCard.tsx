// ServiceCard - Reusable service display card
import { Paper, Typography, Chip } from '@mui/material';
import type { Service } from '@/constants';

interface ServiceCardProps extends Service {
    index?: number;
    showPrice?: boolean;
}

const ServiceCard = ({ name, description, price, index = 0, showPrice = false }: ServiceCardProps) => {
    return (
        <Paper
            data-aos="fade-up"
            data-aos-delay={index * 50}
            elevation={0}
            sx={{
                p: showPrice ? 4 : 3,
                height: '100%',
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                },
            }}
        >
            <Typography variant="h5" sx={{ mb: showPrice ? 2 : 1 }}>
                {name}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: showPrice ? 3 : 0, minHeight: showPrice ? 60 : 'auto' }}
            >
                {description}
            </Typography>
            {showPrice && price && (
                <Chip
                    label={price}
                    sx={{
                        bgcolor: 'secondary.main',
                        color: '#1a1a1a',
                        fontWeight: 600,
                    }}
                />
            )}
        </Paper>
    );
};

export default ServiceCard;
