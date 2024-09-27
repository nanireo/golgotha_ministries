import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Set the worker URL (ensure it's the latest version)
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`;

const Messagepdf = () => {
  const [selectedPDFIndex, setSelectedPDFIndex] = useState(null);

  // List of images and corresponding PDF paths
  const pdfData = [
    { imgSrc: "pics/pdf.jpg", pdfSrc: "pdf/BOLDNESS IN EVANGELISM_3.pdf", text: "Boldness in  Evangelism" },
    { imgSrc: "pics/pdf1.jpg", pdfSrc: "pdf/PERSONAL TESTIMONIES IN EVANGELISM_4.pdf", text: "Personal Testimonies" },
    { imgSrc: "pics/pdf3.jpeg", pdfSrc: "pdf/The Great Commission_1.pdf", text: "The Great Commission" },
    { imgSrc: "pics/pdf4.jpg", pdfSrc: "pdf/THE HOLY SPIRIT EMPOWERS EVANGELISM_2.pdf", text: "Holy Spirit Empowerment" },
  ];

  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Centers the active image
    centerPadding: '0px', // No extra padding around images
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="message-pdf">
      <h1>PDF VIEWER</h1>
      <div className="image-container">
        <Slider {...settings}>
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
        </Slider>
      </div>

      {selectedPDFIndex !== null && (
        <div className="pdf-viewer">
          <div className="pdf-actions">
            <button className="close-btn" onClick={() => setSelectedPDFIndex(null)}>
              Close PDF
            </button>
            <a href={pdfData[selectedPDFIndex].pdfSrc} download className="download-btn">
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
