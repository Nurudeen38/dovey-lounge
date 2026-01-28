import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export interface HeroMedia {
    type: 'image' | 'video';
    src: string;
    poster?: string;
}

interface HeroBackgroundProps {
    items: HeroMedia[];
    overlayOpacity?: number;
    interval?: number;
}

const HeroBackground = ({
    items,
    overlayOpacity = 0.6,
    interval = 6000
}: HeroBackgroundProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (items.length <= 1) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % items.length);
        }, interval);

        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                zIndex: 0,
            }}
        >
            {items.map((item, index) => (
                <Box
                    key={`${item.type}-${index}`}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === activeIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                        // Add a subtle zoom effect for active slide
                        transitionProperty: 'opacity, transform',
                        transitionDuration: '1.5s, 10s', // Opacity fast, scale slow
                        zIndex: 1,
                    }}
                >
                    {item.type === 'video' ? (
                        <Box
                            component="video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={item.poster}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        >
                            <source src={item.src} type="video/mp4" />
                        </Box>
                    ) : (
                        <Box
                            component="img"
                            src={item.src}
                            alt="Hero Background"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </Box>
            ))}

            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: `rgba(0, 0, 0, ${overlayOpacity})`,
                    zIndex: 2,
                }}
            />
        </Box>
    );
};

export default HeroBackground;
