import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, storeTodo } from '../actions/actions'

const Input = () => {

  const input = useSelector(state => state.in.input);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/db", input);
    window.location.reload();
  }

  const handleChange = (event) => {
    event.preventDefault();   
    dispatch(updateInput());  
  }

  return (
   <form submit={handleSubmit}>    
      <input
        name='input'       
        onChange={handleChange}
        required
        // NB! value={input} prevents writing into input field!
      />
    </form>
  );
};

export default Input;