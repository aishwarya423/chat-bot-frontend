
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const AdvisorContact = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Advisor Contact</Typography>
      <Typography>Name: Jane Doe</Typography>
      <Typography>Email: <Link href="mailto:jane.doe@example.com">jane.doe@example.com</Link></Typography>
      <Typography>Phone: <Link href="tel:+1234567890">+1 234 567 890</Link></Typography>
    </CardContent>
  </Card>
);

export default AdvisorContact;
