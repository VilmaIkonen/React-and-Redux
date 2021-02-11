import * as actionTypes from '../actions/actions';
import { getAll, createNew } from '../services/notes'

const initialState = {
  notes: [{    
    id: 0,
    text: '',
    completed: false
  }]
}
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.INIT_NOTE:
      return {...state, notes: state.notes}
    case actionTypes.ADD_NOTE:
      return {...state, notes: state.notes.concat({
        id: action.id +1,
        text: action.text,
        completed: false
      })}
    case actionTypes.TOGGLE_NOTE:
      const noteToChange = state.find((note) => note.id === action.payload);
      const changedNote = { ...noteToChange, completed: !noteToChange.completed};
      return {...state, notes: state.notes.map((note) => (note.id !== action.id ? note : changedNote))
      }
    case actionTypes.DELETE_NOTE:
      const noteToDelete = state.notes.filter((notes) => notes.id !== action.payload); // filter: go through all ids, make new array with all that IS NOT action.payload. "Pushes" the filtered out from the array
    return {...state, notes: noteToDelete} 
    }
  return state;
};

export default reducer;

