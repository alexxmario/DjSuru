import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Vă rugăm să introduceți o adresă de email validă.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_xv10fh9';
      const templateId = 'template_xxcf7wp';
      const publicKey = '6gjk1dxDeCnSJ4kGS';

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Nu a fost furnizat',
        eventType: formData.eventType || 'Nu a fost specificat',
        eventDate: formData.eventDate || 'Nu a fost specificată',
        guests: formData.guests || 'Nu a fost specificat',
        location: formData.location || 'Nu a fost specificată',
        message: formData.message,
        time: new Date().toLocaleString('ro-RO')
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('Mulțumesc pentru mesaj! Vă voi contacta în curând.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>DJ Suru - Contact</title>
      </Helmet>
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'url(/images/banner-contact.jpeg)',
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
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
            }}
          >
            Contactează-mă pentru o ofertă personalizată
          </Typography>
        </Box>
      </Box>

      <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <div className="contact-content">
            <div className="contact-info">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Informații de Contact
              </Typography>
              <div className="contact-item">
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Telefon
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  <a href="tel:+40767632857">0767 632 857</a>
                </Typography>
              </div>
              <div className="contact-item">
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  <a href="mailto:sururomulus@superdj.ro">sururomulus@superdj.ro</a>
                </Typography>
              </div>
              <div className="contact-item">
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Adresă
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  Quadra 2 Strada fabricii nr 26 B, Tronson P, Et 1 ap 11
                </Typography>
              </div>
            </div>

            <div className="contact-form">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Trimite-mi un Mesaj
              </Typography>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nume *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">Tip Eveniment</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Selectează tipul evenimentului</option>
                    <option value="nunta">Nuntă</option>
                    <option value="cununie">Cununie</option>
                    <option value="botez">Botez</option>
                    <option value="majorat">Majorat</option>
                    <option value="eveniment-privat">Eveniment Privat</option>
                    <option value="corporativ">Eveniment Corporativ</option>
                    <option value="altele">Altele</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Data Evenimentului</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Numărul de Invitați</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Locația Evenimentului</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesaj *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Detalii despre eveniment, preferințe muzicale, întrebări..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Contact;