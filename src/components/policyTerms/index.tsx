import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PolicyTerms = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Policy Terms</Typography>
      <Typography variant="body2">
        This annuity provides a guaranteed income for life. Withdrawals before age 59½ may be subject to penalties.
      </Typography>
    </CardContent>
  </Card>
);

export default PolicyTerms;