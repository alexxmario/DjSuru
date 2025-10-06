import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Container,
  useMediaQuery,
  useTheme,
  Slide,
  useScrollTrigger
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import './Navbar.css';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  const menuItems = [
    { text: 'Acasa', path: '/' },
    { text: 'Despre mine', path: '/despre-mine' },
    { text: 'Galerie', path: '/galerie' },
    { text: 'Mixuri', path: '/mixuri' },
    { text: 'Servicii DJ', path: '/servicii-dj' },
    { text: 'Contact', path: '/contact' }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <img src="/images/logo-nav.png" alt="DJ SURU Logo" style={{ height: '40px', width: '40px' }} />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              backgroundColor: isActive(item.path) ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
            }}
          >
            <Button
              component={Link}
              to={item.path}
              fullWidth
              sx={{
                color: '#000000',
                fontWeight: isActive(item.path) ? 'bold' : 'normal',
                justifyContent: 'center',
                py: 2,
                fontSize: '1.1rem'
              }}
            >
              {item.text}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '2px solid #000000',
            color: '#000000',
            margin: 0,
            padding: 0,
            '& .MuiToolbar-root': {
              margin: 0,
              padding: 0,
              minHeight: 'auto'
            }
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 0, px: 0, margin: 0, minHeight: '90px', height: '90px' }}>
              {/* Logo */}
              <Button
                component={Link}
                to="/"
                sx={{
                  minWidth: 'auto',
                  p: 0,
                  '&:hover': { backgroundColor: 'transparent' }
                }}
              >
                <img
                  src="/images/logo-nav.png"
                  alt="DJ SURU Logo"
                  style={{
                    height: '60px',
                    width: '60px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </Button>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      className={item.text === 'Contact' ? 'navbar-contact-glass' : ''}
                      sx={{
                        color: '#000000',
                        fontWeight: isActive(item.path) ? 'bold' : 'normal',
                        px: item.text === 'Contact' ? 4 : 2,
                        py: item.text === 'Contact' ? 0 : 1,
                        fontSize: item.text === 'Contact' ? '1.1rem' : '1rem',
                        fontWeight: item.text === 'Contact' ? '600' : (isActive(item.path) ? 'bold' : 'normal'),
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: item.text === 'Contact' ? '20px' : '8px',
                        transition: 'all 0.3s ease',
                        marginRight: item.text === 'Contact' ? '20px' : 0,
                        transform: item.text === 'Contact' ? 'translateX(-15px)' : 'none',
                        height: item.text === 'Contact' ? '100%' : 'auto',
                        minWidth: item.text === 'Contact' ? '120px' : 'auto',
                        ...(item.text === 'Contact' ? {
                          background: 'rgba(255, 255, 255, 0.9) !important',
                          backdropFilter: 'blur(10px) !important',
                          WebkitBackdropFilter: 'blur(10px) !important',
                          border: '2px solid rgba(255, 255, 255, 0.8) !important',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4) !important',
                          color: '#000 !important',
                        } : {}),
                        '&:hover': item.text === 'Contact' ? {
                          background: 'rgba(255, 255, 255, 0.95) !important',
                          transform: 'translateX(-15px) translateY(-4px) !important',
                          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5) !important',
                        } : {
                          backgroundColor: 'rgba(0, 0, 0, 0.05)',
                          transform: 'translateY(-2px)',
                        },
                        '&::after': isActive(item.path) && item.text !== 'Contact' ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80%',
                          height: '3px',
                          backgroundColor: '#000000',
                          borderRadius: '2px'
                        } : {}
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: '#000000',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#ffffff'
          },
        }}
      >
        {drawer}
      </Drawer>

    </>
  );
};

export default Navbar;