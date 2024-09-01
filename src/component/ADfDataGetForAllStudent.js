import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admissionFomeDetailGet } from '../action/adfAction';
import './ADfDataGetForAllStudent.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { IoMdCloudDownload } from "react-icons/io";

const ADfDataGetForAllStudent = () => {
    const dispatch = useDispatch();
    const { adfdata, loading, error } = useSelector(state => state.adfGet);

    useEffect(() => {
        dispatch(admissionFomeDetailGet());
    }, [dispatch]);

    const downloadCSV = () => {
        const headers = ['Class', 'First Name', 'Last Name', 'Date of Birth', 'Gender', 'Email', 'Mobile No', 'Mother\'s Name', 'Father\'s Name', 'Address', 'Description'];
        const rows = adfdata.map(item => [
            item.admissionClass,
            item.firstName,
            item.lastName,
            item.dob,
            item.gender,
            item.email,
            item.mobileNo,
            item.mother_name,
            item.father_name,
            item.address,
            item.description,
        ]);

        let csvContent = "data:text/csv;charset=utf-8," 
            + [headers, ...rows].map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "admission_forms.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container">
            <Navbar/>
            <div className="header">
                <h1 className='adfadf'>Admission Form Details</h1>
                <IoMdCloudDownload className="download-btn" onClick={downloadCSV} />
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Mother's Name</th>
                            <th>Father's Name</th>
                            <th>Address</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adfdata.map(item => (
                            <tr key={item._id}>
                                <td data-label="Class">{item.admissionClass}</td>
                                <td data-label="First Name">{item.firstName}</td>
                                <td data-label="Last Name">{item.lastName}</td>
                                <td data-label="Date of Birth">{item.dob}</td>
                                <td data-label="Gender">{item.gender}</td>
                                <td data-label="Email">{item.email}</td>
                                <td data-label="Mobile No">{item.mobileNo}</td>
                                <td data-label="Mother's Name">{item.mother_name}</td>
                                <td data-label="Father's Name">{item.father_name}</td>
                                <td data-label="Address">{item.address}</td>
                                <td data-label="Description">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
};

export default ADfDataGetForAllStudent;
