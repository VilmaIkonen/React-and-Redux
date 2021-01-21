import * as actionType from '../actions/actions';

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionType.ADD:       
      return {
        ...state, counter: state.counter +1
      }
    case actionType.REMOVE:
      if(state.counter <= 0) {
        return {
          ...state, counter: 0
        }
      }
      else {
        return {
          ...state, counter: state.counter -1
        }
      }
    case actionType.RESET: 
      return {
        ...state, counter: 0
      }
  }
  return state; 
}

const initialState = { 
  counter: 0,
};

export default reducer;

// same w if-statements: also prevent negative numbers

// const reducer = (state = initialState, action) => {

//   if(action.type === actionType.ADD) {
//     return {
//       ...state, counter: state.counter +1,
//     }
//   } 
//   if(action.type === actionType.REMOVE) {
//     if(state.counter <= 0) {
//       return {
//         ...state, counter: 0,
//       }
//     }
//     else {
//       return {
//         ...state, counter: state.counter -1,
//       }  
//     }
//   }
//   if(action.type === actionType.RESET) {
//     return {
//       ...state, counter: 0,
//     }
//   }
//     return state;
// }