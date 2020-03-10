import React from "react";
import FormInput from "../form-input/form-input"
import "./sign-in.scss";
import CustomButton from '../../components/custom-button/custom-button';

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
            

            <CustomButton type="submit" 
            > Sign In </CustomButton>
            </form>
            

        </div>
    )
}
}

export default SignIn;