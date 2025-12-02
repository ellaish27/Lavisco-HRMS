import React from "react";
import { Paper, Typography, Grid, Button } from "@mui/material";

export default function AdminDashboard() {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" color="blue.main" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Button color="red" variant="contained" fullWidth>
            Pending HR Approvals
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button color="green" variant="contained" fullWidth>
            Payroll Status Overview
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button color="purple" variant="contained" fullWidth>
            Broadcast Messages
          </Button>
        </Grid>
        {/* More cards and features */}
      </Grid>
    </Paper>
  );
}