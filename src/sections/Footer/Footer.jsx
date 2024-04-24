import './Footer.css'
import {RiMapPinFill, RiMailFill, RiPhoneFill} from 'react-icons/ri'
const Footer = () => {
  return (
<footer id="contact">
<div className="footer-container container">
  <div className="footer-box">
    <div className="footer-title">Promo</div>
    <img src='/footer.jpg' alt=''/>
    <h4>New Fashion Trends in 2023</h4>
    <p>Promo from Sep 21 2023</p>
  </div>
  <div className="footer-box">
    <div className="footer-title">Quick Links</div>
    <div className="footer-row">
      <div className="col">
        <li><a href=''>Sell Online</a></li>
        <li><a href=''>Features</a></li>
        <li><a href=''>categories</a></li>
        <li><a href=''>Deals</a></li>
        <li><a href=''>Latest Trends</a></li>
      </div>
      <div className="col">
        <li><a href=''>Brands</a></li>
        <li><a href=''>Return</a></li>
        <li><a href=''>Privacy Policy</a></li>
        <li><a href=''>Deals</a></li>
        <li><a href=''>Trends</a></li>
      </div>
      <div className="col">
        <li><a href=''>Best Sales</a></li>
        <li><a href=''>Product</a></li>
        <li><a href=''>Contact</a></li>
        <li><a href=''>Services</a></li>
        <li><a href=''>Trends</a></li>
      </div>
    </div>
  </div>
  <div className="footer-box">
    <h5 className="footer-title">Contact Us</h5>
    <p><span><RiMapPinFill/>1256 boluevard Rd PK</span></p>
    <p><span><RiPhoneFill/> 090058600</span></p>
    <p><span><RiMailFill/>info@yoursite.com</span></p>
  </div>
</div>
  </footer>  )
}

export default Footer