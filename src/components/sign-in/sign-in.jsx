import React from "react";
import FormInput from "../form-input/form-input"
import "./sign-in.scss";
import CustomButton from '../../components/custom-button/custom-button';
import ReactTypingEffect from 'react-typing-effect'

import {signInWithGoogle} from '../../firebase/firebase.utils.js';



class SignIn extends React.Component{
constructor(props){
    super(props);

    this.state ={
        email: '',
        password:'',
    }
}

handleSubmit = (event) => {
  event.preventDefault(); 
  
  this.setState({email: '', password:'',})
}
handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value})
}


render(){
    return(
  
  <div className='sign-in'>
      <div className ="welcometext">
<ReactTypingEffect
      className="welcome" text= 'Welcome to the Allrange Shopping Store' /> 
            </div>
            <h2> I already have an account</h2>
            <strong>Sign in with your email and password</strong>
            
            <form onSubmit={this.handleSubmit}>
            <FormInput 
            name ="email" 
            type="email" 
            value={this.state.email}
            handleChange={this.handleChange} 
            label = "Email"
            required />
           
            
            <FormInput
            name ="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required />
            
                <div className="buttons">
            <CustomButton type="submit"  > Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
            </div>
            </form>
            

        </div>
    )
}
}

export default SignIn;