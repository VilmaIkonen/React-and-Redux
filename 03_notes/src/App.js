import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import List from './containers/List';
import { getAll, createNote } from './actions/actions';

const App = () => {

  const [ note, setNote ] = useState([{ text: '', completed: false }]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createNote(note));
    clear();
  }

  const clear = () => {
    setNote({text: ''});
  }

  return (
    <div>
      <h1>List of all</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='text'
          value={note.text}
          onChange={(event) => setNote({...note, text: event.target.value})}
        />
        <button
        type='submit'>
          Add note
        </button>
      </form>
      <List/>        
    </div>
  );
};

export default App;