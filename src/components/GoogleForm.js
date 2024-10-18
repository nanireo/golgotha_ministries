import React from 'react';

const GoogleForms = () => {
  const forms = [
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLScqgzhaZbHuuiWHnu00FAUCPEQ0YTAPbQjKdBGvKaDJ3o3FXw/viewform?embedded=true",
      height: 2540,
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLScQPOpr1zIU7rqmqws4JVLlzRbhc2rcqx8Wu32H4DfBqw7S9A/viewform?embedded=true",
      height: 5434,
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdggim2XZwjRkqOl60esYpTIktzEL7hPVNom13v_4Dxs70pKA/viewform?embedded=true",
      height: 7290,
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSdIr7oyT39Ulh2elLoHb781u5xoLHhL64-galgJ4tEUTPVOVg/viewform?embedded=true",
      height: 10622,
    },
    {
      src: "https://docs.google.com/forms/d/e/1FAIpQLScKqO94o48JKIS1tAw3kobz4to73jAUGjbd8XOa6Lwvhw24Dg/viewform?embedded=true",
      height: 6684,
    },
  ];

  return (
    <div className="form-container">
      {forms.map((form, index) => (
        <div className="form-wrapper" key={index}>
            <h4>Bible Quiz</h4>
          <iframe
            src={form.src}
            width="640"
            height={form.height}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="form-iframe"
          >
            Loading…
          </iframe>
        </div>
      ))}
    </div>
  );
};

export default GoogleForms;
