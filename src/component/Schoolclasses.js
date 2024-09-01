import React from "react";
import { FaBrain, FaBookOpen, FaGraduationCap, FaMusic, FaPalette, FaCode } from "react-icons/fa";
import "./SchoolClasses.css";
import user2 from './images/user.jpg';

const Schoolclasses = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5">
                    <h1 className="sch-mb-3" id="schclani">School Classes</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaBrain size={64} className="sch-icon text-danger"/> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-info" href="#">Mind Games</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Mr. Vivek Saxena</h6>
                                            <small>Language Expert</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹1600</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-8 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>50 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Repeat for other classes with different colors */}

                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaBookOpen size={64} className="sch-icon text-success" /> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-warning" href="#">Reading & Writing</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Ms. Pooja Gupta</h6>
                                            <small>Literature Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹1400</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-8 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>50 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaGraduationCap size={64} className="sch-icon text-primary" /> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-secondary" href="#">Advanced Studies</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Dr. Seema Ahuja</h6>
                                            <small>Senior Educator</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹2500</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-8 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>50 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaMusic size={64} className="sch-icon text-purple" /> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-danger" href="#">Music & Arts</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Mr. Rahul Mehta</h6>
                                            <small>Music Instructor</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹1800</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>6-8 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>50 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaPalette size={64} className="sch-icon text-orange" /> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-dark" href="#">Creative Arts</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Ms. Ritu Sharma</h6>
                                            <small>Art Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹1500</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-9 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>50 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="sch-classes-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <FaCode size={64} className="sch-icon text-teal" /> {/* Change icon color */}
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4 text-primary" href="#">Coding & Robotics</a> {/* Change name color */}
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src={user2} alt="" style={{ width: "45px", height: "45px" }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Ms. Priya Kapoor</h6>
                                            <small>STEM Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-orange text-white rounded-pill py-2 px-3" href="#">₹2000</span> {/* Change price button color */}
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-10 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>8:00-2:00</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>12 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Schoolclasses;
