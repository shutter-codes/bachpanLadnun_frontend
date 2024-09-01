import React, { useState } from 'react';
import './Gallery.css';
import no from './images/sc1.jpg'
import sch1 from './images/sc11 (1).jpg';
import sch2 from './images/sc1.jpg';
import sch3 from './images/sc2.jpg';
import sch4 from './images/sc3.jpg';
import sch5 from './images/sc4.jpg';
import sch6 from './images/sc5.jpg';
import sch7 from './images/sc6.jpg';
import sch8 from './images/sc10 (1).jpg';
import sch9 from './images/sc10 (2).jpg';
import sch10 from './images/sc10 (3).jpg';
import sch11 from './images/sc10 (4).jpg';
import sch12 from './images/sc10 (5).jpg';
import sch13 from './images/sc10 (6).jpg';
import sch14 from './images/sc10 (8).jpg';

import sch16 from './images/sc11 (1).jpg';
import sch17 from './images/sc11 (2).jpg';
import sch18 from './images/sc11 (3).jpg';
import sch19 from './images/sc11 (4).jpg';
import sch20 from './images/sc11 (5).jpg';
import sch21 from './images/sc11 (6).jpg';
import sch22 from './images/sc12.jpg';

import scv1 from './images/sc13.mp4';
import scv2 from './images/sc7.mp4';
import scv3 from './images/sc8.mp4';





import bachpan from './images/sc1.jpg';
import Navbar1 from './Navbar';
import Footer from './Footer';
const Gallery = () => {
    const [filter, setFilter] = useState('');
    const [showSweetImages, setShowSweetImages] = useState(false);
    const [showEventImages, setShowEventImages] = useState(false);
    const [showEngagementImages, setShowEngagementImages] = useState(false);
    const [showBuffetImages, setShowBuffetImages] = useState(false);
    const [showSchoolCollageImages, setShowSchoolCollageImages] = useState(false);
    const [showKittyPartyImages, setShowKittyPartyImages] = useState(false);
    const [showBirthdayPartyImages, setShowBirthdayPartyImages] = useState(false);
    const [showManyMoreImages, setShowManyMoreImages] = useState(false);



    const handleFilterButtonClick = () => {
        setShowSweetImages(!showSweetImages);
    };

    const handleFilterEventButton = () => {
        setShowEventImages(!showEventImages);

    };

    const handleFilterEngagementButton = () => {
        setShowEngagementImages(!showEngagementImages);
    };
    const handleFilterBuffetButton = () => {
        setShowBuffetImages(!showBuffetImages);
    };
    const handleFilterSchoolCollageButton = () => {
        setShowSchoolCollageImages(!showSchoolCollageImages);
    };
    const handleFilterKittyPartyButton = () => {
        setShowKittyPartyImages(!showKittyPartyImages);
    };
    const handleFilterBirthdayPartyButton = () => {
        setShowBirthdayPartyImages(!showBirthdayPartyImages);
    };
    const handleFilterManyMoreButton = () => {
        setShowManyMoreImages(!showManyMoreImages);
    };

    const filteredImages = showSweetImages ? [
        sch22,
        sch21,
        sch20,
        sch19,
        sch18,
        sch17,
        sch16,
        sch5
        

    ] : [
        bachpan,

    ];

    const filteredEventImages = showEventImages ? [
        sch14,
        sch13,
        sch12,
        sch11,
        sch10,
        sch21,
        sch22,
        sch20


    ] : [];

    const filteredEngagementImages = showEngagementImages ?
        [
            sch9,
            sch8,
            sch7,
            sch6,
            sch19,
            sch18,
            sch14,
            sch16
        ] : [];


    const filteredBuffetImages = showBuffetImages ?
        [
            sch2,
            sch3,
            sch4,
            sch5,
            sch17,
            sch14,
            sch22,
            sch13
        ] : [];
    const filteredSchoolCollageImages = showSchoolCollageImages ?
        [
            sch21,
            sch12,
            sch11,
            sch19,
            sch20,
            sch17,
            sch22,
            sch16
        ] : [];
    const filteredKittyPartyImages = showKittyPartyImages ?
        [
            sch2,
            sch10,
            sch9,
            sch8,
            sch7,
            sch6,
            sch22,
            sch21
        ] : [];
    const filteredBirthdayPartyImages = showBirthdayPartyImages ?
        [
            sch19,
            sch18,
            sch17,
            sch16,
            sch20,
            sch21,
            sch22,
            sch13
        ] : [];
    const filteredManyMoreImages = showManyMoreImages ?
        [
            scv1,
            scv2,
            scv3
        ] : [];

    return (
        <div>
            <Navbar1 />
            <div className="pics-container">

                <div className="buttons-container animated-title">
                    <button onClick={handleFilterButtonClick} >
                        {showSweetImages ? '2024 Images' : 'Show 2024 Images'}

                    </button>
                    <button onClick={handleFilterEventButton}>
                        {showEventImages ? '2023 Images' : 'Show 2023 Images'}

                    </button>
                    <button onClick={handleFilterEngagementButton}>
                        {showEngagementImages ? '2022 Images' : 'Show 2022 Images'}
                    </button>
                    <button onClick={handleFilterBuffetButton}>
                        {showBuffetImages ? '2021 Images' : 'Show 2021 Images'}
                    </button>
                    <button onClick={handleFilterSchoolCollageButton}>
                        {showSchoolCollageImages ? '2020 Images' : 'Show 2020 Images'}
                    </button>
                    <button onClick={handleFilterKittyPartyButton}>
                        {showKittyPartyImages ? '2019 Images' : 'Show 2019 Images'}
                    </button>
                    <button onClick={handleFilterBirthdayPartyButton}>
                        {showBirthdayPartyImages ? '2018y Images' : 'Show 2018 Images'}
                    </button>
                    <button onClick={handleFilterManyMoreButton}>
                        {showManyMoreImages ? '2017 Images' : 'Show 2017 Images'}
                    </button>

                </div>

                <div className="image-container">
                    {filteredImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>

                <div className="image-container">
                    {filteredEventImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredEngagementImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredBuffetImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredSchoolCollageImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredKittyPartyImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredBirthdayPartyImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
                <div className="image-container">
                    {filteredManyMoreImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            style={{ filter: filter }}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;