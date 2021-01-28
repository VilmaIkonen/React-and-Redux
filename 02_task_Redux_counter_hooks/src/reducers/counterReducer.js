import * as actionTypes from '../actions/actions'

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.INCREASE:
      return {...state, counter: state.counter +1} 
    case actionTypes.DECREASE:
      if(state.counter <=0) {
        return {...state, counter:0}
      }
      else {
        return {...state, counter: state.counter -1}  
      }       
    case  actionTypes.ADDFIVE:
      return {...state, counter: state.counter +5}
    case actionTypes.REMOVEFIVE:
      return {...state, counter: state.counter -5}
    case actionTypes.RESET:
      return {...state, counter: 0}
  }
  
  return state;
};

const initialState = {
  counter: 0
}

export default counterReducer;


// Basic stating point for all reducers:
// const counterReducer = (state = initialState, action) => {
//   return state;
// };

// const initialState = {
//   counter: 0
// }

// export default counterReducer;