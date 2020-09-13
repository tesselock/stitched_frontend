import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class teachers extends Component {

    render(){
        return(
            <div>
           
        <div className="register">
        I am a teacher
        <Link to="/teacher/login">
        <button className="button" >LOGIN</button>
        </Link>
        <Link to="/teacher/register">
        <button className="button" >REGISTER</button>
        </Link>
        </div>
        
        </div>
        );
    }

}

export default teachers;