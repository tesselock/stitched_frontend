import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {hot} from 'react-hot-loader';
import './App.css';
import students from './components/students'
import teachers from './components/students'
import welcome from './components/welcome'
import StudentAssignments from './components/studentAssignments';

function App() {
  return (
    <Router>

    <div>
      <Switch>
          <Route path='/student' exact component={students}/>
          <Route path='/teacher' exact component={teachers}/>
          <Route path='/student/assignments' component={StudentAssignments}/>
          <Route path='/' exact component={welcome}/>
      </Switch>
    </div>

    </Router>
  );
}

export default hot(module)(App);
