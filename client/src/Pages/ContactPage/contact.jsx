import React,  {useState} from 'react';
import  { FormContainer }  from './contact.styles';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import axios from 'axios';

const ContactPage = () => {    
    const [inputs, setInputs] = useState({email: '', name: '', message:'',})

    const handleChange = (event)=> {
        const {name, value} = event.target
        setInputs(prev => ({...prev, [name]: value }))
      }

      const handleSubmit = e => {
        e.preventDefault()

    const {email, name, message} = inputs
    axios({
        url: "sendtome",
        method: 'post',
        data:{
            email: email,
            name: name,
            message: message
        } 
     })
     .then(response => {
        alert("Message Sent");
    })
    .catch(error => {
        console.log('Message Error: ', error);
        alert(
            'Contact me directly'
        );
    });
};
     
        return(
            <form onSubmit={handleSubmit}>
            <FormContainer>
            
            <FormInput
                type="text"
                name="name"
                onChange={handleChange}
                value = {inputs.name}
                label ="name"
                required
                />

    
            <FormInput
                type="email"
                name="email"
                onChange={handleChange}
                value ={inputs.email}
                label="Email"
                required
                />
                 
                <textarea
                name="message"
                type="textarea"
                placeholder = "Message"
                onChange={handleChange}
                value={inputs.message}
                rows='10'
                cols='30'
                />
            <CustomButton> Submit </CustomButton>
        
        </FormContainer>
        </form>
    
)}


export default ContactPage;