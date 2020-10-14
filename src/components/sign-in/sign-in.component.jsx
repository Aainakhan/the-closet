import React from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from '../form-button/form-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      email: '',
      password: ''
    }
  }

  handleChange = (event) => (

    event.preventDefault()

  )


  render() {

    return <div className='signIn'>

      <form>
        <h1>I already have an account</h1>
        <h2>Sign in with your email and password</h2>

        <FormInput type='text' name='email' value={this.state.email} handleChange={this.handleChange} label='email' />

        <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='password' />

        <div className='button-groups'>
          <FormButton type='submit' value="submit">Sign In</FormButton>
          <FormButton type="button" onClick={signInWithGoogle} signInWithGoogle>Sign In With Google</FormButton>
        </div>
      </form>

    </div>

  }
}

export default SignIn;