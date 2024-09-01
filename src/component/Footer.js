import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaYoutube, FaInstagram, FaArrowRight } from 'react-icons/fa';
import gimg1 from './images/classes-1.jpg';
import gimg2 from './images/classes-4.jpg';
import gimg3 from './images/about-1.jpg';
import gimg4 from './images/appointment.jpg';
import gimg5 from './images/play.webp';
import gimg6 from './images/classes-3.jpg';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5" id="gcont">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        <a
                            href="https://maps.app.goo.gl/sCjDqZwSiHnmPdvh8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fly-in text-white-50"  // Apply text-white-50 here
                        >
                            <FaMapMarkerAlt className="footer-icon" />
                            Bachpan School, Ladnun
                        </a><br />
                        <a
                            href="tel:9024623069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fly-in text-white-50"  // Apply text-white-50 here
                        >
                            <FaPhoneAlt className="footer-icon" />
                            +917665555533, +918239000200
                        </a><br />
                        <a
                            href="mailto:ladnunbachpan@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fly-in text-white-50"  // Apply text-white-50 here
                        >
                            <FaEnvelope className="footer-icon" />
                            ladnunbachpan@gmail.com
                        </a>
                        <div className="d-flex pt-2 col-12" >
                            <a className="btn btn-outline-light btn-social fly-in" id="sdfdg" href="https://www.instagram.com/bachpan_ladnun?igsh=MXdlcW85ejZ2aTk5dQ==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram/>
                            </a>
                            <a className="btn btn-outline-light btn-social fly-in" id="sdfdg" href="https://www.facebook.com/Bachpanladnun" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF/>
                            </a>
                            <a className="btn btn-outline-light btn-social fly-in" href="http://www.youtube.com/@bachpanladnun2114" target="_blank" rel="noopener noreferrer" id="sdfdg">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 quick-links">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        <Link to='/' className="btn btn-link text-white-50 fly-in"><FaArrowRight /> Home</Link>
                        <Link to='/About' className="btn btn-link text-white-50 fly-in"><FaArrowRight /> About us</Link>
                        <Link to='/Contact' className="btn btn-link text-white-50 fly-in"><FaArrowRight /> Contact Us</Link>
                        <Link to='/gallery' className="btn btn-link text-white-50 fly-in"><FaArrowRight /> Gallery</Link>
                        <Link to='/adf' className="btn btn-link text-white-50 fly-in"><FaArrowRight /> Admission Form</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 fly-in" id="gphot">Photo Gallery</h3>
                        <div className="row g-2 pt-2" id="gphot1">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg4} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg5} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1 fly-in" src={gimg6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 fly-in">Admissions Open</h3>
                        <p className="fly-in">Explore opportunities for your child's bright future with our streamlined admission process. Our Admission Form is designed to be easy to fill out, ensuring a hassle-free experience for parents. Join our nurturing educational community today and give your child the foundation they deserve.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
