import './Footer.css'
import logoWhite from '../../../images/logoWhite.svg'
import paypal from '../../../images/paypal.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footerWrapper">
                    <a href="/">
                        <img src={logoWhite} alt="logo" className='footerLogo'/>
                    </a>
                    <div className="footerLinks">
                        <a href="/" className="footerLink">ABOUT</a>
                        <a href="/" className="footerLink">THE COURSE</a>
                        <a href="/" className="footerLink">REVIEWS</a>
                    </div>
                    <a href="/">
                        <img src={paypal} alt="paypal"/>
                    </a>
                </div>
                <a href="/" className='footerBook'>BOOK THE COURSE</a>
                <div className="footerLast">
                    <div className="footerTerms">
                        ©2021 Elexiris
                    </div>
                    <a href="/" className="footerTerms">
                        Terms of Use
                    </a>
                    <a href="/" className="footerTerms">
                        Privacy Policy
                    </a>
                    <a href="/" className="footerTerms">
                        Accessibility
                    </a>
                    <a href="/" className="footerTerms">
                        Site Map
                    </a>
                    <a href="/" className="footerTerms">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer