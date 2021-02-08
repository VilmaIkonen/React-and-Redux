import * as actionTypes from '../actions/actions'

const initialState = {
  input: ''
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INPUT:
      return {...state, input: state.input}
  }
  return state;
};

export default inputReducer;