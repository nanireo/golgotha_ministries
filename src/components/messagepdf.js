import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";

// Set the worker URL (ensure it's the latest version)
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`;

const Messagepdf = () => {
  const [selectedPDFIndex, setSelectedPDFIndex] = useState(0);

  // List of images and corresponding PDF paths
  const pdfData = [
    { imgSrc: "pics/pdf.jpg", pdfSrc: "pdf/BOLDNESS IN EVANGELISM_3.pdf", text: "Boldness in Evangelism" },
    { imgSrc: "pics/pdf1.jpg", pdfSrc: "pdf/PERSONAL TESTIMONIES IN EVANGELISM_4.pdf", text: "Personal Testimonies" },
    { imgSrc: "pics/pdf3.jpeg", pdfSrc: "pdf/The Great Commission_1.pdf", text: "The Great Commission" },
    { imgSrc: "pics/pdf4.jpg", pdfSrc: "pdf/THE HOLY SPIRIT EMPOWERS EVANGELISM_2.pdf", text: "Holy Spirit Empowerment" },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePreviousImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNextImage = () => {
    setSelectedPDFIndex((prevIndex) =>
      prevIndex < pdfData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousImage = () => {
    setSelectedPDFIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pdfData.length - 1
    );
  };

  return (
    <div className="message-pdf">
      <h1>PDF VIEWER</h1>
      <div {...handlers} className="image-container">
        <button className="arrow-btn left" onClick={handlePreviousImage}>
          &#10094;
        </button>

        <div
          className="image-grid"
          style={{
            transform: `translateX(${-selectedPDFIndex * 220}px)`, // Dynamically move images
          }}
        >
          {pdfData.map((item, index) => (
            <div
              key={index}
              className={`image-item ${index === selectedPDFIndex ? "selected" : ""}`}
              onClick={() => setSelectedPDFIndex(index)}
            >
              <img src={item.imgSrc} alt={`PDF ${index + 1}`} className="pdf-image" />
              <div className="image-overlay">{item.text}</div>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={handleNextImage}>
          &#10095;
        </button>
      </div>

      {selectedPDFIndex !== null && (
        <div className="pdf-viewer">
          <div className="pdf-actions">
            <button className="close-btn" onClick={() => setSelectedPDFIndex(null)}>
              Close PDF
            </button>
            {/* Download Button */}
            <a
              href={pdfData[selectedPDFIndex].pdfSrc}
              download
              className="download-btn"
            >
              Download PDF
            </a>
          </div>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfData[selectedPDFIndex].pdfSrc} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default Messagepdf;
