import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import Marquee from './Marquee';
import ReviewCard from './ReviewCard';

const ReviewsCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  const reviews = [
    {
      id: 1,
      name: "Jumanazar Gurbanov",
      rating: 5,
      review: "L-am avut pe DJ Suru la nunta noastră și a fost o alegere foarte bună! Ne-am înțeles excelent cu el – este un om deschis, profesionist și foarte receptiv la dorințele noastre. I-am trimis playlisturi orientative cu melodii care ne plac, iar el a știut exact cum să le integreze și să creeze o atmosferă de neuitat. Am avut multe genuri muzicale diferite, dar DJ Suru le-a mixat perfect și a ținut ringul de dans plin toată noaptea. Simte publicul și știe să adapteze muzica în funcție de energie. Îl recomandăm cu toată încrederea!"
    },
    {
      id: 2,
      name: "Alexandru Esanu",
      rating: 5,
      review: "DJ Suru a fost exact persoana de care aveam nevoie pentru a da o petrecere de pomina la nunta noastra. Cu sustinere totala pentru toate nebuniile/ momentele noastre (si cu idei de cum sa le facem mai bune!), adaptabilitate la gusturile de muzica din sala, un feeling foarte bun pentru ce/ cand sa se puna si o prezenta de spirit care a intretinut mereu atmosfera, Suru a fost un partener de baza de la prima conversatie pana la ultima melodie. Multumim si recomandam din toata inima!"
    },
    {
      id: 3,
      name: "Geanina Maria",
      rating: 5,
      review: "Atmosfera creata de DJ Suru la nunta noastra a fost wow. Ne-am distrat super mult, oamenii au fost incantati, melodiile puse de el au fost fix ce trebuie. Recomandam cu mare drag!"
    },
    {
      id: 4,
      name: "Andrada Samson",
      rating: 5,
      review: "Dj Suru is the best! Repeat, repeat, repeat! S-a dansat pana nu s-a mai putut! Multumim ca ati contribuit la crearea unei nopti magice, pe care nu o vom uita niciodata! Ati fost de nota 20!"
    },
    {
      id: 5,
      name: "Iulia Florea",
      rating: 5,
      review: "Am avut o super experienta cu DJ Suru la nunta noastra. Chiar a venit cu o idee faina, sa facem o surpriza nasilor. Inca de la inceput, ne-a cerut o lista de melodii care ne-ar placea, sa vada stilul nostru. A iesit o super petrecere pe gustul nostru, unde am dansat incontinuu si ne-am distrat. Multumim!"
    },
    {
      id: 6,
      name: "Marius Dobre",
      rating: 5,
      review: "Dj Suru a fost senzațional! Ne-a ajutat sa avem cea mai frumoasă petrecere. A știut exact cum sa țină petrecerea la cote maxime și a știut exact ce trebuie, când trebuie și cât. Cu siguranță il vom recomanda mai departe și vom dori să il avem alături și la următoarele petreceri. Mulțumim, Dj Suru!"
    }
  ];

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Next slide, loop to first if at end
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }
    if (isRightSwipe) {
      // Previous slide, loop to last if at beginning
      setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };


  return (
    <Box className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          className="text-center mb-16 font-bold text-4xl md:text-5xl"
          sx={{ color: '#000000', fontWeight: 'bold' }}
        >
          RECENZII CLIENȚI
        </Typography>
        <Typography
          variant="h6"
          className="text-center mb-12 text-gray-600"
          sx={{ fontSize: '1.2rem', fontWeight: 300 }}
        >
          Ce spun cei care au ales DJ Suru
        </Typography>

        {isMobile ? (
          // Mobile/Tablet Simple Swipeable Carousel
          <Box className="relative">
            <Box
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              sx={{
                cursor: 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                touchAction: 'pan-x',
                '&:active': {
                  cursor: 'grabbing'
                }
              }}
            >
              <Box
                className="flex transition-transform duration-300 ease-in-out"
                sx={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {reviews.map((review) => (
                  <Box
                    key={review.id}
                    className="w-full flex-shrink-0 px-4 flex justify-center"
                    sx={{
                      minWidth: '100%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <ReviewCard
                      name={review.name}
                      rating={review.rating}
                      review={review.review}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          // Desktop Marquee
          <Marquee
            direction="left"
            className="py-4"
            speed={120}
            pauseOnHover={true}
          >
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            ))}
          </Marquee>
        )}
      </Container>
    </Box>
  );
};

export default ReviewsCarousel;