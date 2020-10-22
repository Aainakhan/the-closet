import React from "react";

import './form-button.styles.scss';

const FormButton = ({children,signInWithGoogle,inverted ,...otherProps}) => (
<button className = {` ${inverted ? 'inverted' : ''} ${signInWithGoogle ? 'signInWithGoogle' : ''} custom-button`} {...otherProps} >{children}</button>

)

export default FormButton;