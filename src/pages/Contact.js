import React, { useState } from 'react';

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
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

    // Simulate form submission
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
  };

  return (
    <>
      <section className="page-header" style={{
        backgroundImage: 'url(/images/banner-contact.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px'
      }}>
        <div className="container" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          paddingTop: '80px'
        }}>
          <h1>Contact</h1>
          <p>Contactează-mă pentru o ofertă personalizată</p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Informații de Contact</h2>
              <div className="contact-item">
                <h3>Telefon</h3>
                <p><a href="tel:+40767632857">0767 632 857</a></p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p><a href="mailto:sururomulus@superdj.ro">sururomulus@superdj.ro</a></p>
              </div>
              <div className="contact-item">
                <h3>Adresă</h3>
                <p>Quadra 2 Strada fabricii nr 26 B, Tronson P, Et 1 ap 11</p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Trimite-mi un Mesaj</h2>
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
                <button type="submit" className="submit-button">
                  Trimite Mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;