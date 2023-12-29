import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Rosan.R.P</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/r.r.p.arts/" className="footer__social-link" target='_blank_'>
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a href="https://github.com/rrp2000" className="footer__social-link" target='_blank_'>
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/rosanrp/" className="footer__social-link" target='_blank_'>
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; SpaceSpider. All rigths reserved
</span>
            </div>
        </footer>
    )
}

export default Footer
