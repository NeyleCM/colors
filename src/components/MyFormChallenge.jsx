import React, { useState, useRef, useEffect } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null); 

  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  return (
    <>
       <input
        ref={inputRef}
        type="text"
        placeholder="Escribe un color..."
        value={inputValue}
        onChange={handleChange}
        style={{
          width: '60%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '2px solid white',
          backgroundColor: '#333',
          color: 'white',
          marginBottom: '20px',
          textAlign: 'center',
        }}
        />
        <div className="box-container">
        {colors.map((color) => (
          <BoxColor
            key={color}
            color={color}
            isActive={inputValue === color}
          />
        ))}
        </div>
    </>
  );
};
export default MyForm;
