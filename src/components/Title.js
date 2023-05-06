// Title Component
import { Box, Typography } from '@mui/material';
import React from 'react';

export const Title = () => {
  return (
    <Box bgcolor="primary.main" >
      <Typography variant="h1" color="common.white" >天気予報アプリ</Typography>
    </Box>
  );
}