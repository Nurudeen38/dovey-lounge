import { useEffect, useRef, useState } from 'react';
import { Box, useTheme } from '@mui/material';

const CustomCursor = () => {
    const dotRef = useRef({ x: -100, y: -100 });
    const ringRef = useRef({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();

    const dotEl = useRef<HTMLDivElement>(null);
    const ringEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const onMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            dotRef.current = { x: e.clientX, y: e.clientY };
        };

        const animateLoop = () => {
            // Smooth interpolation for the ring
            ringRef.current.x += (dotRef.current.x - ringRef.current.x) * 0.15;
            ringRef.current.y += (dotRef.current.y - ringRef.current.y) * 0.15;

            if (dotEl.current) {
                dotEl.current.style.transform = `translate3d(${dotRef.current.x}px, ${dotRef.current.y}px, 0) translate(-50%, -50%)`;
            }
            if (ringEl.current) {
                ringEl.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(animateLoop);
        };

        window.addEventListener('mousemove', onMouseMove);
        animationFrameId = requestAnimationFrame(animateLoop);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    // Handle cursor visibility when leaving/entering the window
    useEffect(() => {
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    if (typeof window === 'undefined') return null;

    return (
        <>
            <Box
                ref={dotEl}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '4px',
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    willChange: 'transform',
                }}
            />
            <Box
                ref={ringEl}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '20px',
                    height: '30px',
                    backgroundColor: `#44A194`, // semi-transparent
                    backdropFilter: 'blur(2px)',
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // Elegant almond nail shape
                    boxShadow: 'inset 0 4px 6px rgba(18, 187, 128, 0.31), inset 0 -2px 4px rgba(28, 234, 210, 0.1)',
                    pointerEvents: 'none',
                    zIndex: 20000,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    willChange: 'transform',
                }}
            />
        </>
    );
};

export default CustomCursor;
