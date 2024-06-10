// Import necessary React and Material-UI components and hooks
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// function comp. to render the copyright information
function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Copyright © "}
      <Link color="inherit" href="#" sx={{ textDecoration: "none" }}>
        Ello Technology Inc. All Rights Reserved.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//  main Footer component
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "teal",
        py: 6,
        width: "100%",
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={2} style={{ color: "white" }}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2} style={{ color: "white" }}>
            <Typography variant="h6" gutterBottom>
              For Teachers
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Students
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2} style={{ color: "white" }}>
            <Typography variant="h6" gutterBottom>
              Community
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  My Account
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={2} style={{ color: "white" }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} style={{ color: "white" }}>
            <Typography variant="h6" gutterBottom>
              Keep up to date
            </Typography>
            <Typography variant="body1" gutterBottom>
              Join our newsletter for regular updates. No spam ever.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Your email"
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                marginBottom: 8,
              }}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#335C6E" }}
              color="primary"
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <hr />
        {/* Copyright component */}
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
