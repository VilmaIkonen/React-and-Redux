import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeTodo, doneTodo, deleteTodo } from '../actions/actions'

const List = () => {

  const todoList = useSelector((state)=> state.ls.todoList);
  const dispatch = useDispatch();
  const currentInput = useSelector((state) => state.in.state);

  return (
    <div>
    <button onClick={() => dispatch(storeTodo(currentInput))}>Add item to the list</button>
      <ul>
      {todoList.map((todoItem) => {
        <li onClick={() => dispatch(deleteTodo(todoItem.id))} key={todoItem.id}>
        {todoItem.payload}
        </li>
      })}
      </ul>
    </div>
  );
};

export default List;