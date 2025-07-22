// App.jsx
import  { Container, Typography, Grid } from '@mui/material';



const DashboardTwo = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Annuity Dashboard</Typography>
      <Grid container spacing={3}>

        {/* <Grid item xs={12} ><PensionGrid /></Grid>
        <Grid item xs={12} md={6}><ApplicationStatusCard /></Grid>
        <Grid item xs={12} md={6}><PolicyTerms /></Grid>
        <Grid item xs={12} md={6}><AdvisorContact /></Grid>
        <Grid item xs={12} md={6}><StatusPieChart /></Grid>
        <Grid item xs={12} md={6}><IncomeTaxPieChart /></Grid> */}
      </Grid>
    </Container>
  );
};

export default DashboardTwo;