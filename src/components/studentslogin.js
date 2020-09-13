import React, {Component} from 'react';
import '../App.css';

class studentslogin extends Component {
    state = {

        //Creats an object that can store the variables
        data: {
          username: '',
          email: '',
          password: '',
          joincode:'',
          isTeacher:'false'
        },
        loading: false,
        errors: {}
      };
   
      //Checks for the change of state and then assigns the form data to the state.
      onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
   
      onSubmit = (e) => {
         e.preventDefault();
         console.log(this.state.data);
         //This checks if the user wants to be an admin and changes it to false to avoid security risks. It also notifies that a specified user wants to be an admin.
         //We can replace the "alert()" function that displays the admin status of a user with a sendEmail function that notifies the platform architect.
         
         this.props.submit(this.state.data);
      };
   
      render() {
        const {data} = this.state;
   
        return(
   
        
         <form onSubmit = {this.onSubmit} >
              <div className="register">
                     I am a student
                 </div>
             <div className="grid-container">
                
             <label htmlFor="username">Username</label>
             <input type="username" placeholder="Enter Username" id="username" name="username" value={data.username} onChange = {this.onChange} required/>
   
             <label htmlFor="username">Join Code</label>
             <input type="username" placeholder="Enter Join Code" id="joincode" name="joincode" value={data.joincode} onChange = {this.onChange} required/>

             <label htmlFor="email">Email</label>
             <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>
   
             
  
             <label htmlFor="password">Password</label>
             <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
             
             </div>
            
             <button type="submit" className="button">Register</button>
         </form>
     
   
        );
       }
  }

  export default studentslogin;