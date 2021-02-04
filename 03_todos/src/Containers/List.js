import React from 'react';
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
      {todoList.map((item) => {
        <li onClick={() => dispatch(deleteTodo(item.id))} key={item.id}>{item.value}</li>
      })}
      </ul>
    </div>
  );
};

export default List;