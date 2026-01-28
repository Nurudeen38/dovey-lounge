// ServiceCard - Reusable service display card
import { Paper, Typography, Chip, Box } from '@mui/material';
import type { Service } from '@/constants';

interface ServiceCardProps extends Service {
    index?: number;
    showPrice?: boolean;
    isSelected?: boolean;
    onToggle?: () => void;
}

const ServiceCard = ({
    name,
    description,
    price,
    image,
    showPrice = false,
    isSelected = false,
    onToggle
}: ServiceCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 0, // Remove padding from parent to let image fill width
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                border: '1px solid',
                borderColor: isSelected ? 'secondary.main' : 'divider',
                bgcolor: isSelected ? '#FFFCF2' : 'background.paper', // Solid light gold color
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                },
            }}
            onClick={onToggle}
        >
            {image && (
                <Box
                    sx={{
                        height: 200,
                        width: '100%',
                        bgcolor: 'background.default',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mb: 2,
                    }}
                />
            )}

            <Box sx={{ p: showPrice ? 4 : 3, pt: image ? 1 : showPrice ? 4 : 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

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
                {showPrice && (
                    <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {price && (
                            <Chip
                                label={price}
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: '#1a1a1a',
                                    fontWeight: 600,
                                }}
                            />
                        )}
                        {onToggle && (
                            <Typography
                                variant="button"
                                color={isSelected ? 'secondary.main' : 'text.disabled'}
                                sx={{ fontSize: '0.875rem', fontWeight: 600 }}
                            >
                                {isSelected ? 'SELECTED' : 'CLICK TO SELECT'}
                            </Typography>
                        )}
                    </Box>
                )}
            </Box>
        </Paper >
    );
};

export default ServiceCard;
