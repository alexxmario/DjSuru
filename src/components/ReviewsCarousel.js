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
      name: "Mnk0168 Mnk",
      rating: 5,
      timeAgo: "acum o săptămână",
      review: "Las cu mare plăcere această recenzie pentru a-i mulțumi lui DJ Suru și echipei sale, care ne-au ajutat la organizarea muzicală și artistică în cadrul nunții. Încă de la primul contact, și-a arătat disponibilitatea și entuziasmul de a construi împreună un eveniment deosebit și a fost extrem de atent la toate solicitările mele. Am apreciat mult sfaturile și sugestiile profesionale pentru alegerea pachetului potrivit sălii și numărului de invitați. Pentru că ne-am dorit câteva momente artistice deosebite, DJ Suru a venit cu cele mai bune propuneri și astfel ne-am bucurat împreună cu invitații noștri de o atmosferă memorabilă."
    },
    {
      id: 2,
      name: "Alexbusiness 17051978",
      rating: 5,
      timeAgo: "acum o lună",
      review: "Am organizat majoratul fetei noastre Klara și vreau să vă mulțumesc pentru profesionalismul de care ați dat dovadă. Să fiu sincer, copiii s-au simțit atât de bine și au stat pe ringul de dans încât au uitat să mănânce și tortul. I-am chemat pe toți a doua zi să-l mănânce! 😄 DJ Suru – cel mai tareee! 🔥"
    },
    {
      id: 3,
      name: "Mihai",
      rating: 5,
      timeAgo: "acum 4 luni",
      review: "Foarte mulțumit de serviciu! DJ Suru a fost cel care a animat toată nunta. Chiar dacă în unele momente invitații păreau că vor să părăsească ringul, dumnealui s-a repliat rapid și a salvat momentul. Aici e probabil flerul unui DJ și MC adevărat. Mulțumim mult!"
    },
    {
      id: 4,
      name: "Oferte Online",
      rating: 5,
      timeAgo: "acum 8 luni",
      review: "Am acordat 5 stele pentru echipa SuperDJ, pentru profesionalismul lor la evenimentul organizat de noi. Totul a fost OK (sunet, lumini, fum greu). DJ Suru a fost o alegere potrivită pentru ce ne-am dorit noi să facem — de la prima discuție și oferta primită, până la atmosfera superbă pe care a reușit să o creeze. Nota 10 cu felicitări pentru DJ Suru!"
    },
    {
      id: 5,
      name: "Sandra Dragomir",
      rating: 5,
      timeAgo: "acum 10 luni",
      review: "Am avut plăcerea să îl avem pe DJ Suru de la echipa SuperDJ la evenimentul nostru organizat în data de 9 noiembrie la Domeniile Panciu, și nu putem fi mai mulțumiți de alegerea făcută! De la început până la sfârșit, DJ Suru a fost excepțional, creând o atmosferă vibrantă, plină de energie și emoție. Profesionalismul său s-a remarcat în modul în care a gestionat toate momentele evenimentului, adaptându-se perfect la preferințele invitaților și la dinamica petrecerii."
    },
    {
      id: 6,
      name: "Anca Maria",
      rating: 5,
      timeAgo: "acum o lună",
      review: "Am avut parte de o super experiență cu DJ Suru de la SuperDJ la nunta noastră. Am apreciat faptul că a ținut cont întocmai de preferințele noastre muzicale și de sugestiile trimise în fișa de eveniment. DJ-ul s-a adaptat extraordinar de rapid la gusturile și preferințele variate ale tuturor invitaților. Nu mai vorbim de faptul că a fost un MC extraordinar pentru evenimentul nostru, cu o energie pozitivă incredibilă, care ne-a făcut să zâmbim pe tot parcursul evenimentului."
    },
    {
      id: 7,
      name: "Marius Lazar",
      rating: 5,
      timeAgo: "acum un an",
      review: "A fost tot ce ne-am dorit și chiar mai mult. DJ Suru e top, probabil cel mai bun DJ pe evenimente de genul acesta. Showmen de excepție, super profi. Mulțumim! 🤘"
    },
    {
      id: 8,
      name: "Nadia Gavriluța",
      rating: 5,
      timeAgo: "acum un an",
      review: "A fost o adevărată plăcere să îi avem alături de noi într-o zi atât de specială. Apreciere maximă și pentru faptul că s-au deplasat ~550 km de la București pentru a-și oferi serviciile. DJ Suru a provocat invitații să se dezlănțuie pe ringul de dans. A fost senzație! Cert este faptul că am dansat atât de mult și ne-am simțit atât de bine încât la final am ajuns cu pantofii în mână. Vă mulțumim că ați fost alături de noi și ați respectat cerințele noastre. Recomand cu mare drag, sunt o echipă de profesioniști!"
    },
    {
      id: 9,
      name: "Johnny Creeed",
      rating: 5,
      timeAgo: "acum un an",
      review: "Many thanks for the excellent service provided. I've worked with DJ Suru and the Super DJ team for a large event this November at Pedros Grande. Courteous, professional and highly engaging, very attentive to us and our requests. I couldn't recommend them and DJ Suru enough!"
    },
    {
      id: 10,
      name: "Alice Farest",
      rating: 5,
      timeAgo: "acum un an",
      review: "Super bun DJ-ul Suru, a ținut toată noaptea atmosfera. L-am avut la nuntă și toți invitații l-au lăudat. A pus toate genurile de muzică — și pentru tineret, și pentru cei mai bătrâni. Îl recomand cu căldură și sperăm să îl mai avem și la următoarele evenimente! 🥳"
    },
    {
      id: 11,
      name: "Cristina Partene",
      rating: 5,
      timeAgo: "acum 2 ani",
      review: "DJ Suru foarte ok, a respectat lista transmisă, a făcut atmosferă, am comunicat super! Recomand cu încredere!!!"
    },
    {
      id: 12,
      name: "Elena Niscoveanu",
      rating: 5,
      timeAgo: "acum 3 ani",
      review: "Vă mulțumim foarte mult pentru colaborarea cu DJ Suru din 10 septembrie de la Bokaa! Am fost încântați de cum a ieșit totul, iar invitații s-au simțit foarte bine. Atmosfera a fost una antrenantă, au fost niște momente în care au ieșit scântei de pe ringul de dans! Vă mulțumim pentru seriozitate, profesionalism și comunicare! Elena & Adi Pîrvu"
    },
    {
      id: 13,
      name: "Brigitta",
      rating: 5,
      timeAgo: "acum un an",
      review: "Vreau doar să menționez faptul că se vede profesionalismul, implicarea și experiența voastră. Petrecerea noastră corporate a fost una mai mult decât reușită datorită stării pe care au avut-o invitații noștri, indusă, desigur, prin muzică, energie și voie bună, de către DJ-ul vostru, DJ Suru. Noi cu siguranță vom mai apela la serviciile voastre."
    },
    {
      id: 14,
      name: "Bogdan Pătrașcu",
      rating: 5,
      timeAgo: "acum un an",
      review: "DJ Suru was amazing! He made our party one of the greatest we had! Thank you for your dedication and making a night to remember!"
    },
    {
      id: 15,
      name: "Ciprian Branco Miheev",
      rating: 5,
      timeAgo: "acum un an",
      review: "Experiența cu oamenii de la SuperDJ a fost de nota 10, de la prima discuție până în ultimul moment. Echipa SuperDJ s-a dedicat 100% pentru a ne crea evenimentul perfect. Sunetul a fost excepțional, având în vedere că în ambele părți ale salonului existau alte evenimente, muzica a acoperit celelalte două părți fără să fie deranjant pentru noi. Jocul de lumini adăugat la pachetul nostru a fost cea mai potrivită alegere pentru eveniment, deoarece am reușit să transformăm o nuntă clasică într-o petrecere pe care toți invitații au apreciat-o."
    },
    {
      id: 16,
      name: "Cristiana Manea",
      rating: 5,
      timeAgo: "acum un an",
      review: "Îl recomand pe DJ Suru! L-am avut și noi la un eveniment în iunie și toată lumea a stat numai pe ringul de dans, până la 7 dimineața. Este o persoană pozitivă, mereu cu zâmbetul pe buze și gata să facă atmosferă. Noi nu i-am oferit nici o listă cu melodii, am mers pe încredere și nu regretăm deloc! Vă mulțumesc!"
    },
    {
      id: 17,
      name: "Kassandra Agapi",
      rating: 5,
      timeAgo: "acum 11 luni",
      review: "Recomand cu drag, DJ Suru chiar a fost un super DJ, a făcut atmosferă, ne-a ținut pe ring și ne-a depășit așteptările. Ne-a plăcut mult stilul său, a ținut cont atât de playlistul nostru cât și de atmosfera de pe ring, așa că a fost foarte echilibrat. Luminile au avut un efect aparte și au conturat frumos toate emoțiile din ring. 😊"
    },
    {
      id: 18,
      name: "Bratu Mirela",
      rating: 5,
      timeAgo: "acum un an",
      review: "Cel mai tare DJ (DJ Suru Romulus) pe care îl poți invita la un eveniment. Show total. Un om extraordinar care a ținut ringul de dans plin până dimineața, care pune pasiune în ceea ce face, ne-a oferit o seară de neuitat! Servicii de calitate, de la început până la sfârșit. Recomand cu încredere și drag! Totul a fost perfect și lumea s-a distrat de minune. Sperăm să colaborăm și cu alte ocazii. Mulțumim frumos că ai fost alături de noi!"
    },
    {
      id: 19,
      name: "Cristian-Mihai Munteanu",
      rating: 5,
      timeAgo: "acum 3 ani",
      review: "A fost o experiență deosebit de plăcută colaborarea cu SuperDJ pentru organizarea evenimentului, motiv pentru care îi recomand din toată inima! DJ Suru a întreținut foarte bine atmosfera, antrenând invitații atunci când a fost necesar."
    },
    {
      id: 20,
      name: "Alexandra Mita",
      rating: 5,
      timeAgo: "acum 3 ani",
      review: "Pot spune că SuperDJ a fost cea mai bună alegere pentru nunta noastră! Doamna Adriana este o adevărată profesionistă care te scapă de griji și se asigură că totul este în regulă. Pe DJ Suru l-am întâlnit la târgul de nunți alături de echipa SuperDJ și de atunci am știut că e DJ-ul potrivit pentru noi. A reușit să atragă pe ringul de dans toate generațiile și energia lui i-a cucerit pe toți invitații."
    },
    {
      id: 21,
      name: "Mădălina Coca",
      rating: 5,
      timeAgo: "acum 2 ani",
      review: "Recomandarea mea merge către DJ Suru, un maestru al mixării, aducând împreună genuri muzicale diverse cu multă fluiditate. Știe exact cum să ridice publicul în picioare și să creeze o atmosferă memorabilă, face atmosferă și are carismă. Este un DJ pasionat și mereu în conexiune directă cu audiența, ajustându-și selecția muzicală pentru a se potrivi cu starea și energia din sală. Recomand cu căldură!"
    },
    {
      id: 22,
      name: "Red Owl",
      rating: 5,
      timeAgo: "acum 4 ani",
      review: "Am avut un banchet și DJ Suru a creat o ambianță așa de bună! Super om de treabă care știe cum să aducă la viață o petrecere! Chiar că SUPER DJ! Pozitive: Calitate și Profesionalism."
    },
    {
      id: 23,
      name: "Jumanazar Gurbanov",
      rating: 5,
      timeAgo: "acum 6 luni",
      review: "L-am avut pe DJ Suru la nunta noastră și a fost o alegere foarte bună! Ne-am înțeles excelent cu el – este un om deschis, profesionist și foarte receptiv la dorințele noastre. I-am trimis playlisturi orientative cu melodii care ne plac, iar el a știut exact cum să le integreze și să creeze o atmosferă de neuitat. Am avut multe genuri muzicale diferite, dar DJ Suru le-a mixat perfect și a ținut ringul de dans plin toată noaptea. Simte publicul și știe să adapteze muzica în funcție de energie. Îl recomandăm cu toată încrederea!"
    },
    {
      id: 24,
      name: "Alexandru Esanu",
      rating: 5,
      timeAgo: "acum 5 luni",
      review: "DJ Suru a fost exact persoana de care aveam nevoie pentru a da o petrecere de pomina la nunta noastra. Cu sustinere totala pentru toate nebuniile/ momentele noastre (si cu idei de cum sa le facem mai bune!), adaptabilitate la gusturile de muzica din sala, un feeling foarte bun pentru ce/ cand sa se puna si o prezenta de spirit care a intretinut mereu atmosfera, Suru a fost un partener de baza de la prima conversatie pana la ultima melodie. Multumim si recomandam din toata inima!"
    },
    {
      id: 25,
      name: "Geanina Maria",
      rating: 5,
      timeAgo: "acum 7 luni",
      review: "Atmosfera creata de DJ Suru la nunta noastra a fost wow. Ne-am distrat super mult, oamenii au fost incantati, melodiile puse de el au fost fix ce trebuie. Recomandam cu mare drag!"
    },
    {
      id: 26,
      name: "Andrada Samson",
      rating: 5,
      timeAgo: "acum 9 luni",
      review: "Dj Suru is the best! Repeat, repeat, repeat! S-a dansat pana nu s-a mai putut! Multumim ca ati contribuit la crearea unei nopti magice, pe care nu o vom uita niciodata! Ati fost de nota 20!"
    },
    {
      id: 27,
      name: "Iulia Florea",
      rating: 5,
      timeAgo: "acum 8 luni",
      review: "Am avut o super experienta cu DJ Suru la nunta noastra. Chiar a venit cu o idee faina, sa facem o surpriza nasilor. Inca de la inceput, ne-a cerut o lista de melodii care ne-ar placea, sa veda stilul nostru. A iesit o super petrecere pe gustul nostru, unde am dansat incontinuu si ne-am distrat. Multumim!"
    },
    {
      id: 28,
      name: "Marius Dobre",
      rating: 5,
      timeAgo: "acum 4 luni",
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
                      timeAgo={review.timeAgo}
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
                timeAgo={review.timeAgo}
              />
            ))}
          </Marquee>
        )}
      </Container>
    </Box>
  );
};

export default ReviewsCarousel;