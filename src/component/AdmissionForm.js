import './AdmissionForm.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { admissionFomeDetail } from '../action/adfAction';
import Navbar from './Navbar';
import bachpan from './images/bachpan.webp';
import MarqueeComponent from './MarqueeComponent';

function AdmissionForm() {
    const dispatch = useDispatch();

    // State variables for form fields
    const [admissionClass, setAdmissionClass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [motherName, setMotherName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case "admissionClass":
                setAdmissionClass(value);
                break;
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "mobileNo":
                setMobileNo(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "dob":
                setDob(value);
                break;
            case "gender":
                setGender(value);
                break;
            case "motherName":
                setMotherName(value);
                break;
            case "fatherName":
                setFatherName(value);
                break;
            case "address":
                setAddress(value);
                break;
            default:
                break;
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check for required fields
        if (!admissionClass || !firstName || !lastName || !email || !mobileNo || !dob || !gender || !motherName || !fatherName || !address) {
            alert("Please fill in all required fields.");
            return;
        }

        // Dispatch action
        try {
            dispatch(admissionFomeDetail(admissionClass, firstName, lastName, dob, gender, email, mobileNo, motherName, fatherName, address, description));
            alert("Form submitted successfully!");
            
            // Reset form fields
            setAdmissionClass("");
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobileNo("");
            setDescription("");
            setDob("");
            setGender("");
            setMotherName("");
            setFatherName("");
            setAddress("");
        } catch (error) {
            alert("Failed to submit the form. Please try again.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className='paragraph'>
                <div className="form1">
                    <div className='logo190'>
                        <img src={bachpan} alt="Bachpan School" />
                    </div>
                    <p id='tagm' className='tagm'>Welcome To BachpanSchool-Ladnun</p>
                    <p className='line1'></p>
                    <h2 id="tag">Admission Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="names">
                            <select
                                id="admissionClass"
                                value={admissionClass}
                                onChange={handleInputChange}
                            >
                                <option className='grades' value="">Admission for</option>
                                <option className='grades' value="Playgroup">Playgroup</option>
                                <option className='grades' value="Nursery">Nursery</option>
                                <option className='grades' value="LKG">LKG</option>
                                <option className='grades' value="UKG">UKG</option>
                                <option className='grades' value="1st Grade">1st Grade</option>
                                <option className='grades' value="2nd Grade">2nd Grade</option>
                                <option className='grades' value="3rd Grade">3rd Grade</option>
                                <option className='grades' value="4th Grade">4th Grade</option>
                                <option className='grades' value="5th Grade">5th Grade</option>
                                <option className='grades' value="6th Grade">6th Grade</option>
                                <option className='grades' value="7th Grade">7th Grade</option>
                            </select>
                        </div>

                        <div className="input1">
                            <div className='input'>
                                <p>
                                    <input
                                        type="text"
                                        className='inputname'
                                        id="firstName"
                                        value={firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your First Name"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="text"
                                        className='inputname'
                                        id="lastName"
                                        value={lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Last Name"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="tel"
                                        className='inputname2'
                                        id="mobileNo"
                                        value={mobileNo}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Mobile No."
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="date"
                                        className='inputname2'
                                        id="dob"
                                        value={dob}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your DOB"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="text"
                                        className='inputname2'
                                        id="gender"
                                        value={gender}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Gender"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="email"
                                        className='inputname2'
                                        id="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Email ID"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="text"
                                        className='inputname'
                                        id="motherName"
                                        value={motherName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Mother Name"
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <input
                                        type="text"
                                        className='inputname'
                                        id="fatherName"
                                        value={fatherName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Father Name"
                                        required
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <textarea
                                        id="address"
                                        cols="50"
                                        rows="5"
                                        value={address}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Address"
                                    />
                                </p>
                            </div>
                            <div className='input'>
                                <p>
                                    <textarea
                                        id="description"
                                        cols="50"
                                        rows="5"
                                        value={description}
                                        onChange={handleInputChange}
                                        placeholder="Enter Your Message"
                                    />
                                </p>
                            </div>
                            <button className="animated-button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default AdmissionForm;
