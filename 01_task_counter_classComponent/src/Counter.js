import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import * as actionType from './actions/actions'

class Counter extends Component {

  render() {
    return (
      <div>
        <h1>Counter</h1>      
        <div id="display">You've counted to <strong>{this.props.ctr}</strong></div>      
        <button onClick={this.props.addOne}>Add</button>    
        <button onClick={this.props.removeOne}>Remove</button>
        <button onClick={this.props.reset}>Reset</button>           
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  }
};

// Actions and dispatch:
const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch({type: actionType.ADD}),
    removeOne: () => dispatch({type: actionType.REMOVE}),
    reset: () => dispatch({type: actionType.RESET})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
