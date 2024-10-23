import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the root for modal accessibility
Modal.setAppElement('#root');

const ImageGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Array of image paths
  const imageArray = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/church pics/${i + 1} c.jpeg`,
  }));

  // Open modal with selected image
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  // Go to previous image
  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

  // Go to next image
  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <h1 style={{ fontSize: '32px', color: '#FF5733', textAlign: 'center' }}>Gallery</h1>
      {/* Image grid */}
      <div className="image-grid">
        {imageArray.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={`church image ${image.id}`}
            className="gallery-image"
            onClick={() => openModal(index)} // Pass index to openModal
          />
        ))}
      </div>

      {/* Modal for viewing image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-buttonimg">
          &times;
        </button>

        {selectedImageIndex !== null && (
          <div className="modal-content">
            <button className="arrow-button" onClick={goToPrevious}>
              &#10094; {/* Left Arrow */}
            </button>
            <img 
              src={imageArray[selectedImageIndex].src} 
              alt="Full view" 
              className="modal-image" 
            />
            <button className="arrow-button" onClick={goToNext}>
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
