import React from 'react';
import './styles.css';
import  coverimg  from './cover';
import funcblog from './blogpage';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render() {
    return (
      <>
      <coverimg/>
      <funcblog/>
  </>
 );
  }

}

export default App;
