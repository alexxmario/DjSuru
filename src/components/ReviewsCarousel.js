import { Box, Typography, Container } from '@mui/material';
import Marquee from './Marquee';
import ReviewCard from './ReviewCard';

const ReviewsCarousel = () => {
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

        <Marquee direction="left" className="py-4" speed={60} pauseOnHover={false}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </Marquee>
      </Container>
    </Box>
  );
};

export default ReviewsCarousel;