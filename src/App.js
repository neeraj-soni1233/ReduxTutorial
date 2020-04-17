import React from 'react';

import './App.css';
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h1>"Readx Demo"</h1>
      <h1>Getting data from centralStore {props.myName}</h1>
      <button onClick={
        () => {
          // we are calling changeName function
          props.changeName('Soni Neeraj')
        }
      }>Change It</button>
    </div>
  );
}

// fuction use to get data from cenntral store

const mapTostateProps = (state) => {
  return {
    myName: state.name
  }
}

// fuction use to update data into cenntral store
const mapDispatchToProps = (dispatch) => {

  return {
    changeName: (name) => { // we will use changeName as a function name into button onclick
      dispatch({
        type: 'CHANGE_NAME',
        payload: name
      })
    }
  }
}

// High Order component
export default connect(mapTostateProps, mapDispatchToProps)(App);
