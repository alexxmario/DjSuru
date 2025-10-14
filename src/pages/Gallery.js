import { useState, useEffect } from 'react';
import { Container, Typography, Box, ImageList, ImageListItem, Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const importImages = async () => {

      // Import all images from the gallery folder
      const imageFiles = [
        'WhatsApp Image 2025-10-02 at 22.26.03 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.26.03.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.45 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.45.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.46 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.46 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.46.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.47 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.47.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.48.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.49 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.49 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.49 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.49.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.50 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.50 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.50 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.50.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.51 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.51 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.51.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.54 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.54 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.54 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.54 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.54.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.55 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.55 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.55 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.55.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.56 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.56 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.56 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.56 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.56.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57 (5).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.57.jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.58 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.58 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.58 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.58 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.59 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.59 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.59 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.59 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.31.59.jpeg',
        'WhatsApp Image 2025-10-02 at 22.35.58.jpeg',
        'WhatsApp Image 2025-10-02 at 22.35.59 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.35.59 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.35.59 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.35.59.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.00 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.00 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.00 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.00.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.01 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.01 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.01.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.02 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.02 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.02 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.02 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.02.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.04 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.04 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.04 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.04 (5).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.04.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.05 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.05 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.05 (3).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.05 (4).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.05.jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.06 (1).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.06 (2).jpeg',
        'WhatsApp Image 2025-10-02 at 22.36.06.jpeg'
      ];

      // Create image objects with src paths
      const imageArray = imageFiles.map((filename, index) => ({
        id: index,
        src: `/images/gallery/${filename}`,
        alt: `DJ Suru Event ${index + 1}`
      }));

      setImages(imageArray);
    };

    importImages();
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