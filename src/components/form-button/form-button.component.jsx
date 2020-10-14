import React from "react";

import './form-button.styles.scss';

const FormButton = ({children,signInWithGoogle, ...otherProps}) => (
<button className = {signInWithGoogle? 'signInWithGoogle custom-button' : 'custom-button'} {...otherProps} >{children}</button>

)

export default FormButton;