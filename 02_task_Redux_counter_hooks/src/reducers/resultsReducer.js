import * as actionTypes from '../actions/actions'

const resultsReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {...state, results: state.results.concat({id: new Date(), value: action.value})}    // new date is get per second --> good for id creation! 
    case actionTypes.REMOVE_RESULT:
      const updatedArray = state.results.filter((result) => result.id !== action.id)
      return {...state, results: updatedArray} // filter: go through all ids, make new array with all that IS NOT action.id. "Pushes" it out from the array
  }
  return state;
};

const initialState = {
  results: []
}

export default resultsReducer;