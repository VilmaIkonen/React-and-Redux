import * as actionTypes from '../actions/actions'

const initialState = {
  todo: [{
    id:'',
    text: '',
    completed: false
  }]
}

// // setting new id:
// function newTodoId (todos) {
//   const latestId = todos.map((todo) => Math.max(...todos(todo => todo.id)) +1);
//   return latestId +1;
// }

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TODO:
      return {...state, todo: state.todo.concat({
        // id: newTodoId(state.todo), 
        id: state.todo.id,
        text: action.payload,
        completed: false
      })
    }
    case actionTypes.DONE_TODO:
      return {}
    case actionTypes.DELETE_TODO:
      const updatedTodo = state.todo.filter((todo) => todo.id !== action.payload); // filter: go through all ids, make new array with all that IS NOT action.payload. "Pushes" the filtered out from the array
    return {...state, todo: updatedTodo} 
    }
  return state;
};

export default listReducer;