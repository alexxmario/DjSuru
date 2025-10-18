import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Fade
} from '@mui/material';
import GlassIcons from '../components/GlassIcons';
import {
  MusicNote,
  Event,
  People,
  Star,
  FavoriteOutlined,
  CelebrationOutlined,
  ChildCareOutlined,
  BusinessOutlined
} from '@mui/icons-material';
import ReviewsCarousel from '../components/ReviewsCarousel';
import CardSwap, { Card as SwapCard } from '../components/CardSwap';
import ProfileCard from '../components/ProfileCard';
import './Home.css';

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

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'nunta',
      title: 'Nuntă',
      image: '/images/servicii/nunta.jpg',
      ambientColor: '#E8B4CB',
      description: 'Sunetul poveștii voastre.'
    },
    {
      id: 'botez',
      title: 'Botez',
      image: '/images/servicii/botez.jpg',
      ambientColor: '#F5E6A8',
      description: 'Primii pași, primele zâmbete, prima petrecere.'
    },
    {
      id: 'corporate',
      title: 'Corporate',
      image: '/images/servicii/corporate.jpg',
      ambientColor: '#95C8A8',
      description: 'Profesionalism cu ritm.'
    },
    {
      id: 'majorat',
      title: 'Majorat',
      image: '/images/servicii/majorat.jpg',
      ambientColor: '#B19CD9',
      description: 'Prima noapte cu adevărat memorabilă.'
    },
    {
      id: 'bal',
      title: 'Bal',
      image: '/images/servicii/bal.jpg',
      ambientColor: '#FFB347',
      description: 'Energie cât pentru o generație întreagă.'
    },
    {
      id: 'clubbing',
      title: 'Clubbing',
      image: '/images/servicii/clubbing.png',
      ambientColor: '#4A90E2',
      description: 'Seturi care țin ringul plin până dimineața.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>DJ Suru - Servicii DJ Profesionale pentru Nunți, Botezuri și Evenimente în România</title>
        <meta name="description" content="DJ Suru oferă servicii DJ profesionale pentru nunți, botezuri, majorat și evenimente corporate în România. Muzică de calitate, atmosferă perfectă și experiență de neuitat." />
        <meta property="og:title" content="DJ Suru - Servicii DJ Profesionale pentru Evenimente" />
        <meta property="og:description" content="DJ profesionist pentru nunți, botezuri, majorat și evenimente corporate. Muzică de calitate și atmosferă perfectă pentru evenimentul tău special." />
      </Helmet>
      {/* Hero Section with Banner */}
      <Box
        className="relative flex items-center justify-center overflow-hidden"
        sx={{
          height: { xs: '80vh', sm: '90vh', md: '100vh' },
          minHeight: { xs: '600px', sm: '700px', md: '800px' },
          backgroundImage: 'url(/images/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }
        }}
      >
        <Box
          sx={{
            zIndex: 2,
            position: 'absolute',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center'
          }}
        >
          <Fade in timeout={1000}>
            <Typography
              variant="h3"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: '"Arial", "Helvetica", sans-serif',
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.5rem' },
                mb: 4,
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                fontStyle: 'italic',
                letterSpacing: { xs: '1px', md: '2px' },
                px: { xs: 2, sm: 4, md: 0 },
                lineHeight: { xs: 1.2, md: 1.1 }
              }}
            >
              „Muzica e singura limbă pe care o înțeleg toți."
            </Typography>
          </Fade>
          <Fade in timeout={0}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <GlassIcons
                items={[
                  {
                    icon: "Contactează-mă",
                    label: "",
                    color: "transparent",
                    onClick: () => navigate('/contact')
                  }
                ]}
                className="contact-glass-button"
              />
            </Box>
          </Fade>
        </Box>
      </Box>

      {/* Statistics Section */}
      <Box
        className="bg-gray-50"
        sx={{
          py: { xs: 8, sm: 12, md: 20 }
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }} justifyContent="center">
            {[
              {
                number: 875,
                label: 'CLIENȚI FERICIȚI',
                icon: <FavoriteOutlined sx={{ fontSize: '8rem' }} />
              },
              {
                number: 346,
                label: 'NUNTI',
                icon: <CelebrationOutlined sx={{ fontSize: '8rem' }} />
              },
              {
                number: 209,
                label: 'BOTEZURI',
                icon: <ChildCareOutlined sx={{ fontSize: '8rem' }} />
              },
              {
                number: 125,
                label: 'EVENIMENTE CORPORATE',
                icon: <BusinessOutlined sx={{ fontSize: '8rem' }} />
              }
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <Box
                    className="text-center"
                    sx={{
                      position: 'relative',
                      py: 4,
                      px: 2,
                      '&:not(:last-child)::after': {
                        content: '""',
                        position: 'absolute',
                        right: { xs: 'auto', md: '-3rem' },
                        bottom: { xs: '-3rem', md: 'auto' },
                        left: { xs: '50%', md: 'auto' },
                        top: { xs: 'auto', md: '50%' },
                        transform: { xs: 'translateX(-50%)', md: 'translateY(-50%)' },
                        width: { xs: '80px', md: '2px' },
                        height: { xs: '2px', md: '80px' },
                        backgroundColor: '#cccccc'
                      }
                    }}
                  >
                    {/* Background Icon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#000000',
                        opacity: 0.1,
                        zIndex: 1
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                        fontWeight: 'bold',
                        color: '#000000',
                        mb: 1,
                        position: 'relative',
                        zIndex: 2
                      }}
                    >
                      <CounterAnimation
                        target={stat.number}
                        prefix={stat.prefix || ''}
                        duration={6000}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#666666',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        position: 'relative',
                        zIndex: 2
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Showcase Section */}
      <Box
        sx={{
          py: { xs: 15, sm: 20, md: 15 },
          pb: { xs: 35, sm: 40, md: 15 },
          backgroundColor: '#d0d0d0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, sm: 6, md: 10 },
              mb: { xs: 6, sm: 8, md: 10 },
              minHeight: { xs: 'auto', md: '600px' },
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            <Box sx={{ flex: 1, maxWidth: '500px', textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 700,
                  mb: 2.5,
                  color: '#333',
                  lineHeight: 1.1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Serviciile Noastre
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  Pentru mine, fiecare eveniment e unic — iar muzica trebuie să-l reprezinte perfect. Nu cred într-un playlist universal; cred în atmosferă, în energie și în conexiunea dintre DJ și public. De aceea, la fiecare eveniment mă adaptez complet la cerințele voastre și la vibe-ul invitaților, pentru ca fiecare moment să sune exact așa cum vă doriți.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  Fie că e o nuntă elegantă, un botez plin de emoții, o petrecere corporate, un bal sau un majorat plin de energie, vin mereu pregătit cu o selecție muzicală variată — de la hituri actuale și clasice care aduc amintiri, până la ritmuri dance care țin ringul plin toată noaptea.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}
                >
                  Scopul meu e simplu: să creez o atmosferă memorabilă, adaptată fiecărui moment și fiecărui public, astfel încât petrecerea ta să fie exact așa cum ți-ai imaginat-o.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <GlassIcons
                  items={[
                    {
                      icon: "Explorează",
                      label: "",
                      color: "transparent",
                      onClick: () => navigate('/servicii-dj')
                    }
                  ]}
                  className="contact-glass-button"
                />
              </Box>
            </Box>

            <Box
              sx={{
                flex: 1,
                position: 'relative',
                height: { xs: '500px', sm: '550px', md: '600px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: { xs: 4, sm: 6, md: 2 },
                mt: { xs: 12, sm: 15, md: 0 },
                mb: { xs: 15, sm: 20, md: 0 }
              }}
            >
              <CardSwap
                width={350}
                height={380}
                cardDistance={40}
                verticalDistance={50}
                delay={4000}
                pauseOnHover={false}
                easing="elastic"
              >
                {services.map((service) => (
                  <SwapCard key={service.id} className="service-card">
                    <Box
                      className="service-card-header"
                      sx={{ backgroundColor: service.ambientColor }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-card-image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                    <Box className="service-card-content" sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        className="service-card-title"
                        sx={{ fontSize: '1.8rem', fontWeight: 700, mb: 1.5, color: '#333' }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        className="service-card-description"
                        sx={{ fontSize: '1.2rem', color: '#666', lineHeight: 1.4, fontStyle: 'italic' }}
                      >
                        🎧🎵 {service.description}
                      </Typography>
                    </Box>
                  </SwapCard>
                ))}
              </CardSwap>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box
        sx={{
          py: { xs: 8, sm: 12, md: 15 },
          backgroundColor: '#d0d0d0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, sm: 6, md: 10 },
              mb: { xs: 3, sm: 4, md: 5 },
              minHeight: { xs: 'auto', md: '600px' },
              flexDirection: { xs: 'column', md: 'row' }
            }}
          >
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                height: { xs: '400px', md: '600px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ProfileCard
                avatarUrl="/images/avatar.png"
                name="DJ Suru"
                title="Professional DJ & Music Producer"
                handle="djsuru"
                status="Available for bookings"
                contactText="Learn More About Me"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => navigate('/despre-mine')}
              />
            </Box>

            <Box sx={{ flex: 1, maxWidth: '500px', textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 700,
                  mb: 2.5,
                  color: '#333',
                  lineHeight: 1.1,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Despre Mine
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  Sunt DJ Suru și pentru mine muzica nu e doar o profesie — e o pasiune care mă definește. Fiecare eveniment pe care îl animez devine o poveste sonora unică, adaptată perfect momentului și atmosferei pe care o doresc invitații.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 2
                  }}
                >
                  De-a lungul anilor, am învățat că succesul unui eveniment nu stă doar în echipamente sau în playlist-uri predefinite, ci în conexiunea cu publicul și în abilitatea de a simți exact ce energie are nevoie fiecare moment.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}
                >
                  Fie că vorbim de o nuntă romantică, un botez plin de bucurie sau un party corporativ elegant, aduc întotdeauna același nivel de profesionalism și creativitate, pentru ca ziua voastră specială să sune exact așa cum v-ați visat-o.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <GlassIcons
                  items={[
                    {
                      icon: "Află mai multe",
                      label: "",
                      color: "transparent",
                      onClick: () => navigate('/despre-mine')
                    }
                  ]}
                  className="contact-glass-button"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Reviews Carousel Section */}
      <ReviewsCarousel />
    </>
  );
};

export default Home;