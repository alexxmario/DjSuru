import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Fade
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import {
  FavoriteOutlined,
  CelebrationOutlined,
  ChildCareOutlined,
  BusinessOutlined,
  PlayArrow,
  Pause,
  SkipPrevious,
  SkipNext,
  FastRewind,
  FastForward,
  VolumeUp,
  VolumeDown
} from '@mui/icons-material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const CounterAnimation = ({ target, prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * target);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef}>
      {prefix}{count}
    </span>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const Mixes = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const mixData = [
    {
      id: 1,
      src: encodeURI('/audio/[BraveDown.Com] [Dj Suru - Forever Drive Mix] [1759501976] .mp3'),
      name: 'Forever Drive Mix',
      artist: 'Dj Suru',
      image: encodeURI('/audio/album-images/[BraveDown.Com] [Dj Suru - Forever Drive Mix] [1759501976] .jpg')
    },
    {
      id: 2,
      src: encodeURI('/audio/[BraveDown.Com] [BURN RESIDENCY 2017 – DjSuru] [1759502542] .mp3'),
      name: 'BURN RESIDENCY 2017',
      artist: 'Dj Suru',
      image: encodeURI('/audio/album-images/[BraveDown.Com] [BURN RESIDENCY 2017 – DjSuru] [1759502542] .png')
    },
    {
      id: 3,
      src: encodeURI('/audio/[BraveDown.Com] [Dj Suru - Romania - MazdaSounds] [1759502701] .mp3'),
      name: 'Romania - MazdaSounds',
      artist: 'Dj Suru',
      image: encodeURI('/audio/album-images/[BraveDown.Com] [Dj Suru - Romania - MazdaSounds] [1759502701] .jpg')
    },
    {
      id: 4,
      src: encodeURI('/audio/[BraveDown.Com] [Dj Suru - Merry Christmas] [1759502930] .mp3'),
      name: 'Merry Christmas',
      artist: 'Dj Suru',
      image: encodeURI('/audio/album-images/[BraveDown.Com] [Dj Suru - Merry Christmas] [1759502930] .jpg')
    },
    {
      id: 5,
      src: encodeURI('/audio/[BraveDown.Com] [Dj Suru - Populara VS Dance Remix] [1760465069] .mp3'),
      name: 'Populara VS Dance Remix',
      artist: 'Dj Suru',
      image: encodeURI('/audio/album-images/[BraveDown.Com] [Dj Suru - Populara VS Dance Remix] [1760465069] .jpg')
    }
  ];

  const handleClickNext = () => {
    setCurrentTrackIndex((prev) =>
      prev < mixData.length - 1 ? prev + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setCurrentTrackIndex((prev) =>
      prev > 0 ? prev - 1 : mixData.length - 1
    );
  };


  return (
    <>
      <Helmet>
        <title>DJ Suru - Mixuri</title>
      </Helmet>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'url(/images/banner-mixuri.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Box sx={{ zIndex: 2, textAlign: 'center', color: 'white' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
            Mixuri
          </Typography>
          <Typography variant="h5" sx={{ color: 'white' }}>
            Ascultă câteva dintre mixurile mele
          </Typography>
        </Box>
      </Box>


      {/* Audio Player Section */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">

          <Box sx={{ mb: 4 }}>
            {/* Current Track Info */}
            <Box sx={{ mb: 3, p: 4, backgroundColor: '#f8f9fa', borderRadius: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'flex-start' }, gap: 4, mb: 3 }}>
                {/* Large Album Image */}
                <Box
                  sx={{
                    width: { xs: 250, md: 300 },
                    height: { xs: 250, md: 300 },
                    backgroundColor: '#c4c4c4',
                    borderRadius: 3,
                    backgroundImage: `url(${mixData[currentTrackIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    flexShrink: 0
                  }}
                />

                {/* Track Info and Player */}
                <Box sx={{ flex: 1, width: '100%' }}>
                  <Box sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {mixData[currentTrackIndex].name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
                      by {mixData[currentTrackIndex].artist}
                    </Typography>
                  </Box>

                  {/* Audio Player */}
                  <AudioPlayer
                    src={mixData[currentTrackIndex].src}
                    onClickNext={handleClickNext}
                    onClickPrevious={handleClickPrevious}
                    showSkipControls
                    showJumpControls={false}
                    onEnded={handleClickNext}
                    autoPlay={false}
                    style={{
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Playlist */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Playlist
              </Typography>
              {mixData.map((track, index) => (
                <Box
                  key={track.id}
                  onClick={() => setCurrentTrackIndex(index)}
                  sx={{
                    p: 2,
                    mb: 1,
                    border: '1px solid #e0e0e0',
                    borderRadius: 1,
                    cursor: 'pointer',
                    backgroundColor: currentTrackIndex === index ? '#f0f0f0' : 'transparent',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    },
                    transition: 'background-color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: '#c4c4c4',
                      borderRadius: 1,
                      backgroundImage: `url(${track.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      flexShrink: 0
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: currentTrackIndex === index ? 'bold' : 'normal' }}>
                      {track.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {track.artist}
                    </Typography>
                  </Box>
                  {currentTrackIndex === index && (
                    <Box sx={{ color: '#1976d2' }}>
                      ♪
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: '#666666',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}
          >
            Acestea sunt doar câteva exemple din repertoriul meu. Pentru fiecare eveniment,
            creez un playlist personalizat în funcție de preferințele dumneavoastră și atmosfera dorită.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Mixes;