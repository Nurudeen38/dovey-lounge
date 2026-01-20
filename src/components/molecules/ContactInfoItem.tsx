// ContactInfoItem - Reusable contact info display with icon
import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface ContactInfoItemProps {
    icon: ReactNode;
    label: string;
    value: string;
}

const ContactInfoItem = ({ icon, label, value }: ContactInfoItemProps) => {
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
                <Typography variant="body1" color="text.secondary">
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};

export default ContactInfoItem;
