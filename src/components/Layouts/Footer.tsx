import Logo from 'assets/images/footer/logo.png'
import { useState } from 'react';
import ScrollToTop from 'components/Common/ScrollToTop';
import Linkedin from 'assets/icons/footer/linkedin.svg'
import Twitter from 'assets/icons/footer/twitter.svg'
import Youtube from 'assets/icons/footer/youtube.svg'
import Phone from 'assets/icons/footer/phone.svg'
import Message from 'assets/icons/footer/message.svg'
import { Link } from "react-router-dom";
import PopupForm from '../Common/PopupForm';

type Props = {};



const Footer = (props: Props) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

const openPopup = () => {
  setIsPopupOpen(true);
};

const closePopup = () => {
  setIsPopupOpen(false);
};

  return (
    <>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-data">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                <h3>Let’s Create the <br />Next Now.</h3>
                <button className="custom-btn2" onClick={openPopup}><span>Get in Touch</span></button>
                <ul className="listing social">
                  <li><Link to="https://www.linkedin.com/company/jak-technologies-ltd/" target="_blank" ><img src={Linkedin} alt="" /></Link></li>
                  <li><Link to="https://twitter.com/JAKTech81" target="_blank" ><img src={Twitter} alt="" /></Link></li>
                  <li><Link to="/"><img src={Youtube} alt="" /></Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-links">
                <h4>Company</h4>
                <ul className="listing">
                  <li><a href="#about">About us</a></li>
                  <li><a href="/coming-soon">Work</a></li>
                  <li><a href="/coming-soon">Our Process</a></li>
                  <li><a href="/coming-soon">Insights</a></li>
                  <li><a href="/coming-soon">Become a Partner </a></li>
                  <li><a href="/coming-soon">Support</a></li>
                  <li><a href="/coming-soon">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-links">
                <h4>Products</h4>
                <ul className="listing">
                  <li><a href="#product">Data Blend IQ</a></li>
                  <li><a href="#product">Data Catalogue</a></li>
                  <li><a href ="#product">KPI Compendium</a></li>
                  <li><a href ="#product">Integrify Data</a></li>
                  <li><a href="#product">Intelli Dash Pro</a></li>
                  <li><a href="#product">Insight IQ</a></li>
                  <li><a href ="#product">iPowerXL</a></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-cnt">
                <h4>Contact us</h4>
                <div className="addres-box">
                  <h6>Head OFFICE</h6>
                  <p>Dheeraj Heritage II, D-701, Daulat Nagar, Santacruz (W), Mumbai 400054.</p>
                </div>
                <div className="addres-box">
                  <h6>DEVELOPMENT CENTRE</h6>
                  <p>City Pride, 1301, Khar Subway, next to Wellington Gymkhana, Santacruz (E), Mumbai 400055.</p>
                </div>
                <div className="contact-details">
                  <img src={Phone} alt="" />
                  <p className="contact-op">+91 97027 38111,<br/> +91 74062 04250</p>
                </div>
                <div className="contact-details">
                  <img src={Message} alt="" />
                  <p><a href="mailto:info@jaktech.in">info@jaktech.in</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="row bottom-footer">
            <div className="col-md-6">
              <div className="copyright">
                <p>©2023-2024 JAK Technologies Pvt. Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bottom-links">
                <ul className="listing">
                  <li><button onClick={openPopup}>Terms & Conditions</button></li>
                  <li><button onClick={openPopup}>Privacy Policy</button></li>
                  <li><button onClick={openPopup}>NDA</button></li>
                  <li><button onClick={openPopup}>Terms of use</button></li>
                  <li><button onClick={openPopup}>Submit a Ticket</button></li>
                  <li><button onClick={openPopup}>Sitemap</button></li>                  
                  <PopupForm isOpen={isPopupOpen} onRequestClose={closePopup} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>


  <ScrollToTop />
    </>
  );
};

export default Footer;
