import Logo from 'assets/images/footer/logo.png'
import Facebook from 'assets/icons/footer/facebook.svg'
import Instagram from 'assets/icons/footer/instagram.svg'
import Linkedin from 'assets/icons/footer/linkedin.svg'
import Twitter from 'assets/icons/footer/twitter.svg'
import Youtube from 'assets/icons/footer/youtube.svg'
import Phone from 'assets/icons/footer/phone.svg'
import Message from 'assets/icons/footer/message.svg'
import { Link } from "react-router-dom";


type Props = {};

const Footer = (props: Props) => {
  return (
    <>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-data">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                <h3>Let’s Create the <br />Next Now.</h3>
                <Link className="custom-btn2" to="#"><span>Get in Touch</span></Link>
                <ul className="listing social">
                  <li><Link to="/"><img src={Facebook} alt="" /></Link></li>
                  <li><Link to="/"><img src={Instagram} alt="" /></Link></li>
                  <li><Link to="/"><img src={Linkedin} alt="" /></Link></li>
                  <li><Link to="/"><img src={Twitter} alt="" /></Link></li>
                  <li><Link to="/"><img src={Youtube} alt="" /></Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-links">
                <h4>Company</h4>
                <ul className="listing">
                  <li><Link to="/">About us</Link></li>
                  <li><Link to="/">Work</Link></li>
                  <li><Link to="/">Our Process</Link></li>
                  <li><Link to="/">Insights</Link></li>
                  <li><Link to="/">Become a Partner </Link></li>
                  <li><Link to="/">Support</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-links">
                <h4>Products</h4>
                <ul className="listing">
                  <li><Link to="/">Product 1</Link></li>
                  <li><Link to="/">Product 2</Link></li>
                  <li><Link to="/">Product 3</Link></li>
                  <li><Link to="/">Product 4</Link></li>
                  <li><Link to="/">Product 5</Link></li>
                  <li><Link to="/">Product 6</Link></li>
                  <li><Link to="/">Product 7</Link></li>
                </ul>
              </div>
            </div>

            <div className="col">
              <div className="footer-cnt">
                <h4>Contact us</h4>
                <div className="addres-box">
                  <h6>Head OFFICE</h6>
                  <p>40, Rajaji Salai Chennai, Tamil Nadu, 600001 44 - 25223241</p>
                </div>
                <div className="addres-box">
                  <h6>Head OFFICE</h6>
                  <p>29, 3rd Floor, Strand Road Kolkata, West Bengal, 700001 - 03322431498</p>
                </div>
                <div className="contact-details">
                  <img src={Phone} alt="" />
                  <p>+91 98745 74894, +91 78478 54777</p>
                </div>
                <div className="contact-details">
                  <img src={Message} alt="" />
                  <p>info@jaktechnologies.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row bottom-footer">
            <div className="col-md-6">
              <div className="copyright">
                <p>©2023-2024 Jak Technologies (Soft Pvt. Ltd). All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bottom-links">
                <ul className="listing">
                  <li><Link to="/">Terms & Conditions</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">NDA</Link></li>
                  <li><Link to="/">Terms of use</Link></li>
                  <li><Link to="/">Submit a Ticket</Link></li>
                  <li><Link to="/">Sitemap</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
