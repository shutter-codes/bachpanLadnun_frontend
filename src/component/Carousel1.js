import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carimg1 from './images/carousel-2.jpg';
import carimg2 from './images/carousel-1.jpg';
import './Carousel1.css';
import { Link } from 'react-router-dom';

const Carousel1 = () => {
    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                swipeable={true}
                dynamicHeight={true}
            >
                <div className="carousel-slide">
                    <img src={carimg1} alt="Slide 1" className="carousel-image" />
                    <div className="carousel-content">
                        <h1 className="animated fadeIn" id="carfont">The Best Kindergarten School For Your Child</h1>
                        <p className="animated fadeIn">Welcome to Bachpan School, where every child’s journey begins with a strong foundation. Our nurturing environment fosters creativity and curiosity, preparing young minds for a bright future.</p>
                        <Link to={'./thought'} className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft" id="carbtncol1">Our Thoughts</Link>
                        <Link to={'./adf'} className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Register Here</Link>
                    </div>
                </div>
                <div className="carousel-slide">
                    <img src={carimg2} alt="Slide 2" className="carousel-image" />
                    <div className="carousel-content">
                        <h1 className="animated fadeIn" id="carfont">The Best Kindergarten School For Your Child</h1>
                        <p className="animated fadeIn">Welcome to Bachpan School, where every child’s journey begins with a strong foundation. Our nurturing environment fosters creativity and curiosity, preparing young minds for a bright future.</p>
                        <Link to={'./thought'} className="btn btn-secondary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft" id="carbtncol1">Our Thoughts</Link>
                        <Link to={'./adf'} className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Register Here</Link>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Carousel1;
