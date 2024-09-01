import React from 'react';
import './Thought.css';
import sir from './images/sc10 (11).jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import mam from './images/mam.jpg'
const Thought = () => {
    return (
        <div>
            <Navbar />
            <div className="thought-box-container animated-title">
                <div className="thought-box">
                    <div className="thought-box-item">
                        <div className="thought-image">
                            <img src={sir} alt="Thought Image" />
                        </div>
                        <div className="thought-content">
                            <h2>Mission</h2>
                            <p>
                                At Bachpan, we believe in nurturing the innate potential of every child by creating an environment that is safe, supportive, and enriching. Our holistic approach to education is designed to foster not just academic excellence, but also our students' personal growth and emotional well-being.
                            </p>
                            <h2>Vision</h2>
                            <p>
                                We are committed to providing a curriculum that blends traditional values with modern educational practices. Our dedicated team of educators works tirelessly to ensure that each child receives the individual attention they need to thrive. Through innovative teaching methods, state-of-the-art facilities, and a wide range of extracurricular activities, we aim to develop well-rounded individuals ready to take on the challenges of the future.
                            </p>

                            with Warm Regards<br />
                            Mr. Dinesh Dheru<br />
                            Director, Bachpan School Ladnun

                        </div>
                    </div>
                    <div className="thought-box-item">
                        <div className="thought-image">
                            <img src={mam} alt="Thought Image" />
                        </div>
                        <div className="thought-content">
                            <h2>Mission</h2>
                            <p>
                                Welcome to Bachpan School, where we believe that the foundation of a child's education is laid with care, compassion, and a deep commitment to nurturing young minds. Our mission is to provide a safe, stimulating, and enriching environment where every child can flourish.
                            </p>
                            <h2>Vision</h2>
                            <p>
                                At Bachpan, we understand that the early years are the most critical in shaping a child's future. We aim to create an environment that supports each child's development, ensuring they are well-prepared to succeed in their academic and personal lives.
                            </p>
                            Warm regards<br />
                            Miss Harshita Jain<br />
                            Principal, Bachpan School Ladnun
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Thought;
