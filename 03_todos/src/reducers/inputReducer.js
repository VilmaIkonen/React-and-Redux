import * as actionTypes from '../actions/actions'

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INPUT:
      return {...state, input: state.input}
  }
  return state;
};

const initialState = {
  input: ''
}

export default inputReducer;