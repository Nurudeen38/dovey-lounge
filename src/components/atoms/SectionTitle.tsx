// SectionTitle - Reusable section header component
import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;
    light?: boolean; // For dark backgrounds
    align?: 'left' | 'center';
}

const SectionTitle = ({
    subtitle,
    title,
    description,
    light = false,
    align = 'center',
}: SectionTitleProps) => {
    return (
        <Box textAlign={align} mb={6}>
            {subtitle && (
                <Typography
                    variant="h6"
                    sx={{
                        color: 'secondary.main',
                        mb: 1,
                        fontWeight: 400,
                    }}
                >
                    {subtitle}
                </Typography>
            )}
            <Typography
                variant="h2"
                sx={{
                    mb: description ? 2 : 0,
                    color: light ? '#FAF9F6' : 'text.primary',
                }}
            >
                {title}
            </Typography>
            {description && (
                <Typography
                    variant="body1"
                    sx={{
                        color: light ? 'rgba(250,249,246,0.8)' : 'text.secondary',
                        maxWidth: align === 'center' ? 600 : 'none',
                        mx: align === 'center' ? 'auto' : 0,
                        lineHeight: 1.8,
                    }}
                >
                    {description}
                </Typography>
            )}
        </Box>
    );
};

export default SectionTitle;
