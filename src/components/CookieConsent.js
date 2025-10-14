import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        padding: { xs: '20px', sm: '24px' },
        zIndex: 10000,
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
        borderTop: '2px solid #667eea',
        backdropFilter: 'blur(10px)',
        animation: 'slideUp 0.5s ease-out'
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 2, md: 3 }
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: '#667eea',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            🍪 Politica de Cookie-uri
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Folosim cookie-uri pentru a îmbunătăți experiența ta pe site-ul nostru,
            pentru a analiza traficul și pentru a personaliza conținutul.
            Continuând să navighezi pe site, ești de acord cu utilizarea cookie-urilor.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'row' },
            gap: 2,
            alignItems: 'center',
            width: { xs: '100%', md: 'auto' },
            justifyContent: { xs: 'flex-end', md: 'flex-end' }
          }}
        >
          <Button
            variant="outlined"
            onClick={handleDecline}
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              padding: { xs: '8px 16px', sm: '10px 20px' },
              minWidth: { xs: 'auto', sm: '100px' },
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Refuz
          </Button>
          <Button
            variant="contained"
            onClick={handleAccept}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              padding: { xs: '8px 16px', sm: '10px 20px' },
              minWidth: { xs: 'auto', sm: '120px' },
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a42a0 100%)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)'
              }
            }}
          >
            Accept
          </Button>
          <IconButton
            onClick={handleClose}
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              ml: 1,
              '&:hover': {
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default CookieConsent;