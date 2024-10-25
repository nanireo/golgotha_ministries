import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close (X) icon

const BibleQuiz = () => {
  const forms = [
    { 
      image: "/bibleQuiz/who-am-i.jpg", 
      src: "https://docs.google.com/forms/d/e/1FAIpQLScqgzhaZbHuuiWHnu00FAUCPEQ0YTAPbQjKdBGvKaDJ3o3FXw/viewform?embedded=true",
      height: 2540,
    }, 
    {  
      image: "/bibleQuiz/age1.jpeg",
      src: "https://docs.google.com/forms/d/e/1FAIpQLScQPOpr1zIU7rqmqws4JVLlzRbhc2rcqx8Wu32H4DfBqw7S9A/viewform?embedded=true",
      height: 5434,
    },
    {
      image:"/bibleQuiz/empty.jpeg" ,
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdggim2XZwjRkqOl60esYpTIktzEL7hPVNom13v_4Dxs70pKA/viewform?embedded=true",
      height: 7290,
    },
    {
      image:"/bibleQuiz/empty.jpeg",
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdIr7oyT39Ulh2elLoHb781u5xoLHhL64-galgJ4tEUTPVOVg/viewform?embedded=true",
      height: 10622,
    },
    { 
      image:"/bibleQuiz/Samson.jpg",
      src: "https://docs.google.com/forms/d/e/1FAIpQLScKqO94o48JKIS1tAw3kobz4to73jAUGjbd8XOa6Lwvhw24Dg/viewform?embedded=true",
      height: 6684,
    },
  ];

  const [selectedForm, setSelectedForm] = useState(null);

  const handleClick = (form) => {
    setSelectedForm(form);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Smooth scroll to the bottom
  };

  const handleClose = () => {
    setSelectedForm(null);
  };

  return (
    <div className="form-container"> 
                <h1 style={{ fontSize: '32px', color: '#ffffff', textAlign: 'center' }}>Bible Quiz</h1>

      <div className="image-gallery">
        {forms.map((form, index) => (
          <img
            key={index}
            src={form.image}
            alt={`Bible Quiz ${index + 1}`}
            onClick={() => handleClick(form)} // Call handleClick with the selected form
            className="quiz-image"
          />
        ))}
      </div>

      {selectedForm && (
        <div className="form-wrapper">
          <h4>Bible Quiz</h4>
          <button onClick={handleClose} className="close-button">
            <FaTimes /> {/* Close icon */}
          </button>
          <iframe
            src={selectedForm.src}
            width="100%"
            height={selectedForm.height}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="form-iframe"
          >
            Loading…
          </iframe>
        </div>
      )}
    </div>
  );
};

export default BibleQuiz;
