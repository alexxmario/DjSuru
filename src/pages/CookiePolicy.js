import React from 'react';
import { Helmet } from 'react-helmet-async';
import './CookiePolicy.css';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>DJ Suru - Politica privind cookie-urile</title>
      </Helmet>
      <section className="cookie-policy">
        <div className="container">
          <h1>Politica privind cookie-urile</h1>

          <div className="policy-content">
            <h2>1. Ce sunt cookie-urile?</h2>
            <p>Cookie-urile sunt fișiere mici de text care sunt stocate în browserul dumneavoastră atunci când vizitați site-ul nostru web. Acestea ne ajută să îmbunătățim experiența utilizatorului și să oferim servicii personalizate.</p>

            <h2>2. Tipuri de cookie-uri utilizate</h2>
            <h3>Cookie-uri esențiale</h3>
            <p>Aceste cookie-uri sunt necesare pentru funcționarea corectă a site-ului și nu pot fi dezactivate:</p>
            <ul>
              <li>Cookie-uri de sesiune pentru navigare</li>
              <li>Cookie-uri pentru securitate</li>
              <li>Cookie-uri pentru preferințele utilizatorului</li>
            </ul>

            <h3>Cookie-uri de analiză</h3>
            <p>Folosim cookie-uri pentru a înțelege modul în care vizitatorii interactionează cu site-ul:</p>
            <ul>
              <li>Google Analytics pentru statistici de trafic</li>
              <li>Cookie-uri pentru măsurarea performanței paginilor</li>
            </ul>

            <h3>Cookie-uri de la terți</h3>
            <p>Site-ul nostru poate include cookie-uri de la servicii externe:</p>
            <ul>
              <li>Platforme de social media (Facebook, YouTube, TikTok)</li>
              <li>Servicii de hartă</li>
              <li>Widget-uri externe</li>
            </ul>

            <h2>3. Gestionarea cookie-urilor</h2>
            <p>Puteți gestiona sau dezactiva cookie-urile prin setările browserului dumneavoastră:</p>
            <ul>
              <li><strong>Chrome:</strong> Setări → Avansat → Confidențialitate și securitate → Cookie-uri</li>
              <li><strong>Firefox:</strong> Opțiuni → Confidențialitate și securitate → Cookie-uri</li>
              <li><strong>Safari:</strong> Preferințe → Confidențialitate → Cookie-uri</li>
              <li><strong>Edge:</strong> Setări → Cookie-uri și permisiuni de site</li>
            </ul>

            <h2>4. Consimțământul pentru cookie-uri</h2>
            <p>Prin continuarea navigării pe site-ul nostru, vă exprimați acordul pentru utilizarea cookie-urilor în conformitate cu această politică. Puteți retrage consimțământul oricând prin modificarea setărilor browserului.</p>

            <h2>5. Actualizări ale politicii</h2>
            <p>Această politică poate fi actualizată periodic pentru a reflecta modificările în utilizarea cookie-urilor. Vă recomandăm să verificați această pagină în mod regulat.</p>

            <h2>6. Contact</h2>
            <p>Pentru întrebări despre politica cookie-urilor, ne puteți contacta prin intermediul paginii de <a href="/contact">contact</a>.</p>

            <p className="last-updated">Ultima actualizare: Ianuarie 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;