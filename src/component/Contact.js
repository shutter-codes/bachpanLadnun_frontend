import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  // Update this line
import Navbar from './Navbar';
import Footer from './Footer';
import MarqueeComponent from './MarqueeComponent';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <MarqueeComponent/>
            <div className="container-xxl py-5">

                <div className="container animated-title ">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Get In Touch</h1>
                        <p>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us through any of the following methods:</p>
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-4 text-center">
                            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                                <i className="fas fa-map-marker-alt fa-2x text-danger"></i> {/* Update to Font Awesome 5/6 icon classes */}
                            </div>
                            <h6>
                                <a href="https://maps.app.goo.gl/sCjDqZwSiHnmPdvh8" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker-alt me-3"></i>Bachpan School, Ladnun
                                </a>
                            </h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                                <i className="fas fa-envelope fa-2x text-danger"></i> {/* Update to Font Awesome 5/6 icon classes */}
                            </div>
                            <h6>
                                <a href="mailto:ladnunbachpan@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-envelope me-3"></i>ladnunbachpan@gmail.com
                                </a>
                            </h6>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '75px', height: '75px' }}>
                                <i className="fas fa-phone fa-2x text-danger"></i> {/* Update to Font Awesome 5/6 icon classes */}
                            </div>
                            <h6>
                                <a href="tel:7665555533" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-phone me-3"></i>+91-7665555533,+91-8239000200
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
