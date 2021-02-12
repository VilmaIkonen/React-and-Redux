import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {toggleNote} from '../actions/actions'
import Input from './Input'

const List = () => {

  const dispatch = useDispatch();
  const notes = useSelector((state)=> state.notes);
  
  return (
    <div>
      {notes && notes.map((note) => (
        <Input 
        key={note.id}
        note={note}
        setCompleted={() => dispatch(toggleNote(note.id, !note.completed ? {completed: true} : {completed: false}))}
        />
      ))}
      this is the list
    </div>
  );
};

export default List;

// {notes && nots.map...} "notes &&" verifies that the notes is not undefined in the first rendering round