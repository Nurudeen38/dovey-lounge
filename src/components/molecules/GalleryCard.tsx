// GalleryCard - Reusable gallery item card
import { Paper, Box, Typography } from '@mui/material';
import type { GalleryItem } from '@/constants';

interface GalleryCardProps extends GalleryItem {
    index?: number;
}

const GalleryCard = ({ title, color, imageUrl, index = 0 }: GalleryCardProps) => {
    const isDark = color === '#1a1a1a';

    return (
        <Paper
            data-aos="fade-up"
            data-aos-delay={index * 50}
            elevation={0}
            sx={{
                aspectRatio: '1/1',
                bgcolor: color,
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
                    '& .title': {
                        opacity: 0,
                    },
                },
            }}
        >
            <Typography
                className="title"
                sx={{
                    color: imageUrl ? '#FAF9F6' : (isDark ? '#FAF9F6' : '#1a1a1a'),
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                    zIndex: 1,
                    textShadow: imageUrl ? '0 2px 4px rgba(0,0,0,0.5)' : 'none',
                    transition: 'opacity 0.3s ease',
                }}
            >
                {title}
            </Typography>
            {imageUrl && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.2)', // Light text overlay
                    }}
                />
            )}
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
