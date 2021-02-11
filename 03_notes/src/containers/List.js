import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNote } from '../actions/actions'

const List = () => {

  const notes = useSelector((state)=> state.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {notes.map((note) => 
        <li 
        key={note.id}
        onClick={() => dispatch(toggleNote(note.id))}
        style={{textDecoration: note.completed ? 'line-through' : 'none'}}
        >{note.text}    
        </li>
      )}
      </ul>
    </div>
  );
};

export default List;