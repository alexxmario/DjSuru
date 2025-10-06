import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <h3>Urmărește-mă pe:</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/DjSuru" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@.djsuru" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.youtube.com/@DJ_SURU" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.mixcloud.com/djsuru/" target="_blank" rel="noopener noreferrer" className="social-link mixcloud">
                <i className="fab fa-mixcloud"></i>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2025 DJ Suru. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;