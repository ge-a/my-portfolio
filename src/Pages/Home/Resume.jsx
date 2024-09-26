// components/Resume.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import resume from '../../assets/andrew_ge_resume.pdf'; // Path to your PDF file
import '../../Resume.css';

function Resume() {
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        document.title = "Andrew Ge Resume "; // Change this to your desired title
    }, []);

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="resume-container">
            <h1 className="resume-title">My Resume</h1>
            <div className="resume-content">
                <a 
                    href={resume}
                    download="Andrew Ge Resume.pdf" // This will set the downloaded file name
                    className="download-link" // Add a class for styling
                >
                    Download My Resume
                </a>
                <button 
                    className="home-button" 
                    onClick={handleHomeClick}
                >
                    Go Back to Home
                </button>
            </div>
            {/* Optionally, you can still display the resume in an iframe */}
            <iframe
                src={resume}
                style={{ height: '80vh', width: '100%', border: 'none' }} // Use 80% of the viewport height
                title="Resume Viewer"
            ></iframe>
        </div>
    );
}

export default Resume;