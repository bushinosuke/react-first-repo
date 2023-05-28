// Title Component
import { Box, Typography } from '@mui/material';
import React from 'react';

export const Title = (props) => {
  const { title } = props;
  return (
    <Box bgcolor="primary.main" >
      <Typography variant="h6" color="common.white" >{title}</Typography>
    </Box>
  );
}