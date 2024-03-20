import React, { useState, useEffect } from 'react';
import './App.css';

import een from './urbanswarms1c.png';
import twee from "./urbanswarms2c.png";
import drie from "./urbanswarms3c.png";
import vier from "./urbanswarms4c.png";
import vijf from "./urbanswarms5c.png";
import zes from "./urbanswarms6c.png";

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = ['een', 'twee', 'drie', 'vier', 'vijf', 'zes'];
  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  // Function to navigate to the next page
  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };
  return (
    <div className="App">
    {pages[currentPageIndex].toLowerCase() === 'een' && (
      <>
        <img src={een} alt="main" className="centraalbeeld" style={{}} />
      </>
    )}
    {pages[currentPageIndex].toLowerCase() === 'twee' && (
      <>
        <img src={twee} alt="two" className="centraalbeeld" style={{}} />
      </>
    )}
    {pages[currentPageIndex].toLowerCase() === 'drie' && (
      <>
        <img src={drie} alt="three" className="centraalbeeld" style={{}} />
      </>
    )}
    {pages[currentPageIndex].toLowerCase() === 'vier' && (
      <>
        <img src={vier} alt="four" className="centraalbeeld" style={{}} />
      </>
    )}
    {pages[currentPageIndex].toLowerCase() === 'vijf' && (
      <>
        <img src={vijf} alt="five" className="centraalbeeld" style={{}} />
      </>
    )}
    {pages[currentPageIndex].toLowerCase() === 'zes' && (
      <>
        <img src={zes} alt="final" className="centraalbeeld" style={{}} />
      </>
    )}
      <div className="navigation">
        {currentPageIndex > 0 && <button className="nav-button prev" onClick={goToPreviousPage}>Back</button>}
        {currentPageIndex < pages.length - 1 && <button className="nav-button next" onClick={goToNextPage}>Next</button>}
      </div>
    </div>
  );
}

export default App;
