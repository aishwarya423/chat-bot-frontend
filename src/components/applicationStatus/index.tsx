import { Card, CardContent, Typography } from '@mui/material';

const ApplicationStatusCard = () => (
  <Card style={{width:'200px',height:'120px'}}>
    <CardContent>
      <Typography variant="h5">Application Status</Typography>
      <Typography>Status: Approved</Typography>
      <Typography>Submitted On: 2025-06-01</Typography>
    </CardContent>
  </Card>
);

export default ApplicationStatusCard;