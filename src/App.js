import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {hot} from 'react-hot-loader';
import './App.css';
import students from './components/students'
import teachers from './components/teachers'
import welcome from './components/welcome'
import {title} from './components/title'
import studentslogin from './components/studentslogin'
import StudentAssignments from './components/studentAssignments';
import studentsregister from './components/studentsregister';
import teacherslogin from './components/teacherslogin';
import teachersregister from './components/teachersregister';

function App() {
  return (
    <Router>

    <div>
      <title/>
      <Switch>
          <Route path='/student' exact component={students}/>
          <Route path='/student/login' exact component={studentslogin}/>
          <Route path='/student/register' exact component={studentsregister}/>
          <Route path='/teacher/login' exact component={teacherslogin}/>
          <Route path='/teacher/register' exact component={teachersregister}/>
          <Route path='/teacher' exact component={teachers}/>
          <Route path='/student/assignments' component={StudentAssignments}/>
          <Route path='/' exact component={welcome}/>
      </Switch>
    </div>

    </Router>
  );
}

export default hot(module)(App);
