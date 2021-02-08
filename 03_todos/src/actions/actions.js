// Actions for Input component
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = () => ({type: UPDATE_INPUT});

// Actions for List component
export const STORE_TODO = 'STORE_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const storeTodo = (currentInput) => ({type: STORE_TODO, payload: currentInput});
export const doneTodo = (id) => ({type: DONE_TODO, payload: id});
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id});

