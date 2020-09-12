import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
    <div className="container" >
      <header className="App-header">
        
        <p>
          StitchEd
        </p>
        
      </header>
    </div>
    {/* <Route path="/" exact component={Welcome}/> */}

    </Router>
  );
}

export default App;
