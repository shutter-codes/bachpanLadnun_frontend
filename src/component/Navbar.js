import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Navbar.css'; // Import custom CSS if needed

const Navbar = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1v7IxyGUeINKHYveqZMG0TgfXkI4Pv89B/view?usp=sharing'; // Correct link to download the PDF
        link.download = 'sample.pdf'; // Name of the downloaded file
        link.click();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-4 px-lg-5 py-3">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0 text-authentic">BachpanSchool-Ladnun</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <ul className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm">
                            <li><Link to="/adf" className="dropdown-item">Admission Form</Link></li>
                            <li><Link to="/gallery" className="dropdown-item">Gallery</Link></li>
                            <li>
                                <button className="dropdown-item download-button" onClick={handleDownload}>
                                    Download Fee Structure
                                </button>
                            </li>
                            <li><Link to="/thought" className="dropdown-item">Our Thoughts</Link></li>
                        </ul>
                    </li>
                </ul>
                <Link to="https://www.instagram.com/bachpan_ladnun/?igsh=MXdlcW85ejZ2aTk5dQ%3D%3D" className="btn btn-primary rounded-pill ms-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-2"></i></Link>
            </div>
        </nav>
    );
}

export default Navbar;
