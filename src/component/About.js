import React from 'react';
import './About.css'; // Import the CSS file with animation
import pic1 from './images/classes-1.jpg';
import pic2 from './images/classes-3.jpg';
import pic3 from './images/classes-4.jpg';
import pic4 from './images/about-1.jpg';
import pic5 from './images/classes-1.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import MarqueeComponent from './MarqueeComponent';
import sir1 from './images/sc10 (8).jpg';

const About = () => {
    return (
        <div>
            <Navbar/>
            <MarqueeComponent/>
            <div className="container-xxl py-5 animated-title">
                <div className="container animated-title">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4 animated-title">Learn More About Us</h1> {/* Added animated-title class */}
                            <p className='animated-title'>Bachpan School in Ladnun opened its doors in 2017 with a vision to provide quality education and a nurturing environment for young minds. Starting with just a few students, our school quickly became a cornerstone of the community, known for its commitment to excellence and holistic development.</p>
                            <p className="mb-4 animated-title">Over the years, Bachpan School has grown significantly, both in terms of student enrollment and infrastructure. Our dedicated team of educators, innovative teaching methods, and state-of-the-art facilities have made us a preferred choice for parents seeking a well-rounded education for their children. <br/><br/>We pride ourselves on creating a positive and inclusive atmosphere where every child is encouraged to explore their potential. Our curriculum integrates academic rigor with extracurricular activities, ensuring that students receive a balanced and enriching educational experience.</p>
                            <div className="row g-4 align-items-center animated-title">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={sir1} alt="" style={{ width: '55px', height: '70px' }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Owner Name</h6>
                                            <small>Mr. Dinesh Dheru <br/>Director</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row" >
                                <div className="col-12 text-center " >
                                    <img className="img-fluid w-65 rounded-circle bg-light p-3" src={pic2} alt="" />
                                </div>
                                <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-120 h-40 rounded-circle bg-light p-3" src={pic3} alt="" />
                                </div>
                                <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-120 h-20 rounded-circle bg-light p-3" src={pic4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-light rounded">
                        <div className="row g-0">
                            <div className="col-lg-6 wow fadeIn"  data-wow-delay="0.1s" id="aboutimg" style={{ minHeight: '400px' }}>
                                <div className="position-relative h-100" id="ewrt">
                                    <img className=" w-80 h-100 rounded" src={pic5} style={{ objectFit: 'cover' }} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="h-100 d-flex flex-column justify-content-center p-5">
                                    <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                                    <p className="mb-4">At our school, we are dedicated to providing a well-rounded education that goes beyond academics. Our diverse cultural activities and events are designed to enrich students' learning experiences, foster creativity, and celebrate the rich tapestry of our community. From annual cultural festivals and art exhibitions to music and dance performances, we offer numerous opportunities for students to showcase their talents and learn about different cultures. <br/><br/>Explore our vibrant cultural programs and see how we nurture a love for the arts, encourage self-expression, and build a strong sense of community. Join us and become part of an environment where education meets culture, and every student has the chance to shine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
