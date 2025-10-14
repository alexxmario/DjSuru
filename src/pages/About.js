import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>DJ Suru - Despre mine</title>
      </Helmet>
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <h1>DJ Suru</h1>
              <p className="hero-subtitle">Romulus Virgil Suru</p>
            </div>

            <div className="hero-image">
              <img src="/images/despre-mine.jpeg" alt="DJ Suru Portrait" />
            </div>

            <div className="hero-text">
              <blockquote className="quote-box relative">
                <svg
                  className="absolute -top-6 -start-8 size-16 text-gray-300"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="quote">
                    <em>
                      Muzica pentru mine e precum respirația
                    </em>
                  </p>
                  <p className="quote">
                    <em>
                      Nu mă satur niciodată de respirație, la fel nu mă plictisesc de muzică.
                    </em>
                  </p>
                </div>
              </blockquote>
              <div className="favorite-song-section">
                <h3>Piesa mea favorită</h3>
                <div className="song-details">
                  <img src="/images/home-album-cover.jpeg" alt="Home Album Cover" className="album-cover" />
                  <div className="song-info">
                    <p className="song-title">Home</p>
                    <p className="song-artist">Edward Sharpe & The Magnetic Zeros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-journey">
        <div className="container">
          <h2>Parcursul meu profesional</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-year">O nouă pasiune</div>
              <div className="timeline-content">
                <h3>Discoteca Toxic</h3>
                <p>Născut în Focșani, am început să mixez la vârsta de 17 ani cu un Gemeni CD 240 Player la discoteca Toxic. De atunci, pasiunea pentru muzică nu a făcut decât să crească</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Învățare</div>
              <div className="timeline-content">
                <h3>Club Extrem Focșani</h3>
                <p>Colaborare cu DJ Banana și MC Cristian Hrubaru pentru a învăța arta mixatului și ce înseamnă să fii un bun MC</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Dezvoltare</div>
              <div className="timeline-content">
                <h3>Club Musicbox & Club Hypnotic</h3>
                <p>La Club Musicbox îl cunosc pe DJ MaX, de la care aprofundez arta mixatului. La Club Hypnotic devin DJ rezident și cunosc pe SmaX, Bisky și K-Flow (Future Underground)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Recunoaștere</div>
              <div className="timeline-content">
                <h3>Festivalul Bachus & TVR 1</h3>
                <p>Participare la Festivalul Bachus și apariție la TVR 1 la emisiunea "Vara, Fete și Vedete", urmând multe concerte și cunoscând persoane importante din domeniu</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Acreditare profesională</h3>
                <p>Devin DJ acreditat, absolvind școala DJ HighWay și intru în ADJPR (Asociația DJ-ilor Profesioniști din România)</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Super DJ Team</h3>
                <p>Sunt cooptat în echipa Super DJ, realizând cu succes numeroase evenimente private și corporate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-experience">
        <div className="container">
          <h2>Experiența mea</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="card-icon">🎧</div>
              <h3>Cluburi și Locații</h3>
              <ul>
                <li>Club Extrem Focșani</li>
                <li>Club Musicbox</li>
                <li>Club Hypnotic (DJ rezident)</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="card-icon">🎪</div>
              <h3>Festivaluri și Evenimente</h3>
              <ul>
                <li>Bachus Festival</li>
                <li>Apariție la TVR 1 - "Vara, Fete și Vedete"</li>
                <li>Numeroase evenimente private</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="card-icon">🎵</div>
              <h3>Specializări</h3>
              <ul>
                <li>Mixare muzică inter-generațională</li>
                <li>Abilități MC (Maestru de Ceremonii)</li>
                <li>Crearea unei atmosfere captivante</li>
                <li>Jocuri și surprize neașteptate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-connect">
        <div className="container">
          <h2>Conectează-te cu mine</h2>
          <p>Sunt activ pe toate platformele sociale și îmi place să împărtășesc pasiunea pentru muzică:</p>
          <div className="social-platforms">
            <a href="https://www.tiktok.com/@.djsuru" target="_blank" rel="noopener noreferrer" className="platform tiktok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/DjSuru" target="_blank" rel="noopener noreferrer" className="platform facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/@DJ_SURU" target="_blank" rel="noopener noreferrer" className="platform youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.mixcloud.com/djsuru/" target="_blank" rel="noopener noreferrer" className="platform mixcloud">
              <i className="fab fa-mixcloud"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;