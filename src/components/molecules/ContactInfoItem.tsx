// ContactInfoItem - Reusable contact info display with icon
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface ContactInfoItemProps {
    icon: ReactNode;
    label: string;
    value: string;
    href?: string;
}

const ContactInfoItem = ({ icon, label, value, href }: ContactInfoItemProps) => {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ color: 'secondary.main', mt: 0.5 }}>
                {icon}
            </Box>
            <Box>
                <Typography
                    variant="h6"
                    sx={{ color: 'secondary.main', mb: 0.5 }}
                >
                    {label}
                </Typography>
                {href ? (
                    <Typography
                        variant="body1"
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'text.secondary',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                            '&:hover': {
                                color: 'secondary.main',
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        {value}
                    </Typography>
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        {value}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default ContactInfoItem;
