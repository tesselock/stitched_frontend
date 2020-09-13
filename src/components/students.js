import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../App.css';


class Students extends Component {

    
    render(){
        return(
            
            <div>
        <div className="register">
        I am a student
        <Link to="/student/login">  
        <button className="button" >LOGIN</button>
        </Link>
        <button className="button" >REGISTER</button>
        </div>
        
        </div>
       
        );
    }

}

export default Students;