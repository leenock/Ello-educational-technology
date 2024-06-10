import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed"> {/* changed position="static" to position="fixed" */}
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
            Ello
          </Typography>
          <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>How It Works</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Parent Resources</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Research</Button>
          <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>For Teachers</Button>
          <Button color="inherit">My Account</Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* added Toolbar to prevent content from being hidden under the header */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <div>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {['How It Works', 'Parent Resources', 'Research', 'For Teachers', 'My Account'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
