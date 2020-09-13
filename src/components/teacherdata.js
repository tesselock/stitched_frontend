import React, {Component} from 'react';
import '../App.css';
// import { Link } from 'react-router-dom'
import Graphs from './graphs';

class teacherdata extends Component {
    render(){
        const {id} = this.props.location.state;
        return(
            <div className="register">
                This is analysis space
                <div className="graph">
                    <Graphs id={id}/>
                </div>
            </div>
        );
    }

}

export default teacherdata;