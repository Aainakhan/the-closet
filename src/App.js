import React from 'react';
import {  Route, Switch  } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'


const Hatspage = () => (

    <div className="App">
      Hats Page
    </div>
  );


function App() {
  return (
    <div className="App">
   
    <Switch>
      <Route exact path = '/' component ={Homepage} />
      <Route  path = '/hats' component ={Hatspage} />
    </Switch>
    
    
    </div>
  );
}

export default App;
