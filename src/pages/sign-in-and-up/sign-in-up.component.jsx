import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import './sign-in-up.styles.scss';
import SignUp from "../../components/sign-up/sign-up.component"

const SignInUp = () => (
 <div className = 'signin'>
  <SignIn/>
  <SignUp/>
 </div>
)


export default SignInUp;