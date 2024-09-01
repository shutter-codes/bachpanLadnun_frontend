import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { ContactUs } from './ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Your custom CSS
import Carousel from "./Carousel1";
import Faculty from './Faculty';
import Schoolclasses from './Schoolclasses';
import Footer from './Footer';
import MarqueeComponent from './MarqueeComponent';
import Thought from './Thought';

const Home = () => {
    return (
        <div className="Home-page" >
            <Navbar />
            <MarqueeComponent />
            <div className="carousel-section" data-aos-delay="300" >
                <Carousel />
            </div>
            <div className="faculty-section"  data-aos-delay="300">
                <Faculty />
            </div>
            <div className="schoolclasses-section"  data-aos-delay="300">
                <Schoolclasses />
            </div>
            
            <div className="contact-us-section"  data-aos-delay="300">
                <ContactUs />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
