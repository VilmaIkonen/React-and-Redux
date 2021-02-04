import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Input = () => {

  const input = useSelector(state => state.in.input);
  const dispatch = useDispatch();

  return (
    <div>
  Hello from input
      
    </div>
  );
};

export default Input;