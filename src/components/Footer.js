import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "./Button"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="input__section">
                    <p className="footer__header">
                    Join the Adventure newsletter to receive our best vacation deals.
                    </p>
                    <p className="footer__header__addition">You can unsubscribe any time.</p>
                    <form action="/sign-up">
                        <input type="email" placeholder="Your email here..." className="email__input" />
                        <Button buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
                <div className="footer__links">
                    <div className="footer__link__group">
                        <div className="footer__link__head">About</div>
                        <div className="footer__links__items">
                            <Link to="/" className="footer__link">How it works</Link>
                            <Link to="/" className="footer__link">Testimonials</Link>
                            <Link to="/" className="footer__link">Careers</Link>
                            <Link to="/" className="footer__link">Investors</Link>
                            <Link to="/" className="footer__link">Terms of Service</Link>
                        </div>
                    </div>
                    <div className="footer__link__group">
                        <div className="footer__link__head">Contact Us</div>
                        <div className="footer__links__items">
                            <Link to="/" className="footer__link">Contact</Link>
                            <Link to="/" className="footer__link">Support</Link>
                            <Link to="/" className="footer__link">Destinations</Link>
                            <Link to="/" className="footer__link">Sponsorships</Link>
                        </div>
                    </div>
                    <div className="footer__link__group">
                        <div className="footer__link__head">Videos</div>
                        <div className="footer__links__items">
                            <Link to="/" className="footer__link">Submit Video</Link>
                            <Link to="/" className="footer__link">Ambassadors</Link>
                            <Link to="/" className="footer__link">Agency</Link>
                            <Link to="/" className="footer__link">Influencers</Link>
                        </div>
                    </div>
                    <div className="footer__link__group">
                        <div className="footer__link__head">Social Media</div>
                        <div className="footer__links__items">
                            <Link to="/" className="footer__link">Instagram</Link>
                            <Link to="/" className="footer__link">Facebook</Link>
                            <Link to="/" className="footer__link">Youtube</Link>
                            <Link to="/" className="footer__link">Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className="copyright__section">
                    <div className="footer__logo">
                        <Link to="/" className="footer__title">TRVL <i className="fab fa-typo3"></i></Link> 
                    </div>
                    <div className="copyright">
                        <small>TRVL © 2021</small>
                    </div>
                    <div className="social__links">
                        <Link to="/" target="_blank" className="social__link"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/" target="_blank" className="social__link"><i className="fab fa-instagram"></i></Link>
                        <Link to="/" target="_blank" className="social__link"><i className="fab fa-youtube"></i></Link>
                        <Link to="/" target="_blank" className="social__link"><i className="fab fa-twitter"></i></Link>
                        <Link to="/" target="_blank" className="social__link"><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div>
                    
            </div>
        </footer>
    )
}

export default Footer
