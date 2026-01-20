// StatItem - Reusable statistic display
import { Box, Typography } from '@mui/material';
import type { Stat } from '@/constants';

interface StatItemProps extends Stat {
    light?: boolean;
}

const StatItem = ({ number, label, light = true }: StatItemProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
            <Typography
                sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '4rem',
                    fontWeight: 300,
                    color: 'secondary.main',
                    lineHeight: 1,
                }}
            >
                {number}
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    color: light ? '#FAF9F6' : 'text.primary',
                    fontWeight: 400,
                }}
            >
                {label}
            </Typography>
        </Box>
    );
};

export default StatItem;
