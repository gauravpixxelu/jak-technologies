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
                <a className="nav-link" href="/#about">About us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#journey">Our Journey</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#story">Our Story</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#product">Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#service">Services</a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="#partner">Our Technological</a>
              </li> */}

              <li className="nav-item">
                <a className="nav-link" href="/blog">Blog</a>
              </li> 

            </ul>
          </div>
          <div className="mobile">
            <h4><span>Mobile Number</span>(+91) 9702738111</h4>
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
