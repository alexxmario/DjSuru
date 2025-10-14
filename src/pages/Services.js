import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Services.css';
import SplitText from '../components/SplitText';
import GlassIcons from '../components/GlassIcons';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      id: 'nunta',
      title: 'Nuntă',
      image: '/images/servicii/nunta.jpg',
      ambientColor: '#E8B4CB',
      description: 'Fiecare nuntă are povestea ei, iar muzica trebuie să fie exact așa cum vreți voi. Pentru mine, cel mai important este să ascult ce vă doriți și să înțeleg atmosfera pe care vreți să o creați — de la momentele romantice și emoționante ale ceremoniei, până la petrecerea de pe ringul de dans.',
      description2: 'Mă adaptez complet la stilul mirilor și la preferințele invitaților, construind un playlist care să mulțumească toate generațiile și să creeze emoție la fiecare pas. Citesc energia din sală și ajustezi totul pe moment: dacă lumea vrea să danseze, cresc ritmul; dacă e nevoie de un moment mai calm, reduc intensitatea. Scopul meu este ca seara să fie fix așa cum v-ați imaginat și să rămână în amintirea tuturor ca un eveniment de neuitat.'
    },
    {
      id: 'botez',
      title: 'Botez',
      image: '/images/servicii/botez.jpg',
      ambientColor: '#F5E6A8',
      description: 'Botezul este un moment special și plin de emoție, iar muzica trebuie să se potrivească exact cu atmosfera pe care vreți să o creați. Ascult cerințele voastre și adaptez fiecare detaliu al playlistului, astfel încât să fie o zi relaxantă, veselă și memorabilă pentru toți invitații — de la cei mici până la cei mari.',
      description2: 'Îmi place să creez o atmosferă caldă și plină de bucurie, unde muzica urmează starea oamenilor și dorințele voastre. Fiecare piesă e aleasă pentru a completa momentele importante și pentru a face ca această zi specială să fie fix așa cum o visați, cu zâmbete, emoție și amintiri frumoase pentru toată lumea.'
    },
    {
      id: 'corporate',
      title: 'Corporate',
      image: '/images/servicii/corporate.jpg',
      ambientColor: '#95C8A8',
      description: 'Evenimentele corporate sunt despre echilibru: profesionalism, dar și distracție. Cheia unei seri reușite este să înțeleg exact ce vă doriți și cum vreți să se simtă invitații. Mă adaptez complet la cerințele voastre — aleg muzica potrivită pentru context, ajustez ritmul în funcție de public și creez atmosfera dorită, fie că e vorba de o petrecere de firmă elegantă, un team-building energic sau o gală sofisticată.',
      description2: 'Citesc sala și simt starea oamenilor, schimb energia exact când e nevoie și mă asigur că fiecare moment reflectă perfect vibe-ul dorit. Muzica nu e doar fundal; ea creează conexiuni, voie bună și amintiri memorabile pentru toți invitații.'
    },
    {
      id: 'majorat',
      title: 'Majorat',
      image: '/images/servicii/majorat.jpg',
      ambientColor: '#B19CD9',
      description: 'Majoratul e despre energie, libertate și distracție pură. Totul începe cu ascultarea voastră: ce stiluri vă plac, ce piese nu pot lipsi și ce vibe vreți să aibă seara. Îmi adaptez complet seturile și mixurile la dorințele sărbătoritului și ale invitaților, pentru ca energia să rămână sus toată noaptea.',
      description2: 'Îmi place să simt entuziasmul participanților și să aleg piesele potrivite pentru fiecare moment, de la început, mai calm, până la peak-ul serii, când ringul de dans e plin și toată lumea se distrează. Fiecare majorat e diferit, dar scopul meu rămâne același: să creez o seară memorabilă, exact pe gustul vostru, cu distracție, muzică și vibe autentic.'
    },
    {
      id: 'bal',
      title: 'Bal',
      image: '/images/servicii/bal.jpg',
      ambientColor: '#FFB347',
      description: 'Balul este noaptea care marchează o etapă și trebuie să fie exact așa cum vreți voi. Mă adaptez complet la preferințele participanților și la atmosfera dorită: de la momente nostalgice cu melodii care aduc zâmbete, până la hituri actuale care umplu ringul de dans.',
      description2: 'Construiesc energia petrecerii în funcție de ce simt în sală și de cerințele voastre, astfel încât fiecare generație să se simtă inclusă și fiecare moment să fie memorabil. Scopul meu este să fac ca balul să fie fix ce v-ați imaginat: combinația perfectă între emoție, distracție și amintiri care rămân pentru totdeauna.'
    },
    {
      id: 'clubbing',
      title: 'Clubbing',
      image: '/images/servicii/clubbing.png',
      ambientColor: '#4A90E2',
      description: 'Clubbing-ul este despre energie, ritm și vibe autentic, dar totul începe de la ce vreți voi. Mă adaptez complet la cerințele participanților și construiesc seturi care să se potrivească exact cu atmosfera dorită — fie că e comercial, EDM, house, techno sau all-around.',
      description2: 'Simt sala, citesc energia oamenilor și schimb ritmul exact când trebuie, astfel încât ringul să rămână plin până la ultima piesă. Totul e despre experiență: muzică, lumini, momente potrivite și vibe-ul dorit de voi. Fiecare noapte este diferită, dar scopul meu rămâne același: să ofer exact ce cereți și să fac seara de club de neuitat.'
    }
  ];

  const commonFeatures = [
    'Adaptare completă la cerințele și preferințele voastre.',
    'Playlist personalizat pentru fiecare moment și tip de public.',
    'Energie și atmosferă potrivită pentru fiecare tip de eveniment.',
    'Experiență muzicală care combină hituri actuale, clasice și preferințele invitaților.',
    'Echipamente profesionale pentru sunet și lumini, pentru un show complet.',
    'Flexibilitate și citirea atmosferei pe parcursul evenimentului.'
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (
    <>
      <Helmet>
        <title>DJ Suru - Servicii</title>
      </Helmet>
      <section className="services-carousel-section">
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service) => (
              <div key={service.id} className="carousel-slide">
                <div className="banner-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-banner"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            <span>›</span>
          </button>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-description-section">
        <div className="container">
          <div className="service-description-content">
            <div className="service-description-header">
              <button className="description-nav-btn prev" onClick={prevSlide}>
                <span>‹</span>
              </button>
              <SplitText
                text={services[currentSlide].title}
                className="service-main-title"
                tag="h2"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0}
                rootMargin="0px"
                textAlign="center"
              />
              <button className="description-nav-btn next" onClick={nextSlide}>
                <span>›</span>
              </button>
            </div>

            <div className="service-story">
              <div className="story-paragraph glass-card">
                <SplitText
                  text={services[currentSlide].description}
                  className="story-text"
                  tag="p"
                  delay={30}
                  duration={0.6}
                  ease="power2.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                  textAlign="justify"
                />
              </div>
              <div className="story-paragraph glass-card">
                <SplitText
                  text={services[currentSlide].description2}
                  className="story-text"
                  tag="p"
                  delay={30}
                  duration={0.6}
                  ease="power2.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                  textAlign="justify"
                />
              </div>
            </div>

            <div className="common-features">
              <h3 className="features-title">Ce oferim pentru toate serviciile:</h3>
              <div className="features-grid">
                {commonFeatures.map((feature, index) => (
                  <div key={index} className="feature-glass-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-description-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`description-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          <div className="cta-section">
            <h2>Gata să începem?</h2>
            <p>Contactează-mă pentru o ofertă personalizată pentru evenimentul tău</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GlassIcons
                items={[
                  {
                    icon: "Solicită Ofertă",
                    label: "",
                    color: "transparent",
                    onClick: () => navigate('/contact')
                  }
                ]}
                className="contact-glass-button"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;