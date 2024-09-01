import React from 'react';
import { FaBus, FaFutbol, FaAppleAlt, FaChalkboardTeacher } from 'react-icons/fa';
import './Faculty.css';

const Faculty = () => {
    return (
        <div className="container-xxl-1 py-5">
            <div className="container-2">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="text1 mb-3" id="facsc">School Facilities</h1>
                    <p >Our school provides top-notch facilities including safe transportation, a spacious playground, a healthy canteen, and a nurturing learning environment to support every student's success.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="facility-item">
                            <div className="facility-icon bg-primary">
                                <FaBus className="facility-icon-img" />
                            </div>
                            <div className="facility-text bg-primary">
                                <h3 style={{ color: '#ffffff' }}>School Bus</h3>
                                <p className="mb-0" style={{ color: '#ffffff' }}>Reliable and comfortable transportation ensuring a safe journey to and from school.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="facility-item">
                            <div className="facility-icon bg-success">
                                <FaFutbol className="facility-icon-img" />
                            </div>
                            <div className="facility-text bg-success">
                                <h3 style={{ color: '#ffffff' }}>Playground</h3>
                                <p className="mb-0" style={{ color: '#ffffff' }}>A vibrant space for children to enjoy sports and outdoor activities, fostering physical development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="facility-item">
                            <div className="facility-icon bg-warning">
                                <FaAppleAlt className="facility-icon-img" />
                            </div>
                            <div className="facility-text bg-warning">
                                <h3 style={{color: '#ffffff' }}>AC Classrooms</h3>
                                <p className="mb-0" style={{ color: '#ffffff' }}>This is particularly beneficial during the peak summer season when temperatures can be quite high.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="facility-item">
                            <div className="facility-icon bg-info">
                                <FaChalkboardTeacher className="facility-icon-img" />
                            </div>
                            <div className="facility-text bg-info">
                                <h3 style={{ color: '#ffffff' }}>Positive Learning</h3>
                                <p className="mb-0" style={{ color: '#ffffff' }}>An inspiring environment that supports effective learning and personal growth for every student.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faculty;
