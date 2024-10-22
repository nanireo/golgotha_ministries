import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaDownload } from "react-icons/fa";

// Set the worker source
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const pdfFiles = [
    { imgSrc: "/pics/pdf.jpg", pdfSrc: "/pdf/BOLDNESS IN EVANGELISM_3.pdf" },
    { imgSrc: "/pics/pdf1.jpg", pdfSrc: "/pdf/PERSONAL TESTIMONIES IN EVANGELISM_4.pdf" },
    { imgSrc: "/pics/pdf3.jpeg", pdfSrc: "/pdf/The Great Commission_1.pdf" },
    { imgSrc: "/pics/pdf4.jpg", pdfSrc: "/pdf/THE HOLY SPIRIT EMPOWERS EVANGELISM_2.pdf" },
];

const PdfViewer = () => {
    const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openViewer = (index) => {
        setCurrentPdfIndex(index);
        setIsViewerOpen(true);
    };

    const closeViewer = () => {
        setIsViewerOpen(false);
    };

    const handleNext = () => {
        setCurrentPdfIndex((prevIndex) => (prevIndex + 1) % pdfFiles.length);
    };

    const handlePrev = () => {
        setCurrentPdfIndex((prevIndex) => (prevIndex - 1 + pdfFiles.length) % pdfFiles.length);
    };

    return (
        <div className="pdf-viewer-container">
            <h2>Christian Messages PDF</h2>
            <div className="thumbnail-display">
                
                <button onClick={handlePrev} className="nav-button">◀</button>
                <img 
                    src={pdfFiles[currentPdfIndex].imgSrc} 
                    alt={`PDF Thumbnail ${currentPdfIndex + 1}`} 
                    className="pdf-thumbnail" 
                    onClick={() => openViewer(currentPdfIndex)} 
                />
                <button onClick={handleNext} className="nav-button">▶</button>
            </div>

            {isViewerOpen && (
                <div className="pdf-display">
                    <button onClick={closeViewer} className="close-button">✖</button>
                    <Worker workerUrl={GlobalWorkerOptions.workerSrc}>
                        <Viewer fileUrl={pdfFiles[currentPdfIndex].pdfSrc} />
                    </Worker>
                    <a href={pdfFiles[currentPdfIndex].pdfSrc} download className="download-button">
                        <FaDownload />
                    </a>

                </div>
            )}
        </div>
    );
};

export default PdfViewer;
 