import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNote } from '../actions/actions'
import Input from './Input'

const List = () => {

  const dispatch = useDispatch();
  const notes = useSelector((state)=> state.notes);
  
  return (
    <div>
      {notes.map((note) => (
        <Input 
        className={note.completed ? 'note line-through' : 'note'}
        key={note.id}
        note={note}
        setCompleted={() => dispatch(toggleNote(note.id, !note.completed ? {completed: true} : {completed: false}))}
        />
      ))}
    </div>
  );
};

export default List;
