import { useState, useEffect } from 'react';
import { Container, Typography, Box, ImageList, ImageListItem, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/images/gallery/gallery-manifest.json', {
          cache: 'no-cache',
        });

        if (!response.ok) {
          throw new Error(`Failed to load gallery manifest: ${response.status}`);
        }

        const manifest = await response.json();

        if (!Array.isArray(manifest)) {
          throw new Error('Gallery manifest is not an array');
        }

        // Map the manifest entries to the structure expected by the component
        const imageArray = manifest.map((filename, index) => ({
          id: filename,
          src: `/images/gallery/${filename}`,
          alt: `DJ Suru Event ${index + 1}`
        }));

        setImages(imageArray);
      } catch (error) {
        console.error('Error loading gallery manifest:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>DJ Suru - Galerie</title>
      </Helmet>
      {/* Hero Section */}
      <Box
        className="relative flex items-center justify-center"
        sx={{
          height: '60vh',
          minHeight: '400px',
          backgroundImage: 'url(/images/gallery/banner-gallery.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }
        }}
      >
        <Box sx={{ zIndex: 2, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            Galerie
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            }}
          >
            Momentele voastre speciale
          </Typography>
        </Box>
      </Box>

      {/* Gallery Section */}
      <Box className="py-20 bg-white">
        <Container maxWidth="lg">

          <ImageList
            variant="masonry"
            cols={4}
            gap={16}
            sx={{
              '& .MuiImageListItem-root': {
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '8px',
                overflow: 'hidden',
                '&:hover': {
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  '& img': {
                    transform: 'scale(1.02)',
                  }
                }
              }
            }}
          >
            {images.map((image) => (
              <ImageListItem
                key={image.id}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>

      {/* Modal for enlarged image */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '80vw',
            maxHeight: '80vh',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: -60,
              right: -20,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.8)',
              zIndex: 1000,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,1)',
              }
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: '600px',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;
