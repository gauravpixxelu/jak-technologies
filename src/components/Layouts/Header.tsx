import Logo from 'assets/images/header/white-logo.png';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const storedMobileMenuState = localStorage.getItem('mobileMenuState');
    if (storedMobileMenuState) {
      setIsMobileMenuOpen(JSON.parse(storedMobileMenuState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mobileMenuState', JSON.stringify(isMobileMenuOpen));
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Competency Centers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Solutions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="mobile">
            <h4><span>Mobile Number</span>(+91) 98161 55555</h4>
          </div>
          <button
            className={`navbar-toggler ${isMobileMenuOpen ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
