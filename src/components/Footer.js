import './Footer.scss'
import LanguageIcon from '@material-ui/icons/Language'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

const Footer = () => {
  const scrollTotToTop = () => {
    window.scroll(0, window.pageYOffset)
  }

  return (
    <footer className="footer">
      <div onClick={() => scrollTotToTop()} className="footer__top">
        <p>Back to top</p>
      </div>

      <div className="footer__middle">
        <div className="footer__middle--container">
          <div className="footer__middle--content">
            <h4>Get to Know Us</h4>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Sustainability</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Tours</li>
            </ul>
          </div>

          <div className="footer__middle--content">
            <h4>Make Money with Us</h4>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>
            </ul>
          </div>

          <div className="footer__middle--content">
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>

          <div className="footer__middle--content">
            <h4>Let Us Help You</h4>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom--container">
          <div className="footer__logo">
            <h1>Amazon</h1>
          </div>

          <div className="footer__optios--container">
            <div className="footer__option">
              <LanguageIcon />
              <p>English</p>
            </div>

            <div className="footer__option">
              <AttachMoneyIcon />
              <p>USD - U.S.Dollar</p>
            </div>

            <div className="footer__option">
              <img src="https://images-na.ssl-images-amazon.com/images/I/41NC%2BegkOBL._AC_SX355_.jpg" alt="" />
              <p>United States</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
