import React from 'react';
import './Input.css'

const Input = ({ note, setCompleted }) => {

  return (
    <div onClick={setCompleted}>    
      <p>{note.text}</p>
    </div>
  );
};

export default Input;