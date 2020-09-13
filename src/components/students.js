import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


class Students extends Component {

    
    render(){
        return(
            
            <div>
        <div className="register">
        I am a student
        <Link to="/student/register">
        <button className="button" >LOGIN</button>
        </Link>
        <Link to="/student/login">
        <button className="button" >REGISTER</button>
        </Link>
        </div>
        
        </div>
       
        );
    }

}

export default Students;