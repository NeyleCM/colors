import React, { useState, useRef } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const boxesRef = useRef([]);

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Escribe un color..."
          value={inputValue}
          onChange={handleChange}
        />
        <div className="box-container">
          {colors.map((color, index) => (
            <BoxColor
              key={color}
              color={color}
              isActive={inputValue === color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyForm;
