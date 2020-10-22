import React from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from '../form-button/form-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

   const {email,password} = this.state;

   try{
   
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({

      email: '',
      password: ''
    })
   
   }catch(error){
     console.log(error);
   }

   

  }

  handleChange = event => {

    const {name,value} = event.target;

    this.setState({[name] : value})

  }


  render() {

    return <div className='signIn'>

      <form>
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password</h2>

        <FormInput type='text' name='email' value={this.state.email} handleChange={this.handleChange} label='email' />

        <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='password' />

        <div className='button-groups'>
          <FormButton type='submit' value="submit" onClick = {this.handleSubmit}>Sign In</FormButton>
          <FormButton type="button" onClick={signInWithGoogle} signInWithGoogle>Sign In With Google</FormButton>
        </div>
      </form>

    </div>

  }
}

export default SignIn;