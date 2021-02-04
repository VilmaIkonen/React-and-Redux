import * as actionTypes from '../actions/actions'

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_TODO:
      return {...state, todoList: state.todoList.concat({id: new Date(), value: action.value})}
    case actionTypes.DONE_TODO:
      return {}
    case actionTypes.DELETE_TODO:
      return {}   
  }
  return state;
};

const initialState = {
  todoList: []
}

export default listReducer;