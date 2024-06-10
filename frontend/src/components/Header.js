import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ bgcolor: "#335C6E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meet Ello
          </Typography>
          <Button
            color="inherit"
            sx={{
              display: { xs: "none", md: "block" },
              textTransform: "Capitalize",
            }}
          >
            How It Works
          </Button>

          <Button
            color="inherit"
            sx={{
              display: { xs: "none", md: "block" },
              textTransform: "Capitalize",
            }}
          >
            About Us
          </Button>
          <Button
            color="inherit"
            sx={{
              display: { xs: "none", md: "block" },
              textTransform: "Capitalize",
            }}
          >
            Research
          </Button>
          <Button
            color="inherit"
            sx={{
              display: { xs: "none", md: "block" },
              textTransform: "Capitalize",
            }}
          >
            For Teachers
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ bgcolor: "#335C6E", textTransform: "Capitalize" }}
          >
            My Account
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { bgcolor: "#335C6E", color: "white" },
        }}
      >
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <List>
            {[
              "How It Works",
              "Parent Resources",
              "Research",
              "For Teachers",
              <Button
                variant="contained"
                color="success"
                sx={{ bgcolor: "#335C6E", textTransform: "Capitalize" }}
              >
                My Account
              </Button>,
            ].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
