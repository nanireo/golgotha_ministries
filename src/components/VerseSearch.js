import React, { useEffect } from 'react';

const VerseSearch = () => {
  useEffect(() => {
    // Load the King James Bible Online search widget script
    const script = document.createElement('script');
    script.src = "https://www.kingjamesbibleonline.org/biblesearchwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Find a Verse</h2>
      <input type="text" id="verseInput" placeholder="Enter verse (e.g., John 3:16)" />
      <button
        onClick={() => {
          const verseInput = document.getElementById('verseInput').value;
          // Trigger the search widget function here
          if (window.BibleSearch) {
            window.BibleSearch.search(verseInput);
          } else {
            alert("Bible search widget is not loaded yet.");
          }
        }}
      >
        Search
      </button>
      <div id="bibleSearchWidget" style={{ marginTop: '20px' }}></div>
    </div>
  );
};

export default VerseSearch;
