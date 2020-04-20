import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import  {anotherName } from './action/myaction';

function App(props) {
  return (
    <div className="App">
    <h1>"Readx Demo"</h1>
  <h1>Getting data from centralStore {props.myName}</h1>
  <button onClick = {
    ()=>{
      props.changeName('Soni Neeraj')
    }
  }>Change It</button>
    </div>
  );
}

const mapTostateProps = (state) =>
{
return {
  myName:state.name
}
}
// below way use in redux thunk
const mapDispatchToProps = (dispatch)=>{

  return {
    changeName:(name)=>{
      dispatch(anotherName(name))
    }
  }
}

export default  connect(mapTostateProps,mapDispatchToProps)(App);
