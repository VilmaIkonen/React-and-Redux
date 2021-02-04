// Actions for Input component
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const updateInput = () => ({type: UPDATE_INPUT});

// Actions for List component
export const STORE_TODO = 'STORE_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const storeTodo = (currentInput) => ({type: STORE_TODO, value: currentInput});
export const doneTodo = () => ({type: DONE_TODO});
export const deleteTodo = () => ({type: DELETE_TODO});

