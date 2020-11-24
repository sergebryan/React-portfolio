import React, { Component } from 'react';
import './App.css';
import HomeComponent from './components/home'


class App extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return (
      <HomeComponent></HomeComponent>
    );
  }
}


export default App;
