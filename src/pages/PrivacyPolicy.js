import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>DJ Suru - Politica de confidențialitate</title>
      </Helmet>
      <section className="privacy-policy">
        <div className="container">
          <h1>Politica de confidențialitate</h1>

          <div className="policy-content">
            <h2>1. Informații generale</h2>
            <p>Această politică de confidențialitate descrie modul în care DJ Suru colectează, utilizează și protejează informațiile personale ale vizitatorilor site-ului web.</p>

            <h2>2. Informații colectate</h2>
            <p>Colectăm următoarele tipuri de informații:</p>
            <ul>
              <li>Informații de contact (nume, email, telefon) când completați formularul de contact</li>
              <li>Informații despre navigare prin intermediul cookie-urilor</li>
              <li>Adresa IP și informații tehnice despre dispozitivul utilizat</li>
            </ul>

            <h2>3. Utilizarea informațiilor</h2>
            <p>Informațiile colectate sunt utilizate pentru:</p>
            <ul>
              <li>Răspunsul la solicitările dumneavoastră</li>
              <li>Îmbunătățirea serviciilor oferite</li>
              <li>Comunicarea cu privire la serviciile DJ</li>
            </ul>

            <h2>4. Protecția datelor</h2>
            <p>Ne angajăm să protejăm informațiile personale prin măsuri tehnice și organizatorice adecvate. Datele nu sunt partajate cu terțe părți fără consimțământul dumneavoastră.</p>

            <h2>5. Drepturile dumneavoastră</h2>
            <p>Aveți următoarele drepturi în legătură cu datele personale:</p>
            <ul>
              <li>Dreptul de acces la datele personale</li>
              <li>Dreptul de rectificare</li>
              <li>Dreptul de ștergere</li>
              <li>Dreptul de restricționare a prelucrării</li>
            </ul>

            <h2>6. Contact</h2>
            <p>Pentru întrebări legate de această politică de confidențialitate, ne puteți contacta prin intermediul paginii de <a href="/contact">contact</a>.</p>

            <p className="last-updated">Ultima actualizare: Ianuarie 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;