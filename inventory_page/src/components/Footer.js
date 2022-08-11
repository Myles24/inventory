import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'>
   
     <div className='footer-links'>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link to="/">Our Mission</Link>
                <Link to="/">Testimonials</Link>
                <Link to="/">How to help</Link>
                <Link to="/">Terms of Service</Link>
                <Link to="/">Investors</Link>
            </div>
            <div className="footer-link-items">
                <h2>Find us</h2>
                <Link to="/">Newark, DE</Link>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Linkedin</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Youtube</Link>
               
            </div>
            <div className="footer-link-items">
                <h2>Contact us</h2>
                <Link to="/">(302) 328-6200</Link>
                <Link to="/">HopeCenter@HopeCenter.com</Link>
                <Link to="/">nccde.org</Link>
                <Link to="/">365 Airport Rd, New Castle, DE 19720 </Link>
                
            </div>
        </div>
     </div>
     <section className='social-media'>
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/'className="social-logo">
                Hope Center
                </Link>
            </div>
            <small className='website-rights'>Hope Center © 2022</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label='Facebook'
                >
                 <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label='Instagram'
                >
                 <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label='Youtube'
                >
                 <i className="fab fa-youtube"></i>
                </Link>
                <Link className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label='Twitter'
                >
                 <i className="fab fa-twitter"></i>
                </Link>
                <Link className="social-icon-link linkedin"
                to="/"
                target="_blank"
                aria-label='Linkedin'
                >
                 <i className="fab fa-linkedin"></i>
                </Link>
            </div>
    
        </div>
     </section>
    </div>
  )
}

export default Footer