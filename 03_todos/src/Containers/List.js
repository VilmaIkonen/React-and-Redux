import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeTodo, deleteTodo } from '../actions/actions'

const List = () => {

  const todos = useSelector((state)=> state.ls.todos);
  const dispatch = useDispatch();
  const currentInput = useSelector((state) => state.in.input);

  return (
    <div>
    <button onClick={() => dispatch(storeTodo(currentInput))}>Add item to the list</button>
      <ul>
      {todos.map((todo) => {
        <li onClick={() => dispatch(deleteTodo(todo.id))} key={todo.id}>
        {todo.payload}
        </li>
      })}
      </ul>
    </div>
  );
};

export default List;