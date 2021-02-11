export const INIT_NOTE = 'INITIALIZE_NOTE'
export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const initNote = () => ({type: INIT_NOTE})
export const addNote = (currentState) => ({type: ADD_NOTE, payload: currentState});
export const toggleNote = (id) => ({type: TOGGLE_NOTE, payload: id});
export const deleteNote = (id) => ({type: DELETE_NOTE, payload: id});

