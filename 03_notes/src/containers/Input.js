import React from 'react';
import {useDispatch} from 'react-redux';
import { addNote } from '../actions/actions'

const Input = () => {

  const dispatch = useDispatch();

  const handleSubmit= async (event) => {
    event.preventDefault();
    let text = event.target.value;
    dispatch(addNote(text));
    text = '';    //event target.notes.value = '';
  }

  return (
   <form onSubmit={handleSubmit}>    
      <input
        name='input'
        required
        // NB! value={input} prevents writing into input field!
      />
      <button type='submit'>Add note</button>
    </form>
  );
};

export default Input;