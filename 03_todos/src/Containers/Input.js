import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, storeTodo } from '../actions/actions'

const Input = () => {

  const input = useSelector(state => state.in.input);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateInput());     
  }

  const handleChange = (event) => {
    dispatch(storeTodo(input))
  }

  return (
   <form onSubmit={handleSubmit}>    
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