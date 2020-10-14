import React from "react";

import FormInput from "../form-input/form-input.component";
import FormButton from '../form-button/form-button.component'

import { auth , createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component
{
 constructor()
 {
  super();

  this.state =
  {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
  }
 }

 handleSubmit = async (event) => {
  const {displayName,email,password,confirmPassword} = this.state;
  event.preventDefault();

  if(password !== confirmPassword)
  {
   alert("Passwords do not match");
   return;
  }

  try
  {
     const {user} = await auth.createUserWithEmailAndPassword(
      email,password
     );

     await createUserProfileDocument(user,{displayName});

     this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''

     })
  }
  catch(error)
  {
   console.log(error);
  }


 }

 handleChange = event =>
 {
  const {name,value} = event.target;

  this.setState({[name] : value})
 }

 render() {
  const {displayName,email,password,confirmPassword} = this.state;
  return(
   <div className = 'sign-up'>
    <h2 className = 'title'>I do not have a account</h2>
    <span>Sign up with your email and password</span>
    <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>

    <FormInput type = 'text' value = {displayName} name = 'displayName' onChange = {this.handleChange} label = 'Display Name' required/>
    <FormInput type = 'email' value = {email} name = 'email' onChange = {this.handleChange} label = 'Email' required/>
    <FormInput type = 'password' value = {password} name = 'password' onChange = {this.handleChange} label = 'Password' required/>
    <FormInput type = 'password' value = {confirmPassword} name = 'confirmPassword' onChange = {this.handleChange} label = 'Confirm Password' required/>
    <FormButton type = 'submit'>Sign Up</FormButton>

    </form>

   </div>
  
 
  )
 }
}

export default SignUp;