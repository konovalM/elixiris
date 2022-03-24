import './Footer.css'
import logoError from '../../../images/logoError.svg'
import paypal from '../../../images/paypal.svg'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="containerFooter">
                <div className="footerWrapper">
                    <Link to="/">
                        <img src={logoError} alt="logo" className='footerLogo'/>
                    </Link>
                    <div className="footerLinks">
                        <Link to="/about" className="footerLink">ABOUT</Link>
                        <Link to="/course" className="footerLink">THE COURSE</Link>
                        <Link to="/reviews" className="footerLink">REVIEWS</Link>
                    </div>
                    <Link to="/book">
                        <img src={paypal} alt="paypal"/>
                    </Link>
                </div>
                <div className="footerBookWrapper">
                    <Link to="/book" className='footerBook'>BOOK THE COURSE</Link>
                </div>
                <div className="footerLast">
                    <div className="footerTerms">
                        ©2021 Elexiris
                    </div>
                    <Link to="/terms" className="footerTerms">
                        Terms of Use
                    </Link>
                    <Link to="/error" className="footerTerms">
                        Privacy Policy
                    </Link>
                    <Link to="/error" className="footerTerms">
                        Accessibility
                    </Link>
                    <Link to="/error" className="footerTerms">
                        Site Map
                    </Link>
                    <Link to="/contact" className="footerTerms">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer