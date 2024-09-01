import React from 'react'

const Download_Fee_Structure = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/sample.pdf'; // Path to your PDF file in the public directory
        link.download = 'sample.pdf'; // Name of the downloaded file
        link.click();
    };
    return (
        <div>
            <div className="download-button-container">
                <button className="download-button" onClick={handleDownload}>
                    Download PDF
                </button>
            </div>
        </div>
    )
}

export default Download_Fee_Structure
