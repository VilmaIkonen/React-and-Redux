import * as actionTypes from '../actions/actions'

const initialState = {
  todoList: [{
    id:'',
    text: '',
    completed: false
  }]
}

// // setting new id:
// function newTodoId (todoList) {
//   const latestId = todoList.map((todo) => Math.max(...todoList(todo => todo.id)) +1);
//   return latestId +1;
// }

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TODO:
      return {...state, todoList: state.todoList.concat({
        // id: newTodoId(state.todoList), 
        id: state.todoList.id,
        text: action.payload,
        completed: false
      })
    }
    case actionTypes.DONE_TODO:
      return {}
    case actionTypes.DELETE_TODO:
      const updatedTodoList = state.todoList.filter((todo) => todo.id !== action.payload); // filter: go through all ids, make new array with all that IS NOT action.payload. "Pushes" the filtered out from the array
    return {...state, todoList: updatedTodoList} 
    }
  return state;
};

export default listReducer;