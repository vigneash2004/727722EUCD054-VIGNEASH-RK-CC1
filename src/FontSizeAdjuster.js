import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div>
    <button onClick={increaseFontSize}>Increase Font Size</button>
    <button onClick={decreaseFontSize}>Decrease Font Size</button>
    <div style={{ fontSize: `${fontSize}px`, margin: '10px 0' }}>
      Adjust my font size!
    </div>
    </div>
  );
};

export default FontSizeAdjuster;
