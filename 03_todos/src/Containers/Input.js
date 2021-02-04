import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput, storeTodo } from '../actions/actions'

const Input = () => {

  const input = useSelector(state => state.in.input);
  const dispatch = useDispatch();

  const handleChange = event => dispatch(updateInput());

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(storeTodo());     
  }

  return (
   <form onSubmit={handleSubmit}>    
      <input
        name='input'
        value={input}
        onChange
        required
      />
    </form>
  );
};

export default Input;