import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import './accessibility.css';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccessibilityMenu = () => {
    setIsOpen(!isOpen);
  };

  const setFontSize = (size) => {
    document.body.style.fontSize = size;
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  const toggleHighlightLinks = () => {
    document.body.classList.toggle('highlight-links');
  };

  const resetStyles = () => {
    document.body.style.fontSize = '';
    document.body.classList.remove('dark-mode', 'highlight-links');
  };

  return (
    <div className="accessibility-menu-wrapper">
      <button className="accessibility-menu-icon" onClick={toggleAccessibilityMenu}>
        <FiSettings />
      </button>
      <div className={`accessibility-menu-panel ${isOpen ? 'open' : ''}`}>
        <button onClick={() => setFontSize('1.2rem')}>Large Text</button>
        <button onClick={() => setFontSize('1rem')}>Small Text</button>
        <button onClick={toggleDarkMode}>Dark Mode</button>
        <button onClick={toggleHighlightLinks}>Highlight Links</button>
        <button onClick={resetStyles}>Reset</button>
      </div>
    </div>
  );
};

export default AccessibilityMenu;
