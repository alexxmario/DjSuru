import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import DoorAnimation from './components/DoorAnimation';
import CardNav from './components/CardNav';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Mixes from './pages/Mixes';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './styles/tailwind.css';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  },
});

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const navigationItems = [
    {
      label: "Acasă",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Acasă", href: "/", ariaLabel: "Pagina principală" }
      ]
    },
    {
      label: "Despre mine",
      bgColor: "#1A0B2E",
      textColor: "#fff",
      links: [
        { label: "Despre mine", href: "/despre-mine", ariaLabel: "Despre DJ Suru" }
      ]
    },
    {
      label: "Galerie",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Galerie", href: "/galerie", ariaLabel: "Galerie foto" }
      ]
    },
    {
      label: "Mixuri",
      bgColor: "#2D1B3D",
      textColor: "#fff",
      links: [
        { label: "Mixuri", href: "/mixuri", ariaLabel: "Mixuri DJ" }
      ]
    },
    {
      label: "Servicii DJ",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Servicii DJ", href: "/servicii-dj", ariaLabel: "Servicii DJ pentru evenimente" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#3D2A4A",
      textColor: "#fff",
      links: [
        { label: "Contact", href: "/contact", ariaLabel: "Contactează DJ Suru" }
      ]
    }
  ];

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomCursor />
        <Router>
        <div className="App">
          {showAnimation && (
            <DoorAnimation onAnimationComplete={handleAnimationComplete} />
          )}
          <CardNav
            logo="/images/logo-nav.png"
            logoAlt="DJ SURU Logo"
            items={navigationItems}
            baseColor="rgba(255, 255, 255, 0.85)"
            menuColor="#000"
            buttonBgColor="#000"
            buttonTextColor="#fff"
            ease="power3.out"
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/despre-mine" element={<About />} />
              <Route path="/galerie" element={<Gallery />} />
              <Route path="/mixuri" element={<Mixes />} />
              <Route path="/servicii-dj" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;