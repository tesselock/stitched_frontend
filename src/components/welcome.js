import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class welcome extends Component {
    render(){
        return(
            <div>
                
            <div className="register">
                I am a ...
                <Link to="/student">      
                    <button className="button" >Student</button>
                </Link>
                <Link to="/teacher">  
                    <button className="button">Teacher</button>
                </Link>
            </div>
            </div>
        );
    }

}

export default welcome;