import React,  {useState} from 'react';
import  { FormContainer, Background, Button, ContactHeader, }  from './contact.styles';
import FormInput from '../../components/form-input/form-input';
//import CustomButton from '../../components/custom-button/custom-button';
import axios from 'axios';

const ContactPage = () => {    
    const [inputs, setInputs] = useState({email: '', name: '', message:'',})

    const handleChange = (event)=> {
        const {name, value} = event.target
        setInputs(prev => ({...prev, [name]: value }))
      }

      const handleSubmit = e => {
        e.preventDefault()

       /* let url;
        process.env.NODE_ENV === 'production' ?  url = "https://allrange.herokuapp.com/sendtome"
            : url = "/sendtome"; */

    const {email, name, message} = inputs
    axios({
        method: "POST",
        url: "/sendtome",
        data: {
            name,
            email,
            message,
        }})
     .then(response => {
        alert("Message Sent");
        //resetForm();
    })
    .catch(error => {
        console.log('Message Error: ', error);
        alert(
            'Contact me directly'
        );
        //resetForm();
    });
};
/*
const resetForm = () => {
    setInputs('');
};  */   
        return(

            <form onSubmit={handleSubmit}>
           
            <Background>
            
            <FormContainer>
            <ContactHeader>Contact Us</ContactHeader>
            <FormInput
                type="text"
                name="name"
                onChange={handleChange}
                value = {inputs.name}
                label ="Name"
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
            <Button> Submit </Button>
           
        
        </FormContainer>
        </Background>
        </form>
    
)}


export default ContactPage;