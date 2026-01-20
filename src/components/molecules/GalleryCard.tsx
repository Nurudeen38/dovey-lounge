// GalleryCard - Reusable gallery item card
import { Paper, Box, Typography } from '@mui/material';
import type { GalleryItem } from '@/constants';

interface GalleryCardProps extends GalleryItem {
    index?: number;
}

const GalleryCard = ({ title, color, index = 0 }: GalleryCardProps) => {
    const isDark = color === '#1a1a1a';

    return (
        <Paper
            data-aos="fade-up"
            data-aos-delay={index * 50}
            elevation={0}
            sx={{
                aspectRatio: '1/1',
                bgcolor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                    '& .overlay': {
                        opacity: 1,
                    },
                },
            }}
        >
            <Typography
                sx={{
                    color: isDark ? '#FAF9F6' : '#1a1a1a',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                }}
            >
                {title}
            </Typography>
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(26,26,26,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                }}
            >
                <Typography sx={{ color: '#FAF9F6', fontWeight: 500 }}>
                    View Details
                </Typography>
            </Box>
        </Paper>
    );
};

export default GalleryCard;
