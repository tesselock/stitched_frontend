import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import students from './components/students'
import teachers from './components/students'
import welcome from './components/welcome'

function App() {
  return (
    <Router>
    <div className="container" >
      <header className="App-header">
       <div className="title">       
          StitchEd       
        </div> 
      </header>
    </div>
    <Route path='/' component={welcome}/>
    <Route path='/student' component={students}/>
    <Route path='/teacher' component={teachers}/>
    </Router>
  );
}

export default App;
