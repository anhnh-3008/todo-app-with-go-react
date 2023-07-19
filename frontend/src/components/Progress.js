import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, colorLight, colorDark }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? colorLight : colorDark,
  },
}));

export default function LinearWithValueLabel({currentAmount, totalAmount, colorLight, colorDark, title}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" color="text.primary">{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <BorderLinearProgress variant="determinate" value={(currentAmount/totalAmount) * 100} colorLight={colorLight} colorDark={colorDark} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${currentAmount}/${totalAmount}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
