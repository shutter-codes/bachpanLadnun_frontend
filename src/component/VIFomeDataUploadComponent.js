import './ViFomeDataUploadComponent.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { viFomeDataUploadAction } from '../action/ViDataUploadAction';

const VIFomeDataUploadComponent = () => {
    const dispatch = useDispatch();

    // State variables for form fields
    const [image, setImage] = useState(null);
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    // Handle image input change
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setImage(selectedImage);
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case "year":
                setYear(value);
                break;
            case "description":
                setDescription(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image || !year || !description) {
            alert("Please fill in all required fields.");
            return;
        }

        dispatch(viFomeDataUploadAction(image, description, year));
        setImage(null);
        setYear("");
        setDescription("");
    };

    // Generate a preview URL for the image
    const imagePreviewUrl = image ? URL.createObjectURL(image) : "";

    return (
        <div className='paragraph'>
            <p className='para2'>
                Video/Image Data Upload Here
            </p>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1 className="heading">Shape Your Future with Us: <br /> - Admission Form.</h1>

                    <div className="input">
                        <div className='names'>
                            <p className="name">Image/Video <br />
                                <input
                                    type="file"
                                    className='inputname'
                                    id="image"
                                    onChange={handleImageChange}
                                    accept="image/*,video/*"
                                    required
                                />
                                {imagePreviewUrl && (
                                    <div>
                                        <h3>Preview:</h3>
                                        {image.type.startsWith('image/') ? (
                                            <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
                                        ) : image.type.startsWith('video/') ? (
                                            <video src={imagePreviewUrl} controls style={{ maxWidth: '100%' }} />
                                        ) : null}
                                    </div>
                                )}
                            </p>
                            <p className="name">Year <br />
                                <input
                                    type="text"
                                    className='inputname'
                                    id="year"
                                    value={year}
                                    onChange={handleInputChange}
                                    placeholder="Enter Year"
                                    required
                                />
                            </p>
                        </div>

                        <div className='emnum'>
                            <p className="name2">Description <br />
                                <input
                                    type="text"
                                    className='inputname2'
                                    id="description"
                                    value={description}
                                    onChange={handleInputChange}
                                    placeholder="Enter description which you want to show"
                                    required
                                />
                            </p>
                        </div>

                        <button className="animated-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VIFomeDataUploadComponent;
